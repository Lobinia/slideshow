let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let T;


document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px` ;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }
    updateMargin()
    waitAsec()
};

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0
    }
    updateMargin()
    waitAsec()
};

function updateMargin(){
    let newMargin = (currentSlide * document.querySelector('.slider--item').clientWidth);

    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
};

let timerSlides = setInterval(goNextAuto, 3000)

function waitAsec() {
    clearInterval(timerSlides);
    clearTimeout(T);
    T = setTimeout(()=>{
        timerSlides = setInterval(goNextAuto, 3000)
    }, 5000);
}

function goNextAuto(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0
    }
    updateMargin();
};