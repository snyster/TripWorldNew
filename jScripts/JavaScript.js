var currentSlide = 1;
function plusOne() {
    if (currentSlide < 6) {
        currentSlide++
        showSlides(currentSlide)
    }
}
function minusOne() {
    if (currentSlide > 1) {
        currentSlide--
        showSlides(currentSlide)
    }
}
function showSlides(currentSlide) {
    if (currentSlide == 1) {
        document.getElementById("picture1").style.display = "inline-block";
        document.getElementById("picture2").style.display = "none";
        document.getElementById("picture3").style.display = "none";
        document.getElementById("picture4").style.display = "none";
        document.getElementById("picture5").style.display = "none";
        document.getElementById("picture6").style.display = "none";
    }
    if (currentSlide == 2) {
        document.getElementById("picture1").style.display = "none";
        document.getElementById("picture2").style.display = "inline-block";
        document.getElementById("picture3").style.display = "none";
        document.getElementById("picture4").style.display = "none";
        document.getElementById("picture5").style.display = "none";
        document.getElementById("picture6").style.display = "none";
    }
    if (currentSlide == 3) {
        document.getElementById("picture1").style.display = "none";
        document.getElementById("picture2").style.display = "none";
        document.getElementById("picture3").style.display = "inline-block";
        document.getElementById("picture4").style.display = "none";
        document.getElementById("picture5").style.display = "none";
        document.getElementById("picture6").style.display = "none";
    }
    if (currentSlide == 4) {
        document.getElementById("picture1").style.display = "none";
        document.getElementById("picture2").style.display = "none";
        document.getElementById("picture3").style.display = "none";
        document.getElementById("picture4").style.display = "inline-block";
        document.getElementById("picture5").style.display = "none";
        document.getElementById("picture6").style.display = "none";
    }
    if (currentSlide == 5) {
        document.getElementById("picture1").style.display = "none";
        document.getElementById("picture2").style.display = "none";
        document.getElementById("picture3").style.display = "none";
        document.getElementById("picture4").style.display = "none";
        document.getElementById("picture5").style.display = "inline-block";
        document.getElementById("picture6").style.display = "none";
    }
    if (currentSlide == 6) {
        document.getElementById("picture1").style.display = "none";
        document.getElementById("picture2").style.display = "none";
        document.getElementById("picture3").style.display = "none";
        document.getElementById("picture4").style.display = "none";
        document.getElementById("picture5").style.display = "none";
        document.getElementById("picture6").style.display = "inline-block";
    }

}