var slideimages =[
    'images/image0.jpg',
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg'
 ];

var slidelinks = [
    'https://unsplash.com/photos/VjiY5dOmNXk',
    'https://unsplash.com/photos/qoKsbHSqU-w',
    'https://unsplash.com/photos/AtDUYurMJIU',
    'https://unsplash.com/photos/OoQKL4cLZuc',
    'https://unsplash.com/photos/TRhGEGdw-YY',
    'https://unsplash.com/photos/ExarETx4xNA',
    'https://unsplash.com/photos/yfQRbv7oYCg'
]; 

function gotoshow() {
    if (!window.winslide || winslide.closed)
        winslide=window.open(slidelinks[index]);
        
    else 
        winslide.location=slidelinks[index];
        winslide.focus();
} 

//TO DO E: configure the speed of the slideshow, in milliseconds 
var slideshowspeed= 1000 * 1;

var index= 0;
//I have used this variable as flag coubnter value
//If value of this variable s 1, then slide show will continue, if 0, then image will not slide
var continueSlideShow = 1;


function stopSlideShow(){
    if(continueSlideShow==1){
        continueSlideShow=0;
        btnStopSlide.innerText = "Resume";
    }else{
        continueSlideShow=1;
        btnStopSlide.innerText = "Stop";
        slideit();
    }
}

function slideit() {
    //TO DO F: update index so that the image keep rotating for ever
    if(continueSlideShow==1){
        var imageElement = document.getElementById('slider');

        if ( index == slideimages.length - 1 ) {
            index = 0;
        } else {
            index++ ;
        }

        //TO DO G: set the next image in the img tag
        imageElement.setAttribute('src', slideimages[index]);
        
        setTimeout("slideit()",slideshowspeed);
    }
}
