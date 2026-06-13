document.querySelectorAll("nav a")
.forEach(a=>{


a.onclick=e=>{


e.preventDefault();


document.querySelector(
a.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


}


});






document.querySelector(".contactBtn")
.onclick=()=>{

location="#contact";

}




document.querySelector(".mainBtn")
.onclick=()=>{

location="#works";

}




document.querySelector(".subBtn")
.onclick=()=>{

location="#contact";

}





document.querySelector("#form")
.onsubmit=e=>{


e.preventDefault();


document.querySelector("#result")
.innerHTML=
"메시지가 전송되었습니다.";

};






const slider =
document.querySelector(".work-slider");


let down=false;

let start;



slider.onmousedown=e=>{

down=true;

start=e.pageX;

};



slider.onmouseup=()=>{

down=false;

};




slider.onmousemove=e=>{


if(!down)return;


slider.scrollLeft +=
(start-e.pageX);


};