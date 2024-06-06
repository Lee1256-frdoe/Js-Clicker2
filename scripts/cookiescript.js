
var count = localStorage.getItem("count")
var autoclicker = localStorage.getItem("autoclicker")
var upd1bought = localStorage.getItem("upd1bought")


function start() 
{
    document.getElementById("btn1").textContent = count;
    document.getElementById("upd1").textContent = "Bought " + upd1bought;
    if(upd1bought >= 1) 
    {
        const times = upd1bought;
        for (let i = 0; i < times; i++) 
        {
        doAutoclick();
        }
    }
}

function doAutoclick()
{
    setInterval(cookieMain, 1000);
}

function cookieMain() 
{
    count++;
    document.getElementById("btn1").textContent = count;
    localStorage.setItem("count", count)
}

function upgrade1() 
{
    if(count >= 100) 
    {
        count = count - 100;
        upd1bought++;
        setInterval(cookieMain, 1000);
        localStorage.setItem("count", count)
        localStorage.setItem("upd1bought", upd1bought)
        document.getElementById("upd1").textContent = "Bought " + upd1bought;
        document.getElementById("btn1").textContent = count;
    }
}

function reset()
{
count = 0
autoclicker = 0
upd1bought = 0
localStorage.setItem("upd1bought", upd1bought)
}