// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Optional: Fade-in effect when sections come into view
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
          section.classList.add('fade-in');
      }
  });

  
});


document.addEventListener('DOMContentLoaded', function() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
     // console.log(`Section ID: ${id}, Offset: ${offset}, Height: ${height}`);
      
      if (top >= offset && top <= offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
          if (activeLink) {
            activeLink.classList.add('active');
          }
        });
      }
    });
  };

  

});


// document.addEventListener('DOMContentLoaded', () => {
//   let toggleBtn = document.getElementById("toggle-language");
//   let contentEN = document.getElementById("content-en");
//   let contentIT = document.getElementById("content-it");

//   // Check localStorage for language preference
//   let savedLanguage = localStorage.getItem("language");
//   if (savedLanguage === "it") {
//     contentEN.style.display = "none";
//     contentIT.style.display = "block";
//     toggleBtn.textContent = "English";  // Change button text to 'English'
//   } else {
//     contentEN.style.display = "block";
//     contentIT.style.display = "none";
//     toggleBtn.textContent = "Italian";  // Default to 'Italian' text
//   }

//   // Toggle language when the button is clicked
//   toggleBtn.addEventListener("click", function() {
//     if (contentEN.style.display === "none") {
//       contentEN.style.display = "block";
//       contentIT.style.display = "none";
//       this.textContent = "Italian"; // Change button text to 'Italian'
//       localStorage.setItem("language", "en"); // Save language preference
//     } else {
//       contentEN.style.display = "none";
//       contentIT.style.display = "block";
//       this.textContent = "English"; // Change button text to 'English'
//       localStorage.setItem("language", "it"); // Save language preference
//     }
//   });
// });




const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}






// Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
  const langMenu = document.querySelector('.lang-menu ul');
  const langMenuButton = document.querySelector('.lang-menu .selected-lang');
  
  // If the click is outside of the language menu, close it
  if (!langMenuButton.contains(event.target) && !langMenu.contains(event.target)) {
    langMenu.style.display = 'none';
  }
});

 // Select all menu items with a submenu
const submenuIcons = document.querySelectorAll('.has-submenu .submenu-icon');

// Add event listeners to submenu toggle icons
submenuIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    // Prevent default behavior
    e.preventDefault();
    
    // Toggle "open" class on the parent list item
    const parent = icon.closest('.has-submenu');
    parent.classList.toggle('open');
  });
}); 

// JavaScript for mobile to show submenu on click
const menuItems = document.querySelectorAll('.has-submenu');

menuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 1200) {
      // Toggle the 'active' class to show or hide the submenu
      this.classList.toggle('active');
      // Prevent click event from propagating to parent elements
      e.stopPropagation();
    }
  });
});

// Close submenus if clicked outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.has-submenu')) {
    menuItems.forEach(item => item.classList.remove('active'));
  }
});


// animation.js
const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
).start();

// Add JavaScript to handle the click event on mobile for flipping the card
function flipCard(event) {
  const card = event.currentTarget;
  card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", () => {
  const serviceGroups = document.querySelectorAll(".service-group");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  serviceGroups.forEach((group) => {
    observer.observe(group);
  });
});


/* ScrollReveal().reveal('.prove', { delay:500});
 */
document.addEventListener('DOMContentLoaded', () => {
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  

  let imageSpace = document.querySelector('.image-space');

  console.log(prev, imageSpace); // Check if elements are found

  let degrees = 0;

  if (prev) {
    prev.addEventListener('click', function() {
      console.log('Button clicked'); // Debug message
      degrees += 45;
      imageSpace.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
    });
  } else {
    console.error('prev button not found');
  }
});

