1. Установить подключенные модули - `npm i`
2. Запустить базу - `docker run -d -p 27017:27017 mongo`
3. Сделать билд - `npm run build`
4. Запустить сервер - `npm run backend`
5. Перейти на `localhost:2000`

К сожалению, не удалось сделать так, чтобы стили корректно работали с рендерингом на сервере

Чтобы посмотреть корректно стилизованное приложение нужно дополнительно запустить скрипт `npm start` и перейти на `localhost:3000`
 
## Demonstration
![eShop](https://user-images.githubusercontent.com/72819725/162219444-6e8da21c-5f00-4148-98d0-5f58e7d25059.gif)
