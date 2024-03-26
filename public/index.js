const worker = new Worker('./worder.js');

const obj = {name:'小明'}


worker.addEventListener('message', e => {
    console.log('主线程监听:::', e)
})


const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    worker.postMessage(obj);
})