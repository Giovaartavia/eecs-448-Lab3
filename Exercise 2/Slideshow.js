console.clear();

var slideShow = [];
let currSlide = 0;

slideShow[0] = "Image1.jpg"; 
slideShow[1] = "Image2.jpg"; 
slideShow[2] = "Image3.jpg"; 
slideShow[3] = "Image4.jpg";
slideShow[4] = "Image5.jpg";

function getLeft(){
    currSlide = currSlide - 1;
    if(currSlide < 0){
        currSlide = 4;
    }
    document.slide.src = slideShow[currSlide];
}

function getRight(){
    currSlide = currSlide + 1;
    if(currSlide > 4){
        currSlide = 0;
    }
    document.slide.src = slideShow[currSlide];
}