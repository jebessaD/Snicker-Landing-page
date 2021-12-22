const btn=document.querySelector(".dark");
const html=document.querySelector("html");
const p=document.querySelector(".price");
var dark = false;
btn.addEventListener("click",(e)=>{
    
if (dark===false){
    html.style.background ="rgb(54, 54, 54)";
    html.style.color = "white"
    p.style.color = "white"
    dark =true;
}else{
        html.style.background ="white"
        html.style.color = "black"
        dark =false;    
}
})