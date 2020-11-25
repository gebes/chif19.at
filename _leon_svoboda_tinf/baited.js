function raveItUp()
{
    if(document.getElementsByTagName("audio")[0].paused === true) document.getElementsByTagName("audio")[0].play()
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+")"
    document.getElementsByTagName("H1")[0].style.color = "rgb("+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+")"
}

setInterval(raveItUp, 60000/136)