/* (function($){
  $.fn.timeline = function(){
    var selectors = {
id: $(this),
item: $(this).find(".timeline-item"),
activeClass: "timeline-item--active",
img: ".timeline_img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image",
      "url(" + selectors.item
      .first()
      .find(selectors.img)
      .attr("src") +
      ")"
    );

    var itemLength = selectors.item.length;
    var debounce = function(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };
    
    $(window).scroll(debounce(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        console.log(that.offset().top, that.height());

        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height()/2){
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
            .last()
            .find(selectors.img)
            .attr("src") + 
            ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos<= max-40 && pos>= min) {
          selectors.id.css(
            "background-image",
            "url(" +
            $(this)
            .find(selectors.img)
            .attr("src") +
            ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    }, 100)
  );
  };
})(jQuery);
$(document).ready(function() {
  $("#timeline-1").timeline();
}); */

// (function($) {
//   $.fn.timeline = function() {
//     var selectors = {
//       id: $(this),
//       item: $(this).find(".timeline-item"),
//       activeClass: "timeline-item--active",
//       img: ".timeline_img"
//     };
    
//      // Ensure there are timeline items to work with
//      if (selectors.item.length > 0) {
//     selectors.item.eq(0).addClass(selectors.activeClass);
//     // Set the background image of the timeline container to the image of the first item
//     var firstImageSrc = selectors.item.first().find(selectors.img).attr("src");
//     if (firstImageSrc) {
//       selectors.id.css("background-image", "url(" + firstImageSrc + ")");
//     }

//     var itemLength = selectors.item.length;
//     $(window).on(
//       "scroll",
//       debounce(function() {
//         var pos = $(this).scrollTop();
//         selectors.item.each(function(i) {
//           var min = $(this).offset().top;
//           var max = $(this).height() + $(this).offset().top;
//           if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
//             selectors.item.removeClass(selectors.activeClass);
//             // selectors.id.css(
//             //   "background-image",
//             //   "url(" +
//             //     selectors.item.last().find(selectors.img).attr("src") +
//             //     ")"
//             // );
//             var lastImageSrc = selectors.item.last().find(selectors.img).attr("src");
//             if (lastImageSrc) {
//               selectors.id.css("background-image", "url(" + lastImageSrc + ")");
//             }
//             selectors.item.last().addClass(selectors.activeClass);
//           } 
//                     // Handle active class and background image change for each item

//           else if (pos <= max - 40 && pos >= min) {
//             // selectors.id.css(
//             //   "background-image",
//             //   "url(" +
//             //     $(this).find(selectors.img).attr("src") +
//             //     ")"
//             // );
//             var currentImageSrc = $(this).find(selectors.img).attr("src");
//             if (currentImageSrc) {
//               selectors.id.css("background-image", "url(" + currentImageSrc + ")");
//             }
//             selectors.item.removeClass(selectors.activeClass);
//             $(this).addClass(selectors.activeClass);
//           }
//         });
//       }, 100) // Adjust debounce delay as needed
    
//     );
//   };
// })(jQuery);

// $(document).ready(function() {
//   $("#timeline-1").timeline();
// });


// // Debounce function for optimizing scroll event handling
// function debounce(func, wait) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// function sendEmail(){
//   let parms = {
//   name : document.getElementById("name").value,
//   email : document.getElementById("email").value, 
//   subject : document.getElementById("phoneNumber").value, 
//   message : document.getElementById("message").value,
//   }

//   emailjs.send("service_tx731e8", "template_wp9t8o6", parms).then(alert("Email Sent!!"))
// }


