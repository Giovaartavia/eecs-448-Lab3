console.clear();

var slideShow = [];
let currSlide = 0;

slideShow[0] = "Image1.jpg"; 
slideShow[1] = "Image2.jpg"; 
slideShow[2] = "Image3.jpg"; 
slideShow[3] = "Image4.jpg";
slideShow[4] = "Image5.jpg";

/*function swapImage() 
{ 
document.slide.src = slideShow[i]; 
if(i < slideShow.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",3000); 
} */
//window.onload=swapImage; 

function getLeft(){
    currSlide = currSlide--;
}





function getRight(){
    currSlide = currSlide + 1;
    //console.log(currSlide);
    //console.log(slideShow.length)
    if(currSlide > 5){
        currSlide = 0;
    }
    changeSlide(currSlide);
}

function changeSlide(n){
    //console.log(n)
    
        n = n + 1;

    //console.log(n);
    document.slide.src = slideShow[currSlide];
}  