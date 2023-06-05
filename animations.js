//var i=0,text;
//text = document.getElementByID("about").innerText;

//document.getElementsByClassID("menuANIM").onmouseover = function(){type()};

//function type(){
    //if(i<text.length){
       // text += charAt(i);
       // i++;
       //setTimeout(typing,50);
    //}
//}

const carousel = document.querySelector(".carousel");

let isDragStart = false;

const dragStart = (e) =>
{
    let isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    carousel.scrollLeft = e.pageX;
}
carousel.addEventListener("mosudedown", dragStart);
carousel.addEventListener("mousemove", dragging);