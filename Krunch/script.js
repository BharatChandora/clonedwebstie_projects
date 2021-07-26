var indexValue = 1;

showSlide(indexValue);

function currentSlide(n) {
    showSlide(indexValue = n);
}

function showSlide(n) {

    var i;
    var slide = document.getElementsByClassName("para");
    var cir = document.getElementsByClassName("cir");

    if(n > slide.length) {indexValue = n}
    if(n < 1) {indexValue = slide.length} 

    for(i =0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for(i =0; i < cir.length; i++) {
        cir[i].className = cir[i].className.replace(" active", "");
    }
    

    slide[indexValue-1].style.display = "block";
    cir[indexValue-1].className += " active";

}

function displayMenu() {

    var menu = document.getElementById("menuul");
    

    if(menu.style.display == "none") {
        menu.style.display = "block" ;
        
    }
    else {
        menu.style.display = "none";
        
    }

}


