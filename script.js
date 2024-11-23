function updateTime(){
    const now = new Date();
    let hour = now.getHours();
    const min = String(now.getMinutes()).padStart(2, '0');;
    const sec = String(now.getSeconds()).padStart(2, '0');;

    //using amPm
    const amPm = hour>=12? 'PM' : 'AM'; // Determine AM/PM
    hour = hour%12 || 12; // Convert 0 (midnight) to 12, and 13-23 to 1-11

    document.getElementById("time").textContent = `${hour}:${min}:${sec} ${amPm}`;
}

//quote function
function showQuote(){
    const quotes = [
        "Time is keep GOING...So YOU also",
        "Laga Reh Baawe",
        "Time isn't STOPPING neither YOU",
        "Ladke Laga Reh",
        "Give BEST...F**k Rest",
        "Arey Darr k Jiya to kiiya Jiya",
        "Manzil ko Bhula k Jiya to kya Jiya",
        "Jo Paani se nahaega vo LIBAAZ badalega...Jo Paseene se nahaega v ITIHAAS badalega"
    ];

    const randomIndex = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
//update time every sec
setInterval(updateTime, 1000);

//show quote
showQuote();    

