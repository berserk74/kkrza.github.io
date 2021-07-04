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