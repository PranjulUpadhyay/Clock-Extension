function updateTime(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    document.getElementsByClassName('time').textContent = `${hours}:${minutes}:${seconds}`;

}

