const date = new Date().setHours(new Date().getHours() + 192)

setInterval(() => {
    const currentDate = new Date();
    const timeBetween = Math.ceil((date - currentDate)/1000)
    
}, 1000);