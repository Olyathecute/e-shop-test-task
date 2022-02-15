import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/footer/ScrollToTop'
import AddGame from './components/main/AddGame'
import NotFound from './components/main/NotFound'
import Home from './components/main/Home'

const url = 'http://localhost:2000/api'

export const fetchData = (filter) => axios.get(url + '/games', { params: filter }).then(({ data }) => data)

function App({ initialState = [] }) {
  const [filter, setFilter] = useState({})
  const [games, setGames] = useState(initialState)

  const requestAndSetGames = async () => setGames(await fetchData(filter))

  const addGame = async (game) => {
    await axios.put(url + '/game', game)
    requestAndSetGames()
  }

  const deleteGame = async (_id) => {
    await axios.delete(url + '/game', { params: { _id } })
    requestAndSetGames()
  }

  useEffect(requestAndSetGames, [filter])
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home games={games} applyFilter={setFilter} deleteGame={deleteGame} />} />
        <Route path="/add" element={<AddGame addGame={addGame} />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
