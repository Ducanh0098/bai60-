var slider = document.querySelector('.slider');
        var currentIndex = 0;

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slider.children.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
            updateSlider();
        }

        function updateSlider() {
            var translateValue = -currentIndex * 100 + '%';
            slider.style.transform = 'translateX(' + translateValue + ')';
        }

        // Optional: Automatically advance to the next slide every few seconds
        setInterval(nextSlide, 3000);



/*const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close');

     if(navToggle) {
        navToggle.addEventListener("click", () => {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        })
     }

     if(navClose) {
        navToggle.addEventListener("click", () => {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
            })
        })
     }*/



function scrollHeader() {
    const header = document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');

}

window.addEventListener('scroll',scrollHeader);



const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target =document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('services__active')
        })

        target.classList.add('services__active')

        tabs.forEach(tab => {
            tab.classList.remove('services__active')
        })

        target.classList.add('services__active')
    })
})      


// light box 

/*const portfolioItems = document.querySelectorAll(".work__content"),
    totalPortfolioItem = portfolioItems.length,
    lightbox = document.querySelector(".lightbox"),
    lightboxImg = document.querySelector(".lightbox__img"),
    lightboxCounter = document.querySelector(".caption__counter");

let itemIndex = 0;

for(i = 0;i<totalPortfolioItem;i++) {
    portfolioItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".work__content img").getAttribute('src')
    lightboxImg.src= im  gSrc;
    lightboxCounter.innerHTML = (itemIndex+1) + "of" + totalPortfolioItem;
}*/
    


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Email validation using a simple regex
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Additional validation can be added as needed

    return true;
}

       /* function toggleMenu() {
            nav.classList.toggle('menu-open');
        }

        document.querySelectorAll('.styled-link').forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var targetId = link.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            });
        });
        */

        function scrollToTarget(targetId) {
            var targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        function toggleMenu() {
            var menu = document.querySelector('."nav__menu');
            menu.classList.toggle('show');
        }


       /* var homeSwiper = new Swiper(".home-swiper", {
            spaceBetween: 16,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: 'true',
          });*/

       /*   var homeswiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          }); */

          let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Thay đổi 2000 thành thời gian mong muốn giữa các slide
}

function changeSlide(n) {
  slideIndex += n;
  const slides = document.getElementsByClassName("slide");

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});


       
