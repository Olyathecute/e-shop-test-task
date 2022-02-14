import { MongoClient, ObjectId } from 'mongodb'
import { StaticRouter } from 'react-router-dom/server'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server.js'
import App, { fetchData } from '../src/App.js'
import { CssBaseline } from '@mui/material'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

function createEmotionCache() {
  return createCache({ key: 'css' })
}

const PORT = 2000
const app = express()

app.get(/\.(js|css|map|ico|json)$/, express.static(path.resolve(__dirname, '../dist')))

app.use(/^(?!.*api).*$/, async (req, res) => {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
    encoding: 'utf8'
  })
  const initialState = await fetchData()
  console.log(initialState)
  let appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <CacheProvider value={cache}>
        <CssBaseline />
        <App initialState={initialState} />
      </CacheProvider>
    </StaticRouter>
  )
  const emotionChunks = extractCriticalToChunks(appHTML)
  const emotionCss = constructStyleTagsFromChunks(emotionChunks)

  indexHTML = indexHTML
    .replace('<!--insert css here-->', emotionCss)
    .replace(/%PUBLIC_URL%/g, `http://localhost:${PORT}`)
    .replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`)
  res.contentType('text/html')

  return res.send(indexHTML)
})

const url = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(url)

async function run() {
  const client = await mongoClient.connect()
  const db = client.db('gamesdb')
  const collection = db.collection('games')

  app.use(bodyParser.json())
  app.use(
    cors({
      origin: 'http://localhost:3000'
    })
  )

  app.get('/api/games', async (req, res) => {
    const { ages, types, name } = req.query
    const filter = {}

    if (ages?.length) filter.age = { $in: ages }
    if (types?.length) filter.type = { $in: types }
    if (name?.length) filter.name = new RegExp(name, 'i')

    const games = await collection.find(filter).toArray()
    res.json(games)
  })

  app.put('/api/game', async (req, res) => {
    const { name, players, age, type, description, image } = req.body

    if (!name) return res.sendStatus(400)

    await collection.insertOne({
      name,
      players,
      age,
      type,
      description,
      image
    })
    res.sendStatus(201)
  })

  app.delete('/api/game', async (req, res) => {
    const { _id } = req.query
    if (!_id) return res.sendStatus(400)

    await collection.deleteOne({ _id: new ObjectId(_id) })
    res.sendStatus(200)
  })
  app.listen(PORT, () => console.log('App started at ' + PORT))
}
run()
