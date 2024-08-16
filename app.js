const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
console.log(mainEl);
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

menuLinks.forEach((obj) => {
  let linkEl = document.createElement("a");
  linkEl.href = obj.href;
  linkEl.textContent = obj.text;
  topMenuEl.appendChild(linkEl);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

function buildSubmenu(subLinks){
  subMenuEl.innerHTML = "";
  subLinks.forEach(link => {
    let subLinkEl = document.createElement("a");
    subLinkEl.href = link.href;
    subLinkEl.textContent = link.text;
    subMenuEl.appendChild(subLinkEl);
  });
}

topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  topMenuLinks.forEach(link => {
    if (link.classList.contains("active")){
      link.classList.remove("active");
    }
    });
  const linkObj = menuLinks.find(link => link.text === event.target.textContent);
  if (!event.target.classList.contains("active")) {
      event.target.classList.add("active");
      
      if (linkObj && linkObj.subLinks){
        subMenuEl.style.top = "100%";
        buildSubmenu(linkObj.subLinks);
      } else {
        subMenuEl.style.top = "0";
        subMenuEl.innerHTML = "";
      }
  } else {
      event.target.classList.remove("active");
      subMenuEl.style.top = "0";
      subMenuEl.innerHTML = "";
  }
  console.log(event.target.textContent);
});


subMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  console.log(event.target.textContent);
  subMenuEl.style.top = "0";
  topMenuLinks.forEach(link => link.classList.remove("active"));
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  if (event.target.textContent.toLowerCase() === 'about') {
    mainEl.innerHTML = `<h1>About</h1>`;
  }
});





 

