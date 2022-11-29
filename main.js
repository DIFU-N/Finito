let mobile = document.querySelector(".mobile"),
    laptop = document.querySelector(".laptop"),
    tablet = document.querySelector(".tablet");

let body = document.querySelector(".main-body"),
    menu = document.querySelector("#menu-btn"),
    navBar = document.querySelector("#nav-bar"),
    browseNow = document.querySelector("#browse-now"),
    firstItems = document.querySelector("#first-items"),
    secondItems = document.querySelector("#second-items"),
    secndItmsHder = document.querySelector("#second-items-header"),
    secndItmsHder1 = document.querySelector("#second-items-header-1"),
    secndItmsHder2 = document.querySelector("#second-items-header-2"),
    promoBar = document.querySelector("#promo"),
    sldesItmsHder = document.querySelector("#slide-items-header"),
    sldesContainer = document.querySelector("#slides-container"),
    latestHder = document.querySelector("#latest-header"),
    latestNews = document.querySelector("#latest-news"),
    getUpdate = document.querySelector("#get-update"),
    footer = document.querySelector("#footer");

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
    secndItmsHder.innerHTML = `
    <p id="second-items-header-1" class="text-xs px-2 relative top-[22rem]">Popular Item in the market</p>
    <div class="flex relative top-[22rem]">
      <p id="second-items-header-2" class="text-3xl p-2 font-extrabold relative">Trending</p>
      <p id="second-items-header-2" class="text-3xl py-2 font-extrabold border-b-2 border-blue-700 relative">Product</p> 
    </div>
    `;
    // secndItmsHder1.removeAttribute('class');
    // secndItmsHder2.removeAttribute('class');
    // secndItmsHder1.classList.add("text-xs", "px-2", "relative", "top-[22rem]");
    // secndItmsHder2.classList.add("text-3xl", "px-2", "bold", "underline", "relative", "top-[22rem]");
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
    promoBar.removeAttribute('class');
    promoBar.classList.add("w-[95%]", "h-[22rem]", "m-3", "bg-blue-200", "p-16", "text-center", "relative", "top-[205rem]");
    promoBar.innerHTML = `
      <p class="text-3xl font-bold font-mono">Up to 50% off</p>
      <p class="text-3xl font-bold font-mono mt-3 mb-2">Winter Sale</p>
      <p class="text-gray-500">Him she'd let them sixth saw light</p>
      <button class="border-2 border-blue-700 bg-blue-700 text-white font-bold hover:text-black mt-9 pr-6 pl-6 pt-3 pb-3 rounded-3xl hover:bg-blue-200">Shop Now</button>
    `;
    sldesItmsHder.innerHTML = `
    <p id="slide-items-header-1" class="text-xs px-2 relative top-[205rem]">Popular Item in the market</p>
    <div class="flex relative top-[205rem]">
      <p id="slide-items-header-2" class="text-3xl p-2 font-extrabold relative">Best</p>
      <p id="slide-items-header-3" class="text-3xl py-2 font-extrabold border-solid border-b-2 border-blue-700 relative">Sellers</p>
    </div>
    `;
    sldesContainer.removeAttribute('class');
    sldesContainer.classList.add("h-[50rem]", "top-[205rem]", "w-[100%]", "relative");
    sldesContainer.setAttribute('data-carousel', "static");
    // add the hidden attribute to the carousel-item classes
    sldesContainer.innerHTML = `
    <div class="h-[100%] m-3">
      <div id="carousel-item" class="group h-[70%] duration-300 ease-in-out rounded-lg bg-yellow-100" data-carousel-item="active">
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div id="carousel-item" class="group h-[70%] duration-300 bg-green-500 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">Qasmlak</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div id="carousel-item" class="group h-[70%] duration-300 bg-blue-200 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div id="carousel-item" class="group h-[70%] duration-300 bg-red-300 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div class="relative flex justify-center w-[100%] top-[90%] h-[3rem] pb-[3rem] place-items-center">
        <button class="hover:bg-gray-500 rounded-md hover:text-white text-3xl p-0 cursor-pointer opacity-[2rem] transition-opacity hover:opacity-[3rem] focus:opacity-[3rem]" data-carousel-prev>
          &#8678; <!-- html arrow codes-->
        </button>
        <button class="hover:bg-gray-500 rounded-md hover:text-white text-3xl p-0 cursor-pointer opacity-[2rem] transition-opacity hover:opacity-[3rem] focus:opacity-[3rem]" data-carousel-next>
          &#8680;
        </button>
      </div>
    </div>
    `;
    latestHder.innerHTML = `
      <p id="latest-header-1" class="text-xs px-2 relative top-[205rem]">Popular Item in the market</p>
      <div class="flex relative top-[205rem]">
        <p id="latest-header-2" class="text-3xl p-2 font-extrabold relative">Latest</p>
        <p id="latest-header-3" class="text-3xl py-2 font-extrabold border-solid border-b-2 border-blue-700 relative">News</p>
      </div>
    `;
    latestNews.removeAttribute('class');
    latestNews.classList.add("grid", "relative", "top-[205rem]", "mt-5", "p-2", "gap-12");
    latestNews.innerHTML = `
        <div class="group">
          <div class="border-solid border-2 border-black h-[20rem] w-[25rem]">picture</div>
          <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
            <span>By Admin</span>
            <span>&#9787 2 Comments</span>
          </div>
          <span class="font-bold group-hover:text-blue-600 flex mt-5">No Such Thing As A Life That's Better Than Yours</span>
          <span class="text-gray-600 flex mt-5">When I met her she was out for love, I bought her leather and some diamond studs..</span>
          <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
            <span>Read More</span>
            <span>&#8594;</span>
          </div>
        </div>
        <div class="group">
          <div class="border-solid border-2 border-black h-[20rem] w-[25rem]">picture</div>
          <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
            <span>By Admin</span>
            <span>&#9787 2 Comments</span>
          </div>
          <span class="font-bold group-hover:text-blue-600 flex mt-5">No Church In The Wild</span>
          <span class="text-gray-600 flex mt-5">You can't stop it, music still playing in the background...</span>
          <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
            <span>Read More</span>
            <span>&#8594;</span>
          </div>
        </div>
        <div class="group">
          <div class="border-solid border-2 border-black h-[20rem] w-[25rem]">picture</div>
          <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
            <span>By Admin</span>
            <span>&#9787 2 Comments</span>
          </div>
          <span class="font-bold group-hover:text-blue-600 flex mt-5">It Won't Stop</span>
          <span class="text-gray-600 flex mt-5">All I want is you, So what you trying to do...</span>
          <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
            <span>Read More</span>
            <span>&#8594;</span>
          </div>
        </div>
    `;
    getUpdate.removeAttribute('class');
    getUpdate.classList.add("relative", "grid", "top-[205rem]", "border-solid", "place-items-center", "border-2", "shadow-2xl", "m-5", "h-[16rem]", "rounded-md", "p-2");
    getUpdate.innerHTML = `
      <span class="font-extrabold text-2xl relative">GET UPDATE ANYWHERE</span>
      <span>Wake up today, anything, anything could happen.</span>
      <div class="flex gap-x-2">
        <input type="email" placeholder="Enter your email" class="rounded-full border-1 border-gray-200" size="15">
        <button class="text-white p-2 rounded-full border-2 border-blue-700 bg-blue-700 font-bold border-solid w-[10rem] hover:bg-white hover:text-black">Subscribe Now</button>
      </div>
    `;
    footer.removeAttribute('class');
    footer.classList.add("bg-sky-900", "p-3", "relative", "top-[205rem]", "pt-10", "grid");
    footer.innerHTML = `
      <span class="text-white mb-2 font-extrabold">Our Mission</span>
      <span class="text-gray-400 text-xs mb-2">You're the only one that makes me wait all the time. Oh yh you blow my mind. boom boom you blow my mind You're the only one that gets under my skin, you're doing damage that nobody's ever did. </span>
      <span class="text-gray-400 mb-6 text-xs">What are you willing to do, tell me what you're willing to do. Kiss it kiss it better baby.</span>
      <span class="text-white mb-2 font-extrabold">Our Links</span>
      <span class="text-gray-400 mb-2 cursor-pointer hover:text-blue-700 text-sm">Home</span>
      <span class="text-gray-400 mb-2 cursor-pointer hover:text-blue-700 text-sm">Shop</span>
      <span class="text-gray-400 mb-2 cursor-pointer hover:text-blue-700 text-sm">Blog</span>
      <span class="text-gray-400 mb-2 cursor-pointer hover:text-blue-700 text-sm">Product</span>
      <span class="text-gray-400 mb-2 cursor-pointer hover:text-blue-700 text-sm">Brand</span>
      <span class="text-gray-400 mb-4 cursor-pointer hover:text-blue-700 text-sm">Contact</span>
      <span class="text-white mb-2 font-extrabold">Gallery</span>
      <div class="flex grid grid-cols-6 relative gap-2 mb-6">
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
        <div class="border-2 border-black border-solid h-14 w-14">aa</div>
      </div>
      <span class="text-white mb-2 font-extrabold">Contact Us</span>
      <div class="grid">
        <div class="flex gap-x-4 mb-4">
          <span class="border-2 border-black border-solid h-8 w-8 bg-blue-600 p-1 rounded-full"><img src="https://img.icons8.com/ios-filled/50/null/address--v1.png"/></span>
          <div>
            <span class="font-bold text-white text-sm">Head Office</span>
            <br>
            <span class="text-gray-400 text-sm">123, Main Street, City</span>
          </div>
        </div>
        <div class="flex gap-x-4 mb-4">
          <span class="border-2 border-black border-solid h-8 w-8 bg-blue-600 p-1 rounded-full"><img src="https://img.icons8.com/ios-filled/50/000000/phone.png"/></span>
          <div>
            <span class="font-bold text-white text-sm">Phone Number</span>
            <br>
            <span class="text-gray-400 text-sm">+123 456 7890</span>
            <br>
            <span class="text-gray-400 text-sm">+134 259 9870</span>
          </div>
        </div>
        <div class="flex gap-x-4 mb-4">
          <span class="border-2 border-black border-solid h-8 w-8 bg-blue-600 p-1 rounded-full"><img src="https://img.icons8.com/ios/50/null/secured-letter--v1.png"/></span>
          <div>
            <span class="font-bold text-white text-sm">Email</span>
            <br>
            <span class="text-gray-400 text-sm">okayletsgohome@gmail.com</span>
            <br>
            <span class="text-gray-400 text-sm">fritstimeletsgohome@gmail.com</span>
          </div>
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
    secndItmsHder.innerHTML = `
    <p id="second-items-header-1" class="text-md px-2 relative">Popular Item in the market</p>
    <div class="flex relative">
      <p id="second-items-header-2" class="text-4xl p-2 font-extrabold relative">Trending</p>
      <p id="second-items-header-2" class="text-4xl py-2 font-extrabold border-b-2 border-blue-700 relative">Product</p> 
    </div>
    `;
    // secndItmsHder1.removeAttribute('class');
    // secndItmsHder2.removeAttribute('class');
    // secndItmsHder1.classList.add("text-md", "px-2");
    // secndItmsHder2.classList.add("text-4xl", "px-2", "bold", "underline");
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
    promoBar.removeAttribute('class');
    promoBar.classList.add("w-[95%]", "h-[28rem]", "m-5", "bg-blue-200", "p-20", "text-center", "relative", "top-[110rem]");
    promoBar.innerHTML = `
      <p class="text-5xl font-bold font-mono">Up to 50% off</p>
      <p class="text-4xl font-bold font-mono mt-5 mb-3">Winter Sale</p>
      <p class="text-gray-500">Him she'd let them sixth saw light</p>
      <button class="border-2 border-blue-700 bg-blue-700 text-white font-bold hover:text-black mt-10 pr-12 pl-12 pt-3 pb-3 rounded-3xl hover:bg-blue-200">Shop Now</button>
    `;
    sldesItmsHder.innerHTML = `
    <p id="second-items-header-1" class="top-[110rem] ml-5 text-md px-2 relative">Popular Item in the market</p>
    <div class="flex relative top-[110rem] ml-5">
      <p id="second-items-header-2" class="text-4xl p-2 font-extrabold relative">Best</p>
      <p id="second-items-header-2" class="text-4xl py-2 font-extrabold border-b-2 border-blue-700 relative">Sellers</p> 
    </div>
    `;
    sldesContainer.removeAttribute('class');
    sldesContainer.classList.add("h-[50rem]", "w-[100%]", "relative");
    // add the hidden attribute to the carousel-item classes
    sldesContainer.innerHTML = `
    <div class="relative h-[50rem] top-[110rem] w-[100%]" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="grid grid-cols-2 h-[100%] overflow-hidden relative gap-x-4 m-4">
          <!-- Item 1 -->
          <div id="carousel-item" class="group w-[50%] h-[70%] place-content-around duration-500 ease-in-out rounded-lg bg-yellow-100" data-carousel-item="active">
            <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
              <span class="border-solid border-2 border-black p-2">&#8750;</span>
              <span class="border-solid border-2 border-black p-2">&#8751;</span>
              <span class="border-solid border-2 border-black p-2">&#8752;</span>
            </div>
            <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2">
              <p class="text-sm text-gray-400">Accessories</p>
              <p class="text-xl font-bold group-hover:text-blue-700">Quartz Belt Watch</p>
              <p class="text-gray-600">$150.00</p>
            </div>
          </div>
          <!-- Item 2 -->
          <div id="carousel-item" class="group w-[50%] h-[70%] place-content-around rounded-lg duration-500 bg-green-500 ease-in-out" data-carousel-item>
            <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
              <span class="border-solid border-2 border-black p-2">&#8750;</span>
              <span class="border-solid border-2 border-black p-2">&#8751;</span>
              <span class="border-solid border-2 border-black p-2">&#8752;</span>
            </div>
            <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
              <p class="text-sm text-gray-400">Accessories</p>
              <p class="text-xl font-bold group-hover:text-blue-700">Qasmlak</p>
              <p class="text-gray-600">$150.00</p>
            </div>
          </div>
          <!-- Item 3 -->
          <div id="carousel-item" class="group w-[50%] h-[70%] place-content-around rounded-lg duration-500 bg-blue-200 ease-in-out" data-carousel-item>
            <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
              <span class="border-solid border-2 border-black p-2">&#8750;</span>
              <span class="border-solid border-2 border-black p-2">&#8751;</span>
              <span class="border-solid border-2 border-black p-2">&#8752;</span>
            </div>
            <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
              <p class="text-sm text-gray-400">Accessories</p>
              <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
              <p class="text-gray-600">$150.00</p>
            </div>
          </div>
          <div id="carousel-item" class="group w-[50%] h-[70%] place-content-around rounded-lg duration-500 bg-red-300 ease-in-out" data-carousel-item>
            <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
              <span class="border-solid border-2 border-black p-2">&#8750;</span>
              <span class="border-solid border-2 border-black p-2">&#8751;</span>
              <span class="border-solid border-2 border-black p-2">&#8752;</span>
            </div>
            <div class="grid relative w-[100%] place-items-center top-[30rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
              <p class="text-sm text-gray-400">Accessories</p>
              <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
              <p class="text-gray-600">$150.00</p>
            </div>
          </div>
        </div>
        <div class="relative flex justify-center w-[100%] h-[3rem] pb-[3rem] place-items-center">
          <button class="hover:bg-gray-500 rounded-md hover:text-white text-3xl p-0 cursor-pointer opacity-[2rem] transition-opacity hover:opacity-[3rem] focus:opacity-[3rem]" data-carousel-prev>
            &#8678; <!-- html arrow codes-->
          </button>
          <button class="hover:bg-gray-500 rounded-md hover:text-white text-3xl p-0 cursor-pointer opacity-[2rem] transition-opacity hover:opacity-[3rem] focus:opacity-[3rem]" data-carousel-next>
            &#8680;
          </button>
        </div>
      </div>
    `;
    latestHder.innerHTML = `
      <p id="latest-header-1" class="text-md ml-5 px-2 relative top-[125rem]">Popular Item in the market</p>
      <div class="flex relative top-[125rem] ml-5">
        <p id="latest-header-2" class="text-4xl p-2 font-extrabold relative">Latest</p>
        <p id="latest-header-3" class="text-4xl py-2 font-extrabold border-solid border-b-2 border-blue-700 relative">News</p>
      </div>
    `;
    latestNews.removeAttribute('class');
    latestNews.classList.add("grid", "relative", "grid-cols-2", "top-[125rem]", "m-5", "p-2", "gap-12");
    latestNews.innerHTML = `
        <div class="group">
          <div class="border-solid border-2 border-black h-[20rem] w-[100%]">picture</div>
          <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
            <span>By Admin</span>
            <span>&#9787 2 Comments</span>
          </div>
          <span class="font-bold group-hover:text-blue-600 flex mt-5">No Such Thing As A Life That's Better Than Yours</span>
          <span class="text-gray-600 flex mt-5">When I met her she was out for love, I bought her leather and some diamond studs..</span>
          <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
            <span>Read More</span>
            <span>&#8594;</span>
          </div>
        </div>
        <div class="group">
          <div class="border-solid border-2 border-black h-[20rem] w-[100%]">picture</div>
          <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
            <span>By Admin</span>
            <span>&#9787 2 Comments</span>
          </div>
          <span class="font-bold group-hover:text-blue-600 flex mt-5">No Church In The Wild</span>
          <span class="text-gray-600 flex mt-5">You can't stop it, music still playing in the background...</span>
          <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
            <span>Read More</span>
            <span>&#8594;</span>
          </div>
        </div>
        <div class="group">
          <div class="border-solid border-2 border-black h-[20rem] w-[100%]">picture</div>
          <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
            <span>By Admin</span>
            <span>&#9787 2 Comments</span>
          </div>
          <span class="font-bold group-hover:text-blue-600 flex mt-5">It Won't Stop</span>
          <span class="text-gray-600 flex mt-5">All I want is you, So what you trying to do...</span>
          <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
            <span>Read More</span>
            <span>&#8594;</span>
          </div>
        </div>
    `;
    getUpdate.removeAttribute('class');
    getUpdate.classList.add("relative", "grid", "top-[125rem]", "border-solid", "place-items-center", "border-2", "shadow-2xl", "m-5", "gap-y-2", "rounded-md");
    getUpdate.innerHTML = `
      <span class="font-extrabold text-2xl mt-[3rem] relative">GET UPDATE FROM ANYWHERE</span>
      <span class="p-4">Can't really trust nobody with all this jewelry on you. My roof look like a no-show</span>
      <div class="flex gap-x-4 m-[3rem]">
        <input type="email" placeholder="Enter your email" class="rounded-full border-1 border-gray-200" size="20">
        <button class="text-white p-2 rounded-full border-2 border-blue-700 bg-blue-700 font-bold border-solid w-[10rem] hover:bg-white hover:text-black">Subscribe Now</button>
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
  <div class="grid grid-cols-[33%_67%] h-[40rem] w-[97%]">
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
  firstItems.classList.add("w-[97%]", "h-[23.5rem]", "mt-[19rem]", "border-black", "grid", "grid-cols-[33%_34%_33%]", "p-2", "pr-8", "pl-2", "gap-x-2", "gap-y-4");
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
  secndItmsHder.innerHTML = `
    <p id="second-items-header-1" class="ml-24 text-md px-2 relative">Popular Item in the market</p>
    <div class="flex relative ml-24">
      <p id="second-items-header-2" class="text-4xl p-2 font-extrabold relative">Trending</p>
      <p id="second-items-header-2" class="text-4xl py-2 font-extrabold border-b-2 border-blue-700 relative">Product</p> 
    </div>
  `;
  // secndItmsHder1.removeAttribute('class');
  // secndItmsHder2.removeAttribute('class');
  // secndItmsHder1.classList.add("ml-24", "text-md", "px-2");
  // secndItmsHder2.classList.add("ml-24", "text-4xl", "px-2", "bold", "underline");
  secondItems.removeAttribute('class');
  secondItems.classList.add("w-[80%]", "ml-24", "h-[90rem]", "grid", "grid-cols-[25%_25%_25%_25%]", "absolute");
  secondItems.innerHTML = `
  <div class="">
        <div id="on-hover" class="bg-orange-300 border-solid rounded-md h-[21rem] border-black absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-lime-300 border-solid h-[21rem] rounded-md border-black absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-purple-300 border-solid h-[21rem] rounded-md border-black absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-red-200 border-solid h-[21rem] border-black rounded-md absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-orange-300 border-solid h-[21rem] rounded-md border-black absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-lime-300 border-solid h-[21rem] border-black rounded-md absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-purple-300 border-solid h-[21rem] border-black rounded-md absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-red-200 border-solid h-[21rem] border-black rounded-md absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-lime-200 border-solid h-[21rem] border-black rounded-md absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
        <div id="on-hover" class="bg-yellow-200 border-solid h-[21rem] border-black rounded-md absolute w-[23%]"> asssxa</div>
        <div class="border-solid h-[21rem] border-2 pt-[14rem] opacity-0 hover:opacity-100 bg-transparent absolute w-[23%]" onmouseover="itemHover()" onmouseout="itemHoverOut()">
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
  promoBar.removeAttribute('class');
  promoBar.classList.add("w-[97%]", "h-[28rem]", "m-5", "bg-blue-200", "pt-24", "pr-[43rem]", "text-center", "relative", "top-[90rem]");
  promoBar.innerHTML = `
    <p class="text-5xl font-bold font-mono">Up to 50% off</p>
    <p class="text-4xl font-bold font-mono mt-5 mb-3">Winter Sale</p>
    <p class="text-gray-500">Him she'd let them sixth saw light</p>
    <button class="border-2 border-blue-700 bg-blue-700 text-white font-bold hover:text-black mt-14 pr-12 pl-12 pt-3 pb-3 rounded-3xl hover:bg-blue-200">Shop Now</button>
  `;
  sldesItmsHder.innerHTML = `
    <p id="second-items-header-1" class="top-[90rem] ml-24 text-md px-2 relative">Popular Item in the market</p>
    <div class="flex relative ml-24 top-[90rem]">
      <p id="second-items-header-2" class="text-4xl p-2 font-extrabold relative">Best</p>
      <p id="second-items-header-2" class="text-4xl py-2 font-extrabold border-b-2 border-blue-700 relative">Sellers</p> 
    </div>
  `;
  sldesContainer.removeAttribute('class');
  sldesContainer.classList.add("relative", "top-[90rem]", "w-[97%]", "h-[35rem]");
  sldesContainer.innerHTML = `
    <div class="relative w-[100%] p-2 gap-2 h-[100%] grid grid-cols-4 overflow-hidden border-2 border-black ">
      <!-- Item 1 -->
      <div id="carousel-item" class="group relative w-[90%] h-[50%] duration-500 ease-in-out rounded-lg bg-yellow-100" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <b>1</b>
        <div class="grid absolute w-[100%] place-items-center top-[26rem] -translate-x-1/2 -translate-y-1/2 left-1/2">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">Quartz Belt Watch</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <!-- Item 2 -->
      <div id="carousel-item" class="group relative w-[90%] h-[50%] rounded-lg duration-500 bg-green-500 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <b>2</b>
        <div class="grid absolute w-[100%] place-items-center top-[26rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">Qasmlak</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <!-- Item 3 -->
      <div id="carousel-item" class="group relative h-[50%] w-[90%] rounded-lg place-content-around duration-500 bg-blue-200 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <b>3</b>
        <div class="grid absolute w-[100%] place-items-center top-[26rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div id="carousel-item" class="group relative h-[50%] w-[90%] place-content-around rounded-lg duration-500 bg-red-300 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <b>4</b>
        <div class="grid absolute w-[100%] place-items-center top-[26rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
      <div id="carousel-item" class="group relative place-content-around w-[90%] h-[50%] rounded-lg duration-500 bg-orange-300 ease-in-out" data-carousel-item>
        <div class="flex group-hover:visible invisible justify-center space-x-4 absolute bottom-0 h-[6rem] place-items-center w-[100%] border-2 border-black">
          <span class="border-solid border-2 border-black p-2">&#8750;</span>
          <span class="border-solid border-2 border-black p-2">&#8751;</span>
          <span class="border-solid border-2 border-black p-2">&#8752;</span>
        </div>
        <b>5  </b>
        <div class="grid absolute w-[100%] place-items-center top-[26rem] -translate-x-1/2 -translate-y-1/2 left-1/2" alt="...">
          <p class="text-sm text-gray-400">Accessories</p>
          <p class="text-xl font-bold group-hover:text-blue-700">QMlkokajs</p>
          <p class="text-gray-600">$150.00</p>
        </div>
      </div>
    </div>
    <div class="absolute flex justify-center w-[100%] h-[3rem] pb-[3rem] place-items-center">
      <button class="hover:bg-gray-500 rounded-md hover:text-white text-3xl p-0 cursor-pointer opacity-[2rem] transition-opacity hover:opacity-[3rem] focus:opacity-[3rem]" data-carousel-prev>
        &#8678; <!-- html arrow codes-->
      </button>
      <button class="hover:bg-gray-500 rounded-md hover:text-white text-3xl p-0 cursor-pointer opacity-[2rem] transition-opacity hover:opacity-[3rem] focus:opacity-[3rem]" data-carousel-next>
        &#8680;
      </button>
    </div>
  `;
  latestHder.innerHTML = `
    <p id="latest-header-1" class="text-md px-2 relative ml-24 top-[90rem]">Popular Item in the market</p>
    <div class="flex relative ml-24 top-[90rem]">
      <p id="latest-header-2" class="text-4xl p-2 font-extrabold relative">Latest</p>
      <p id="latest-header-3" class="text-4xl py-2 font-extrabold border-solid border-b-2 border-blue-700 relative">News</p>
    </div>
  `;
  latestNews.removeAttribute('class');
  latestNews.classList.add("grid", "relative", "grid-cols-3", "top-[90rem]", "mx-24", "mt-5", "p-2", "gap-12");
  latestNews.innerHTML = `
      <div class="group">
        <div class="border-solid border-2 border-black h-[20rem] w-[100%]">picture</div>
        <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
          <span>By Admin</span>
          <span>&#9787 2 Comments</span>
        </div>
        <span class="font-bold group-hover:text-blue-600 flex mt-5">No Such Thing As A Life That's Better Than Yours</span>
        <span class="text-gray-600 flex mt-5">When I met her she was out for love, I bought her leather and some diamond studs..</span>
        <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
          <span>Read More</span>
          <span>&#8594;</span>
        </div>
      </div>
      <div class="group">
        <div class="border-solid border-2 border-black h-[20rem] w-[100%]">picture</div>
        <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
          <span>By Admin</span>
          <span>&#9787 2 Comments</span>
        </div>
        <span class="font-bold group-hover:text-blue-600 flex mt-5">No Church In The Wild</span>
        <span class="text-gray-600 flex mt-5">You can't stop it, music still playing in the background...</span>
        <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
          <span>Read More</span>
          <span>&#8594;</span>
        </div>
      </div>
      <div class="group">
        <div class="border-solid border-2 border-black h-[20rem] w-[100%]">picture</div>
        <div class="flex mt-5 gap-x-6 text-sm text-gray-600">
          <span>By Admin</span>
          <span>&#9787 2 Comments</span>
        </div>
        <span class="font-bold group-hover:text-blue-600 flex mt-5">It Won't Stop</span>
        <span class="text-gray-600 flex mt-5">All I want is you, So what you trying to do...</span>
        <div class="flex gap-x-2 font-bold mt-5 group-hover:text-blue-600 group-hover:gap-x-4">
          <span>Read More</span>
          <span>&#8594;</span>
        </div>
      </div>
  `;
  getUpdate.removeAttribute('class');
  getUpdate.classList.add("relative", "grid", "top-[90rem]", "border-solid", "place-items-center", "border-2", "shadow-2xl", "m-24", "gap-y-2", "rounded-md");
  getUpdate.innerHTML = `
    <span class="font-extrabold text-2xl mt-[3rem] relative">GET UPDATE FROM ANYWHERE</span>
    <span class="p-4">Can't really trust nobody with all this jewelry on you. My roof look like a no-show</span>
    <div class="flex gap-x-4 m-[3rem]">
      <input type="email" placeholder="Enter your email" class="rounded-full border-1 border-gray-200" size="20">
      <button class="text-white p-2 rounded-full border-2 border-blue-700 bg-blue-700 font-bold border-solid w-[10rem] hover:bg-white hover:text-black">Subscribe Now</button>
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

// const slidesContainer = document.querySelector("#slides-container");
// const slide = document.querySelector("#slide");
// const prevButton = document.querySelector("#slide-arrow-prev");
// const nextButton = document.querySelector("#slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
  
//   console.log(slidesContainer.scrollLeft);
//   console.log(slidesContainer.childElementCount * slideWidth);
//   if(slidesContainer.scrollLeft == ((slidesContainer.childElementCount - 1) * slideWidth)) {
//     slidesContainer.scrollLeft = 0;
//     return;
//   }
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   if(slidesContainer.scrollLeft == 0) {
//     slidesContainer.scrollLeft = ((slidesContainer.childElementCount - 1) * slideWidth);
//     return;
//   }
//   slidesContainer.scrollLeft -= slideWidth;
// }); 

function itemHover (logic) {
  let bookie = '"#'+logic+`"`;
  console.log(bookie);
  // document.querySelector(`#`+logic).classList.add("opacity-40");
  // onHover.style.display = "block";
}
let itemHoverOut = () => {
  document.querySelector(`"`+logic+`"`).classList.remove("opacity-40");
}

