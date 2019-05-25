if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/sw.js').then(function(worker){
        console.log(worker);
    });
}