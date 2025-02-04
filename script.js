function Myfunction(){
    var buttons = document.getElementById("menubar");

    if(buttons.className === "nav-menu"){
        buttons.className += " response";
    } else {
        buttons.className = "nav-menu";
    }
}

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
    }
}
window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

var typingEffect = new Typed(".textype",{
    strings : ["Gamer", "Developer","Student","Streamer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

sr.reveal('.textcard',{})
  sr.reveal('.name-feature',{delay: 100})
  sr.reveal('.info',{delay: 200})
  sr.reveal('.text-btn',{delay: 200})
  sr.reveal('.socials',{delay: 200})
  sr.reveal('.imgs',{delay: 300})

 
    sr.reveal('.project-box',{interval: 200})
  
    sr.reveal('.top-header',{})
    sr.reveal('.upper-head',{})

  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  srLeft.reveal('.info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srRight.reveal('.skills',{delay: 100})
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.info-about',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})

  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }

  window.addEventListener('scroll', scrollActive)