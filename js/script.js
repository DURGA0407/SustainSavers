
//sliding effect
var ang = 0;
    
$("#prev").click(function(){
    ang = ang + 22.5;
$("*").css("--ang", ang);
});

$("#next").click(function(){
    ang = ang - 22.5;
$("*").css("--ang", ang);
});

//text typing effect
const sentence = "Let's join our hands to alleviate hunger and food insecurity.....";
const typing = document.getElementById("typing-text");
let i=0;
function typewriter()
{
    if(i<sentence.length)
    {
        typing.innerHTML += sentence.charAt(i);
        i++;
        setTimeout(typewriter,210);
    }
    else{
        i=0;
        typing.innerHTML='';
        setTimeout(typewriter,210);
    }
}

window.onload = function(){
    typewriter();
}