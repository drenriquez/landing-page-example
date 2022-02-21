/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let navbar=document.querySelector('#navbar__list');
//HTMLCollection of sections
let sections=document.getElementsByTagName('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (sezione of sections){
    elementNavbar=document.createElement('li');
    ancorSezione=sezione.getAttribute('id');
    nomeSezione=sezione.getAttribute('data-nav');
    elementNavbar.innerHTML=`<a class='menu__link' href='#${ancorSezione}'>${nomeSezione}</a>`;
    navbar.appendChild(elementNavbar);
};
// Add class 'active' to section when near top of viewport
function isSectionInViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight/3) && rect.bottom >  (window.innerHeight/2)
        // &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};
//when you scroll it Check if section is viewport and activate class='your-active-class'
document.addEventListener('scroll', (evt) =>{
    for (section of sections){
        if (isSectionInViewport(section)){
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
            }
        }
        else{
            section.classList.remove('your-active-class')
        }
    }

});
// Scroll to anchor ID using scrollTO event
navbar.addEventListener('click',(evt)=>{
    var idtar = evt.target.getAttribute('href');
    var tar=document.querySelector(idtar);
    tar.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    evt.preventDefault();
    console.log(tar)
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


