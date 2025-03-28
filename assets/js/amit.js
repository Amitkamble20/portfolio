
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// link to button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('visit-works');
    button.addEventListener('click', () => {
        window.location.href = 'assets/myWork.html'; 
    });
});

// Work 

document.addEventListener("DOMContentLoaded", () => {
    const visitButton = document.getElementById("visit-works");
    const worksSection = document.getElementById("works-section");
    const homeSection = document.getElementById("home");

    visitButton.addEventListener("click", () => {
        homeSection.classList.add("return");
        setTimeout(() => {
            homeSection.style.display = "none";
            worksSection.classList.remove("hidden");
            worksSection.classList.add("visible");
        }, 500); // Matches the CSS transition duration
    });

    worksSection.addEventListener("click", () => {
        worksSection.classList.remove("visible");
        worksSection.classList.add("hidden");
        setTimeout(() => {
            worksSection.style.display = "none";
            homeSection.style.display = "block";
            homeSection.classList.remove("return");
        }, 500);
    });
});