// Load the selected language
function loadLanguage(lang) {
  let currentLanguage = "en"; // Default language is English

  // Update the current language
  currentLanguage = lang;

  // Load the JSON file for the selected language
  fetch(`../json/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update page content with the new language data
       // Update the header content dynamically
       document.querySelector(".active").innerText = data.header.home;
       document.querySelector(".aus").innerText = data.header.about_us;
       document.querySelector(".srvc").innerText = data.header.services;
       document.querySelector(".tech").innerText = data.header.technology;
       document.querySelector(".gall").innerText = data.header.gallery;
       document.querySelector(".con").innerText = data.header.contact;
       document.querySelector(".rev").innerText = data.header.reviews;
       document.querySelector(".tplan").innerText = data.header.treatment_plan;

       



        // Update the hero section content dynamically
      document.querySelector(".hero-h1").innerText = data.hero.h1;
      document.querySelector(".hero-motto").innerText = data.hero.h2;
      document.querySelector(".hero-paragraph").innerText = data.hero.p;
      document.querySelector(".hero-cta").innerText = data.hero.cta;


         // Update the About Us section content dynamically
         document.querySelector(".about-us-h1").innerText = data.about_us.h1;
         document.querySelector(".about-us-p1").innerHTML = data.about_us.p1;
         document.querySelector(".about-us-p2").innerHTML = data.about_us.p2;
         
      



       // Update section title
  document.getElementById('services-title').innerText = data.services.title;

  // Update Service Group 1: Dental Cleaning
  document.getElementById('dental-cleaning-title').innerText = data.services.dental_cleaning.title;
  document.getElementById('dental-cleaning-description').innerText = data.services.dental_cleaning.description;
  const dentalCleaningList = data.services.dental_cleaning.services_list;
  const dentalCleaningItems = document.querySelectorAll('#dental-cleaning-list li');
  dentalCleaningList.forEach((item, index) => {
    dentalCleaningItems[index].innerText = item;
  });

  // Update Service Group 2: Aesthetic
  document.getElementById('aesthetic-title').innerText = data.services.aesthetic.title;
  document.getElementById('aesthetic-description').innerText = data.services.aesthetic.description;
  const aestheticList = data.services.aesthetic.services_list;
  const aestheticItems = document.querySelectorAll('#aesthetic-list li');
  aestheticList.forEach((item, index) => {
    aestheticItems[index].innerText = item;
  });

  // Update Service Group 3: General Surgery
  document.getElementById('general-surgery-title').innerText = data.services.general_surgery.title;
  document.getElementById('general-surgery-description').innerText = data.services.general_surgery.description;
  const generalSurgeryList = data.services.general_surgery.services_list;
  const generalSurgeryItems = document.querySelectorAll('#general-surgery-list li');
  generalSurgeryList.forEach((item, index) => {
    generalSurgeryItems[index].innerText = item;
  });

      // Update the Technology section
      document.querySelector('[data-i18n="technology.title"]').textContent = data.technology.title;
      document.querySelector('[data-i18n="technology.description"]').textContent = data.technology.description;
      document.querySelector('[data-i18n="tap-to-flip"]').textContent = data.technology["tap-to-flip"];

      // Loop through each service in the Technology section
      data.technology.services.forEach((service, index) => {
        // Update the front of the card
        document.querySelector(`[data-i18n="technology.services[${index}].title"]`).textContent = service.title;
        document.querySelector(`[data-i18n="technology.services[${index}].description"]`).textContent = service.description;

        // Update the back description of each service (flip_description)
        service.flip_description.forEach((flip, flipIndex) => {
          document.querySelector(`[data-i18n="technology.services[${index}].flip_description[${flipIndex}].text"]`).textContent = flip.text;
        });
      });



 // **Update Gallery Section**
 document.querySelector(".gallery-title h2").innerText = data.gallery.title;
 document.querySelector(".gallery-title p").innerText = data.gallery.description;


 // Update the Timeline section
 document.querySelector(".timeline-header__title").textContent = data.timeline.title;
 document.querySelector(".timeline-header__subtitle").textContent = data.timeline.subtitle;

 // Loop through each step in the Timeline section
 const timelineItems = document.querySelectorAll(".timeline-item");
 data.timeline.steps.forEach((step, index) => {
   if (timelineItems[index]) {
     timelineItems[index].querySelector(".timeline_content-title").textContent = step.title;
     timelineItems[index].querySelector(".timeline_content-desc").textContent = step.description;
   }
 });

// Update the Reviews section
document.querySelector(".left-section h2").textContent = data.reviews.title;
document.querySelector(".reviews-link").textContent = data.reviews.reviews_link;

// Loop through each comment and update its content
const comments = document.querySelectorAll(".comment");
data.reviews.comments.forEach((comment, index) => {
  if (comments[index]) {
    comments[index].querySelector("p").textContent = comment.text;
    comments[index].querySelector(".author").textContent = comment.author;
  }
});


        // Update the Contact section
        document.querySelector(".contactUs .title h2").textContent = data.contact.title;

     // Update the contact form
const form = document.querySelector(".contact.form");
if (form) {
  form.querySelector("h3").textContent = data.contact.form.heading;

  // Update labels and placeholders
  const firstNameLabel = form.querySelector('span[data-i18n="contact.form.firstName"]');
  if (firstNameLabel) firstNameLabel.textContent = data.contact.form.firstName;
  const firstNameInput = form.querySelector('input[placeholder="Alessandro"]');
  if (firstNameInput) firstNameInput.placeholder = data.contact.form.firstName;

  const lastNameLabel = form.querySelector('span[data-i18n="contact.form.lastName"]');
  if (lastNameLabel) lastNameLabel.textContent = data.contact.form.lastName;
  const lastNameInput = form.querySelector('input[placeholder="Doe"]');
  if (lastNameInput) lastNameInput.placeholder = data.contact.form.lastName;

  const emailLabel = form.querySelector('span[data-i18n="contact.form.email"]');
  if (emailLabel) emailLabel.textContent = data.contact.form.email;
  const emailInput = form.querySelector('input[placeholder="alessandrodoe@gmail.com"]');
  if (emailInput) emailInput.placeholder = data.contact.form.email;

  const phoneLabel = form.querySelector('span[data-i18n="contact.form.phone"]');
  if (phoneLabel) phoneLabel.textContent = data.contact.form.phone;
  const phoneInput = form.querySelector('input[placeholder="+39 2282890893"]');
  if (phoneInput) phoneInput.placeholder = data.contact.form.phone;

  const messageLabel = form.querySelector('span[data-i18n="contact.form.message"]');
  if (messageLabel) messageLabel.textContent = data.contact.form.message;
  const messageTextarea = form.querySelector('textarea[placeholder="Write your message here..."]');
  if (messageTextarea) messageTextarea.placeholder = data.contact.form.message;

  const submitButton = form.querySelector('input[type="submit"]');
  if (submitButton) submitButton.value = data.contact.form.sendButton;
} else {
  console.error("Contact form not found!"); // Debugging line
}
     
   
updateLanguageMenu(currentLanguage);
   
    })
  .catch((error) => {
    console.error("Error loading language file:", error);
  });

 
}

// Update the language menu to show the correct options
// function updateLanguageMenu(currentLanguage) {
//   const selectedLangText =
//     currentLanguage === "en"
//       ? "English"
//       : currentLanguage === "it"
//       ? "Italian"
//       : "Albanian";
  
//   document.querySelector(".selected-lang").innerText = selectedLangText;


//   // Wait for the language menu items to be available in the DOM
//   const langMenu = document.querySelector(".language-options");
//   if (langMenu) {
//     const menuItems = langMenu.querySelectorAll('li a');

//     if (menuItems.length > 0) {
//       // Set the menu options based on the current language
//       if (currentLanguage === "en") {
//         menuItems[0].innerText = "Italian";
//         menuItems[1].innerText = "Albanian";
//         menuItems[0].setAttribute('href', 'javascript:void(0);');
//         menuItems[1].setAttribute('href', 'javascript:void(0);');
        
//         // Assign click event listeners to each language option
//         menuItems[0].onclick = function () { loadLanguage('it'); };
//         menuItems[1].onclick = function () { loadLanguage('sq'); };
//       } else if (currentLanguage === "it") {
//         menuItems[0].innerText = "English";
//         menuItems[1].innerText = "Albanian";
//         menuItems[0].setAttribute('href', 'javascript:void(0);');
//         menuItems[1].setAttribute('href', 'javascript:void(0);');
        
//         menuItems[0].onclick = function () { loadLanguage('en'); };
//         menuItems[1].onclick = function () { loadLanguage('sq'); };
//       } else if (currentLanguage === "sq") {
//         menuItems[0].innerText = "English";
//         menuItems[1].innerText = "Italian";
//         menuItems[0].setAttribute('href', 'javascript:void(0);');
//         menuItems[1].setAttribute('href', 'javascript:void(0);');
        
//         menuItems[0].onclick = function () { loadLanguage('en'); };
//         menuItems[1].onclick = function () { loadLanguage('it'); };
//       }
//     } else {
//       console.error("Language menu items not found.");
//     }
//   } else {
//     console.error("Language menu not found.");
//   }
// }
// function updateLanguageMenu(currentLanguage) {
//   const selectedLangText =
//     currentLanguage === "en"
//       ? "English"
//       : currentLanguage === "it"
//       ? "Italian"
//       : "Albanian";

//   // Update the selected language text
//   const selectedLangElement = document.querySelector(".selected-lang");
//   if (selectedLangElement) {
//     console.log("Selected language element found:", selectedLangElement); // Debugging line
//     selectedLangElement.innerText = selectedLangText;

//     // Update the selected language flag
//     const flagMap = {
//       en: "/images/united-kingdom.png",
//       it: "/images/italy.png",
//       sq: "/images/albania.png",
//     };
//     const flagIcon = selectedLangElement.querySelector(".flag-icon");
//     if (flagIcon) {
//       console.log("Selected flag icon found:", flagIcon); // Debugging line
//       flagIcon.src = flagMap[currentLanguage];
//       flagIcon.alt = `${selectedLangText} Flag`;
//     } else {
//       console.error("Selected flag icon not found!"); // Debugging line
//     }
//   } else {
//     console.error("Selected language element not found!"); // Debugging line
//   }

//   // Update the language menu options
//   const langMenu = document.querySelector(".language-options");
//   if (langMenu) {
//     console.log("Language menu found:", langMenu); // Debugging line
//     const menuItems = langMenu.querySelectorAll("li a");

//     if (menuItems.length > 0) {
//       console.log("Menu items found:", menuItems); // Debugging line
//       // Set the menu options based on the current language
//       if (currentLanguage === "en") {
//         menuItems[0].innerText = "Italian";
//         menuItems[1].innerText = "Albanian";
//         const flag1 = menuItems[0].querySelector("img.flag-icon");
//         const flag2 = menuItems[1].querySelector("img.flag-icon");
//         if (flag1 && flag2) {
//           console.log("Dropdown flag icons found:", flag1, flag2); // Debugging line
//           flag1.src = "/images/italy.png";
//           flag2.src = "/images/albania.png";
//         } else {
//           console.error("Dropdown flag icons not found!"); // Debugging line
//         }
//       } else if (currentLanguage === "it") {
//         menuItems[0].innerText = "English";
//         menuItems[1].innerText = "Albanian";
//         const flag1 = menuItems[0].querySelector("img.flag-icon");
//         const flag2 = menuItems[1].querySelector("img.flag-icon");
//         if (flag1 && flag2) {
//           console.log("Dropdown flag icons found:", flag1, flag2); // Debugging line
//           flag1.src = "/images/united-kingdom.png";
//           flag2.src = "/images/albania.png";
//         } else {
//           console.error("Dropdown flag icons not found!"); // Debugging line
//         }
//       } else if (currentLanguage === "sq") {
//         menuItems[0].innerText = "English";
//         menuItems[1].innerText = "Italian";
//         const flag1 = menuItems[0].querySelector("img.flag-icon");
//         const flag2 = menuItems[1].querySelector("img.flag-icon");
//         if (flag1 && flag2) {
//           console.log("Dropdown flag icons found:", flag1, flag2); // Debugging line
//           flag1.src = "/images/united-kingdom.png";
//           flag2.src = "/images/italy.png";
//         } else {
//           console.error("Dropdown flag icons not found!"); // Debugging line
//         }
//       }
//     } else {
//       console.error("Language menu items not found.");
//     }
//   } else {
//     console.error("Language menu not found.");
//   }
// }

function updateLanguageMenu(currentLanguage) {
  const selectedLangText =
    currentLanguage === "en"
      ? "English"
      : currentLanguage === "it"
      ? "Italian"
      : "Albanian";

  // Update the selected language text and flag
  const selectedLangElement = document.querySelector(".selected-lang");
  if (selectedLangElement) {
    console.log("Selected language element found:", selectedLangElement); // Debugging line

    // Create or update the flag icon
    const flagMap = {
      en: "/images/united-kingdom.png",
      it: "/images/italy.png",
      sq: "/images/albania.png",
    };

    // Check if the flag icon already exists
    let flagIcon = selectedLangElement.querySelector(".flag-icon");
    if (!flagIcon) {
      // If the flag icon doesn't exist, create it
      flagIcon = document.createElement("img");
      flagIcon.classList.add("flag-icon");
      selectedLangElement.prepend(flagIcon); // Add the flag icon at the beginning of the selectedLangElement
    }

    // Update the flag icon's src and alt attributes
    flagIcon.src = flagMap[currentLanguage];
    flagIcon.alt = `${selectedLangText} Flag`;

    // Update the text content of the selected language element
    selectedLangElement.innerHTML = `${flagIcon.outerHTML} ${selectedLangText}`;
  } else {
    console.error("Selected language element not found!"); // Debugging line
  }

  // Update the language menu options
  const langMenu = document.querySelector(".language-options");
  if (langMenu) {
    console.log("Language menu found:", langMenu); // Debugging line
    const menuItems = langMenu.querySelectorAll("li a");

    if (menuItems.length > 0) {
      console.log("Menu items found:", menuItems); // Debugging line

      // Define the flag icons for each language option
      const flagMapMenu = {
        en: "/images/united-kingdom.png",
        it: "/images/italy.png",
        sq: "/images/albania.png",
      };

      // Update each menu item
      menuItems.forEach((menuItem, index) => {
        // Determine the language and flag for this menu item
        let lang, flagSrc;
        if (currentLanguage === "en") {
          lang = index === 0 ? "it" : "sq"; // First item: Italian, Second item: Albanian
        } else if (currentLanguage === "it") {
          lang = index === 0 ? "en" : "sq"; // First item: English, Second item: Albanian
        } else if (currentLanguage === "sq") {
          lang = index === 0 ? "en" : "it"; // First item: English, Second item: Italian
        }
        flagSrc = flagMapMenu[lang];

        // Check if the flag icon already exists in the menu item
        let flagIconMenu = menuItem.querySelector(".flag-icon");
        if (!flagIconMenu) {
          // If the flag icon doesn't exist, create it
          flagIconMenu = document.createElement("img");
          flagIconMenu.classList.add("flag-icon");
          menuItem.prepend(flagIconMenu); // Add the flag icon at the beginning of the menu item
        }

        // Update the flag icon's src and alt attributes
        flagIconMenu.src = flagSrc;
        flagIconMenu.alt = `${lang === "en" ? "English" : lang === "it" ? "Italian" : "Albanian"} Flag`;

        // Update the text content of the menu item
        menuItem.innerHTML = `${flagIconMenu.outerHTML} ${lang === "en" ? "English" : lang === "it" ? "Italian" : "Albanian"}`;

        // Update the onclick handler for the menu item
        menuItem.onclick = () => loadLanguage(lang);
      });
    } else {
      console.error("Language menu items not found.");
    }
  } else {
    console.error("Language menu not found.");
  }
}

// Function to toggle the language menu visibility
function toggleLangMenu() {
  const langMenu = document.querySelector('.lang-menu ul');
  console.log("Toggling menu visibility");

  langMenu.style.display = (langMenu.style.display === 'block') ? 'none' : 'block';
}
// Load the default language (English) when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  loadLanguage("en");
});
