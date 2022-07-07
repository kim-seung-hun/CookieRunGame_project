let time = new Date();

let registDate = $('#registDate').val();

let livetime = Math.floor((time.getTime() - registDate.getTime())/1000)
setInterval(() => {
    document.querySelector('#livetime').innerHTML = livetime
}, 1000);