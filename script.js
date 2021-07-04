<<<<<<< HEAD
// let search = window.location.search

// let text = document.getElementById('text').innerHTML = search

import bridge from '@vkontakte/vk-bridge';

// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});

// Sending event to client
bridge
  .send('VKWebAppGetEmail')
  .then(data => {
    // Обработка события в случае успеха
    console.log(data.email);
  })
  .catch(error => {
    // Обработка события в случае ошибки
  });
=======
let search = window.location.search
let text = document.getElementById('text').innerHTML = search
>>>>>>> 7764254d95442e65382f1b75a6a769713a26b3c9
