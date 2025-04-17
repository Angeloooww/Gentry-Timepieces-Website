document.addEventListener("DOMContentLoaded", function() {
    const typedTextElement = document.getElementById('typed-text');
    document.getElementById('typed-text').style.fontSize = '2.5rem';
    const textToType = "#Time Refined, Elegance Defined";
    let index = 0;
    let typingSpeed = 170;

    function typeText() {
        if (index < textToType.length) {
            typedTextElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const typedTextElement = document.getElementById('typed-text1');
    document.getElementById('typed-text').style.fontSize = '2.5rem';
    const textToType = "Brand Information";
    let index = 0;
    let typingSpeed = 350;

    function typeText() {
        if (index < textToType.length) {
            typedTextElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); 
});

document.querySelectorAll('.zoom').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.2)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
