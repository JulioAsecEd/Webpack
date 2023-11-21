// lazy loading

document.getElementById("lazy-Loading").addEventListener("click", ()=>{
    import('./teste.js').then(module =>{
        module.sayHello() 
    })
})