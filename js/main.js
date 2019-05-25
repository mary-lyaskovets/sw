if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(worker){
        return worker.sync.register('syncdata')
    });
}