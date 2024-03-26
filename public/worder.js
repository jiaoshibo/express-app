self.addEventListener('message',e=>{
    console.log('worker 线程:::',e)
    setTimeout(()=>{
        self.postMessage({
            message:'hello webWorker'
        })
    },3000)
})