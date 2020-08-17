function myFunction(){
var dots= document.getElementById("dots");
var moreText=document.getElementById("more");
var readMoreBtn=document.getElementById("readMoreBtn");

if(dots.style.display==="none"){
dots.style.display="inline";
moreText.style.display="none";
readMoreBtn.innerHTML="Read More";
}
else{
    dots.style.display="none";
    moreText.style.display="inline";
    readMoreBtn.innerHTML="Read Less";
}
}