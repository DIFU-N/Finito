let mobile = document.querySelector(".mobile"),
    laptop = document.querySelector(".laptop"),
    tablet = document.querySelector(".tablet");

let body = document.querySelector(".main-body"),
    menu = document.querySelector("#menu-btn"),
    navBar = document.querySelector("#nav-bar"),
    browseNow = document.querySelector("#browse-now");

mobile.addEventListener("click", function (e) {
    e.preventDefault();
    body.style.width = "440px";
    console.log('sa');
    menu.style.display = "block";
    body.innerHTML = `
    <nav class="py-4 px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg"class="mr-3 pl-1 h-7" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Difu</span>
            </a>
            <button id="menu-btn" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg" data-collapse-toggle="navbar-multi-level" type="button">
                <span class="sr-only">Open main menu</span>
                <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div id="nav-bar" class="hidden w-full">
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
            </div>         
        </div>
    </nav>
    <div id="browse-now" class="max-h-250 grid grid-cols-[6%_94%] h-80">
      <div class="max-h-100 w-6% bg-blue-600 border-solid border-r-2 border-black"></div>
      <div class="px-4 py-12 space-y-2 text-left bg-blue-100">
        <span class="text-3xl text-gray-600">Shop is fun</span>
        <p>
        <span class="font-bold text-2xl">BROWSE OUR PREMIUM PRODUCT</span>
        <p>plenty text going on here for some reason, doesn't really matter to me like that. NBut let me just do it. One more line, I think.</p>
        <button class=" border-solid border-2 bg-blue-600 p-2 px-6 text-white text-md rounded-2xl hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:py-2 hover:px-6 hover:border-blue-600">Browse Now</button>
      </div>
    </div>
    `;
    navBar.classList.remove("md:block", "inline-flex", "justify-center", "items-center");
    navBar.classList.add("hidden", "w-full");
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
    body.innerHTML = `
    <nav class="py-4 px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg"class="mr-3 pl-1 h-7" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Difu</span>
        </a>
        <button id="menu-btn" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg" data-collapse-toggle="navbar-multi-level" type="button">
          <span class="sr-only">Open main menu</span>
          <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="nav-bar" class="hidden w-full">
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
        </div>         
      </div>
    </nav>
    <div id="browse-now" class="max-h-250 grid grid-cols-[15%_85%] h-[30rem]">
      <div class="max-h-100 w-15% bg-blue-600 border-solid border-r-2 border-black"></div>
      <div class="space-y-2 text-left bg-blue-100 pl-56 pt-28 pr-8">
        <span class="text-3xl text-gray-600">Shop is fun</span>
        <p>
        <span class="font-bold text-3xl">BROWSE OUR PREMIUM PRODUCT</span>
        <p>plenty text going on here for some reason, doesn't really matter to me like that. NBut let me just do it. One more line, I think.</p>
        <button class=" border-solid border-2 bg-blue-600 p-2 px-6 text-white text-md rounded-2xl hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:py-2 hover:px-6 hover:border-blue-600">Browse Now</button>
      </div>
    </div>
    <!-- <br> -->
    <div class="w-72 h-[25rem] left-6 absolute top-36 border-black border-1 bg-purple-100">
        A Computer Science Portal
    </div>
    `;
    navBar.classList.remove("md:block", "inline-flex", "justify-center", "items-center");
    navBar.classList.add("hidden", "w-full");
    // navBar.innerHTML = `
    // <ul id="nav-bar-items"class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100">
    //     <li>
    //         <a href="/index.html" id="home" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Home</a>
    //     </li>
    //     <li>
    //         <a href="/screens/services.html" id="services" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Services</a>
    //     </li>
    //     <li>
    //         <a href="/screens/pricing.html" id="price" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Pricing</a>
    //     </li>
    //     <li>
    //         <a href="/screens/contact.html" id="cont" class="block py-2 pr-4 pl-3 text-gray-700 rounded">Contact</a>
    //     </li>
    // </ul>
    // `;
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
 
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
});