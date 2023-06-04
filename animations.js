var i=0,text;
text = document.getElementByID("about").innerText;

document.getElementsByClassID("menuANIM").onmouseover = function(){type()};

function type(){
    if(i<text.length){
        text += charAt(i);
        i++;
        setTimeout(typing,50);
    }
}