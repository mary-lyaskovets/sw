if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/sw.js').then(function(worker){
        return worker.sync('syncdata')
    });
}