const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const links = document.querySelector("a");
links.textContent = siteContent["nav"]["nav-item-1"];

const link2 = links.nextElementSibling;
link2.textContent = siteContent["nav"]["nav-item-2"];

const link3 = link2.nextElementSibling;
link3.textContent = siteContent["nav"]["nav-item-3"];

const link4 = link3.nextElementSibling;
link4.textContent = siteContent["nav"]["nav-item-4"];

const link5 = link4.nextElementSibling;
link5.textContent = siteContent["nav"]["nav-item-5"];

const link6 = link5.nextElementSibling;
link6.textContent = siteContent["nav"]["nav-item-6"];

const headerTitle = document.querySelector(".cta-text h1");
headerTitle.textContent = siteContent["cta"]["h1"];

const headerButton = document.querySelector(".cta-text button");
headerButton.textContent = siteContent["cta"]["button"];

const headerPicture = document.querySelector("#cta-img");
headerPicture.setAttribute("src", siteContent["cta"]["img-src"]);

const topContent = document.querySelector(".top-content");
const featuresHeader = topContent.querySelector(".text-content h4");
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

const featuresPara = topContent.querySelector(".text-content p");
featuresPara.textContent = siteContent["main-content"]["features-content"];

const aboutHeader = topContent.nextElementSibling;
aboutHeader.textConcent = siteContent["main-content"]["about-h4"];

const contentPicture = document.querySelector("#middle-img");
contentPicture.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);
