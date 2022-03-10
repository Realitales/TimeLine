console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  const data = ev.data.json();
  console.log('Got push', data);
  self.registration.showNotification(data.title, {
    body: 'Hello, World!',
    icon: 'https://cdn.discordapp.com/attachments/938049053579706408/950369957957472276/Logo1_Colored.png'
  });
});