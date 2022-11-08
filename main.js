let mobile = document.querySelector(".mobile"),
    laptop = document.querySelector(".laptop"),
    tablet = document.querySelector(".tablet");

let body = document.querySelector(".main-body"),
    menu = document.querySelector("#menu-btn"),
    navBar = document.querySelector("#nav-bar");

mobile.addEventListener("click", function (e) {
    e.preventDefault();
    body.style.width = "440px";
    console.log('sa');
    menu.style.display = "block";
    navBar.classList.remove("md:block", "inline-flex", "justify-center", "items-center");
    navBar.classList.add("hidden", "w-full");
    navBar.innerHTML = `
    <ul id="nav-bar-items"class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100">
        <li>
            <a href="/index.html" id="home" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Home</a>
        </li>
        <li>
            <a href="/screens/services.html" id="services" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Services</a>
        </li>
        <li>
            <a href="/screens/pricing.html" id="price" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Pricing</a>
        </li>
        <li>
            <a href="/screens/contact.html" id="cont" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Contact</a>
        </li>
    </ul>
    `;
});

laptop.addEventListener("click", function (e) {
    e.preventDefault();
    body.style.width = "100%";
    console.log('sa');
    menu.style.display = "none";
    navBar.classList.remove("hidden", "w-full");
    navBar.classList.add("md:block", "inline-flex", "justify-center", "items-center");
    navBar.innerHTML = `
    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
    </li>
    <li>
      <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
    </li>
  </ul>
    `;

});

tablet.addEventListener("click", function (e) {
    e.preventDefault();
    body.style.width = "890px";
    console.log('sa');
    menu.style.display = "block";
    navBar.classList.remove("md:block", "inline-flex", "justify-center", "items-center");
    navBar.classList.add("hidden", "w-full");
    navBar.innerHTML = `
    <ul id="nav-bar-items"class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100">
        <li>
            <a href="/index.html" id="home" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Home</a>
        </li>
        <li>
            <a href="/screens/services.html" id="services" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Services</a>
        </li>
        <li>
            <a href="/screens/pricing.html" id="price" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Pricing</a>
        </li>
        <li>
            <a href="/screens/contact.html" id="cont" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Contact</a>
        </li>
    </ul>
    `;
});

menu.addEventListener("click", function(e) {
    e.preventDefault();
    if (navBar.classList.contains("md:block")) {
        navBar.classList.remove("md:block");
    }   else {
        navBar.classList.add("md:block");
    }
})

let menuItems = document.querySelector("#nav-bar-items").childNodes;
 
// for (let  = 0;  < array.length; ++) {
//     const element = array[];
    
// }
// text-white bg-blue-700 rounded

// menuItems.addEventListener("click", function() {
//     console.log(this);
//     this.classList.add("active");
//     // services.style.backgroundColor = "blue";
//     // $().classList.remove("active");
//     // services.classList.add("active");
// })
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
});