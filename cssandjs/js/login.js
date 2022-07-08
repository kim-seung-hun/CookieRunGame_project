setInterval(() => {
    let time = new Date();
    
    let registDate = $('#registDate').val();
    let regist = new Date(registDate)
    
    
    let livetime = Math.floor((time.getTime() - regist.getTime()) / 1000)
    let day = Math.floor(livetime / 86400); 
    let hour = Math.floor((livetime - (day * 86400)) / 3600);
    let minute = Math.floor((livetime - (day * 86400) - (hour * 3600)) / 60)
    let second = Math.floor(livetime - (day * 86400) - (hour * 3600) - (minute * 60))
    document.querySelector('#livetime').innerHTML = `가입 하신지 ${day}일 ${hour}시간 ${minute}분 ${second}초 경과하였습니다.`
}, 1);