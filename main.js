let mobile = document.querySelector(".mobile"),
    laptop = document.querySelector(".laptop"),
    tablet = document.querySelector(".tablet");

let body = document.querySelector(".main-body"),
    menu = document.querySelector("#menu-btn"),
    navBar = document.querySelector("#nav-bar"),
    browseNow = document.querySelector("#browse-now"),
    firstItems = document.querySelector("#first-items"),
    secondItems = document.querySelector("#second-items"),
    secndItmsHder1 = document.querySelector("#second-items-header-1"),
    secndItmsHder2 = document.querySelector("#second-items-header-2");

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
    browseNow.innerHTML = `
    <div class="max-h-250 grid grid-cols-[6%_94%] h-80">
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
    firstItems.removeAttribute('class');
    firstItems.innerHTML = `
    <div id="on-hover" class="bg-blue-600 border-solid h-[23rem] border-black absolute w-[100%]"> asssxa</div>
    <div class="border-solid h-[23rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
      <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
        <span class="text-lg font-bold text-white">Wired Something</span>
        <p class="italic text-sm text-white">amska</p>
      </div>
    </div>
    `;    
    secndItmsHder1.removeAttribute('class');
    secndItmsHder2.removeAttribute('class');
    secndItmsHder1.classList.add("text-xs", "px-2", "relative", "top-[22rem]");
    secndItmsHder2.classList.add("text-3xl", "px-2", "bold", "underline", "relative", "top-[22rem]");
    secondItems.removeAttribute('class');
    secondItems.innerHTML = `
    <div class="top-[22rem] relative">
        <div id="on-hover" class="bg-orange-300 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <br>
      <div class="top-[45rem] relative">
        <div id="on-hover" class="bg-lime-300 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
        <br>
      <div class="top-[67rem] relative">
        <div id="on-hover" class="bg-purple-300 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
        <br>
      </div>
      <div class="top-[89rem] relative">
        <div id="on-hover" class="bg-red-200 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="top-[113rem] relative">
        <div id="on-hover" class="bg-orange-300 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <br>
      <div class="top-[135rem] relative">
        <div id="on-hover" class="bg-lime-300 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
        <br>
      <div class="top-[157rem] relative">
        <div id="on-hover" class="bg-purple-300 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
        <br>
      </div>
      <div class="top-[180rem] relative">
        <div id="on-hover" class="bg-red-200 border-solid h-[21rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center top-[22rem] relative">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
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
    browseNow.innerHTML = `
      <div class="max-h-250 grid grid-cols-[15%_85%] h-[30rem]">
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
      <div class="w-72 h-[25rem] left-6 absolute top-20 border-black border-1 bg-purple-100">
        A Computer Science Portal
      </div>
    `;
    firstItems.removeAttribute('class');
    firstItems.classList.add("w-[100%]", "h-[23.5rem]", "mt-[10rem]", "border-black", "grid", "grid-cols-[50%_50%]", "p-2", "pr-4", "gap-x-2", "gap-y-4");
    firstItems.innerHTML = `
    <div class="h-[100%] relative">
        <div id="onHover" class="bg-blue-600 border-solid h-[22rem] border-black absolute w-[100%] "> asssxa</div>
        <div class="border-solid h-[23rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]  p-2" onmouseover="itemHover(onHover)" onmouseout="itemHoverOut(on-hover)">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
      </div>
      <div class="relative h-[100%]">
        <div id="on-hover-2" class=" group bg-green-600 border-solid h-[22rem] border-black absolute w-[100%]"> asssxa</div>
        <div class="border-solid h-[23rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-orange-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something for real</span>
            <p class="italic text-sm text-white">amska mina</p>
          </div>
        </div>
      </div>
    `;
    secndItmsHder1.removeAttribute('class');
    secndItmsHder2.removeAttribute('class');
    secndItmsHder1.classList.add("text-md", "px-2");
    secndItmsHder2.classList.add("text-4xl", "px-2", "bold", "underline");
    secondItems.removeAttribute('class');
    secondItems.classList.add("w-[100%]", "h-[110rem]", "grid", "grid-cols-[50%_50%]", "p-2", "absolute", "pr-8", "gap-4");
    secondItems.innerHTML = `
    <div class="">
        <div id="on-hover" class="bg-orange-300 border-solid rounded-md h-[21rem] border-black absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-lime-300 border-solid h-[21rem] rounded-md border-black absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-purple-300 border-solid h-[21rem] rounded-md border-black absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-red-200 border-solid h-[21rem] border-black rounded-md absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-orange-300 border-solid h-[21rem] rounded-md border-black absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-lime-300 border-solid h-[21rem] border-black rounded-md absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-purple-300 border-solid h-[21rem] border-black rounded-md absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="">
        <div id="on-hover" class="bg-red-200 border-solid h-[21rem] border-black rounded-md absolute w-[48%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[48%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
          <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
            <span class="text-lg font-bold text-white">Wired Something</span>
            <p class="italic text-sm text-white">amska</p>
          </div>
        </div>
        <div class="w-[100%] grid place-items-center relative top-[22rem]">
          <p class="text-sm">Accessories</p>
          <p class="text-xl font-bold hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
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
  browseNow.innerHTML = `
  <div class="grid grid-cols-[33%_67%] h-[40rem] w-full">
    <div class="w-100% bg-blue-600 border-solid border-r-2 border-black"></div>
    <div class="space-y-2 text-left bg-blue-100 pl-56 pt-52 pr-36">
      <span class="text-3xl text-gray-600">Shop is fun</span>
      <br>
      <br>
      <span class="font-bold text-5xl">BROWSE OUR PREMIUM PRODUCT</span>
      <br>
      <br>
      <p>plenty text going on here for some reason, doesn't really matter to me like that. NBut let me just do it. 
        One more line, I think. Maybe just another little line, I think</p>
      <br>
      <button class=" border-solid border-2 bg-blue-600 p-2 px-6 text-white text-md rounded-3xl hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:py-2 hover:px-6 hover:border-blue-600">Browse Now</button>
    </div>
  </div>
  <!-- <br> -->
  <div class="w-[27rem] h-[36.5rem] left-32 absolute top-14 border-black border-1 bg-purple-100">
    A Computer Science Portal
  </div>
  `;
  firstItems.removeAttribute('class');
  firstItems.classList.add("w-[100%]", "h-[23.5rem]", "mt-[19rem]", "border-black", "grid", "grid-cols-[33%_34%_33%]", "p-2", "pr-8", "pl-2", "gap-x-2", "gap-y-4");
  firstItems.innerHTML = `
  <div class="h-[100%] relative">
    <div id="onHover" class="bg-blue-600 border-solid h-[22rem] border-black absolute w-[100%] "> asssxa</div>
    <div class="border-solid h-[23rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]  p-2" onmouseover="itemHover(onHover)" onmouseout="itemHoverOut(on-hover)">
      <div class="bg-green-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
        <span class="text-lg font-bold text-white">Wired Something</span>
        <p class="italic text-sm text-white">amska</p>
      </div>
    </div>
  </div>
  <div class="relative h-[100%]">
    <div id="on-hover-2" class=" group bg-green-600 border-solid h-[22rem] border-black absolute w-[100%]"> asssxa</div>
    <div class="border-solid h-[23rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
      <div class="bg-orange-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
        <span class="text-lg font-bold text-white">Wired Something for real</span>
        <p class="italic text-sm text-white">amska mina</p>
      </div>
    </div>
  </div>
  <div class="relative h-[100%]">
    <div id="on-hover-2" class=" group bg-green-600 border-solid h-[22rem] border-black absolute w-[100%]"> asssxa</div>
    <div class="border-solid h-[23rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[100%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
      <div class="bg-orange-600 p-6 w-[14rem] h-[6rem] border-solid z-50">
        <span class="text-lg font-bold text-white">Wired Something for real</span>
        <p class="italic text-sm text-white">amska mina</p>
      </div>
    </div>
  </div>
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
 
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
});
let logic = "loki";
console.log(`"`+logic+`"`);

function itemHover (logic) {
  let bookie = '"#'+logic+`"`;
  console.log(bookie);
  // document.querySelector(`#`+logic).classList.add("opacity-40");
  // onHover.style.display = "block";
}
let itemHoverOut = () => {
  document.querySelector(`"`+logic+`"`).classList.remove("opacity-40");
}