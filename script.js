window.onload=()=>{
    const slidero = document.getElementById("Showcase");
    const listGambarSlideshow=[3,5,6,7,8,13];
    let counter = 0;
    slidero.style.backgroundImage = "url('Assets\\ImagelandScape/"+listGambarSlideshow[counter] +".jpg')";
    setInterval(function(){
    if(counter > 5){
    counter = 0;
    }  
    counter++;
    },500)
}