self.addEventListener('install', (event)=>{
    console.log(event, ' installed');
});

self.addEventListener('activate', (event)=>{
    console.log(event, ' active');
});

self.addEventListener('fetch', (event)=>{
    console.log(event, ' request');
});