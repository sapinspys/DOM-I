const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 2a: Create DOM selectors
let links = Array.from(document.querySelectorAll('a'));

let ctaTitle = document.querySelector('.cta-text h1');

let ctaButton = document.querySelector('.cta-text button');

let topContentTitles = Array.from(document.querySelectorAll('.text-content h4'));

let topContentParag = Array.from(document.querySelectorAll('.text-content p'));

let contactTitle = document.querySelector('.contact h4');

let contactParag = Array.from(document.querySelectorAll('.contact p'));

let copyright = document.querySelector('footer p')

// Task 2b: Update image src's
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Below doesn't work? From lecture
// let middleImg = document.querySelector("#middle-img");
// middleImg.src(siteContent["main-content"]["middle-img-src"]);

//Task 3: Update the HTML with JSON data
for (let i=0; i < 6; i++) {
  links[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
};

ctaTitle.textContent = siteContent['cta']['h1'];

ctaButton.textContent = siteContent['cta']['button'];

for (let i=0; i < topContentTitles.length; i++) { 
  if (i === 0) {
    topContentTitles[i].textContent = siteContent['main-content'][`features-h4`];
  } else if (i === 1) {
    topContentTitles[i].textContent = siteContent['main-content'][`about-h4`];
  } else if (i === 2) {
    topContentTitles[i].textContent = siteContent['main-content'][`services-h4`];
  } else if (i === 3) {
    topContentTitles[i].textContent = siteContent['main-content'][`product-h4`];
  } else {
    topContentTitles[i].textContent = siteContent['main-content'][`vision-h4`];
  }
};

for (let i=0; i < topContentParag.length; i++) { 
  if (i === 0) {
    topContentParag[i].textContent = siteContent['main-content'][`features-content`];
  } else if (i === 1) {
    topContentParag[i].textContent = siteContent['main-content'][`about-content`];
  } else if (i === 2) {
    topContentParag[i].textContent = siteContent['main-content'][`services-content`];
  } else if (i === 3) {
    topContentParag[i].textContent = siteContent['main-content'][`product-content`];
  } else {
    topContentParag[i].textContent = siteContent['main-content'][`vision-content`];
  }
};

contactTitle.textContent = siteContent['contact']['contact-h4']

for (let i = 1; i<Object.keys(siteContent['contact']).length; i++) {
  contactParag[i-1].textContent = siteContent['contact'][Object.keys(siteContent['contact'])[i]];
};

copyright.textContent = siteContent['footer']['copyright']

// Task 4: Add New Content and Style
ctaTitle.textContent = '';
const ctaTitleP1 = document.createElement('p');
ctaTitleP1.textContent = 'DOM';
const ctaTitleP2 = document.createElement('p');
ctaTitleP2.textContent = 'Is';
const ctaTitleP3 = document.createElement('p');
ctaTitleP3.textContent = 'Awesome';
ctaTitle.appendChild(ctaTitleP1);
ctaTitle.appendChild(ctaTitleP2);
ctaTitle.appendChild(ctaTitleP3);

contactParag[0].textContent = "Somewhere, USA";
const contactP1a = document.createElement('p');
contactP1a.textContent = "123 Way 456 Street";
contactParag[0].prepend(contactP1a);

contactP1a.style.lineHeight = 0;

links.forEach(element => element.style.color = 'green');

const newLink1 = document.createElement('a');
newLink1.textContent = "Team";
links[0].appendChild(newLink1);
newLink1.style.color = 'green'
newLink1.style.marginLeft = '30px'

const newLink2 = document.createElement('a');
newLink2.textContent = "Home";
links[0].prepend(newLink2);
newLink2.style.color = 'green'
newLink2.style.marginRight = '30px'

// Stretch Styling
const body = document.querySelector('body');
body.style.background = '#C2CAE8'

const header = document.querySelector('header');
header.style.background = '#8789C0';
header.style.paddingBottom = '30px';
header.style.paddingLeft = '20px';
header.style.paddingRight = '20px';
header.style.borderBottom = '3px double black';

newLink2.style.color = 'black';
newLink1.style.color = 'black';
links.forEach(element => element.style.color = 'black');

const cta = document.querySelector('.cta');
cta.style.background = '#C2CAE8';
cta.style.margin = '0';
cta.style.paddingTop = '50px';
cta.style.paddingBottom = '50px';

const mainCont = document.querySelector('.main-content');
mainCont.style.background = '#8380B6';
mainCont.style.margin = '0';

const contact = document.querySelector('.contact');
contact.style.background = '#C2CAE8';
contact.style.margin = '0';
contact.style.paddingTop = '30px';
contact.style.paddingBottom = '20px';
contact.style.display = 'flex';
contact.style.justifyContent = 'space-evenly';
contact.style.alignItems = 'center';

contactTitle.style.display = 'none';

const footer = document.querySelector('footer');
footer.style.background = '#8380B6';
footer.style.margin = '0';
footer.style.padding = '30px';
footer.style.borderTop = '3px double black';

// Stretch Button
ctaButton.addEventListener('click', function(){
  ctaTitleP1.textContent = 'We';
  ctaTitleP2.textContent = 'got';
  ctaTitleP3.textContent = 'Started!';
  ctaButton.textContent = 'Wooooooo!'
});

