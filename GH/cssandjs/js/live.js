setInterval(() => {
    let time = new Date();

    let registDate = $('#registDate').val();

    let registDate1 = new Date(registDate);

    let livetime = Math.floor((time.getTime() - registDate1.getTime()) / 1000)

    let day = Math.floor(livetime / 86400); 3
        
    let hour = Math.floor((livetime - day*86400) / 3600)
    
    let minute = Math.floor((livetime - (day * 86400 + hour * 3600)) / 60)
    
    let second = livetime - (day*86400 + hour*3600 + minute*60)

    document.querySelector('#livetime').innerHTML = `가입하신지 ${day}일 ${hour}시간 ${minute}분 ${second}초가 지났습니다.`
}, 100);