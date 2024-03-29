let header = document.querySelector("header");

header.innerHTML = ` <nav class="h-9  bg-slate-100 w-full pt-1">
<div class="max-w-screen-xl flex-wrap items-center justify-between mx-auto">
    <div class="flex">
        <a class="flex bg-primary-800 text-center" href=""><svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 21 21">
                <g fill="none" fill-rule="evenodd" stroke="black" stroke-linecap="round"
                    stroke-linejoin="round" transform="translate(4 2)">
                    <path
                        d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05" />
                    <circle cx="6.5" cy="6.5" r="2.5" />
                </g>
            </svg>
            Shahar: Samarqand</a>
        <a class="pl-6" href="https://uzum.uz/uz/about/delivery-points">Topshirish punktlari</a>
        <h1 class="pl-32 text-slate-400">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</h1>
        <a class="pl-32 text-slate-600" href="https://uzum.uz/uz/faq">Savol-Javoblar</a>
        <a class="pl-6  text-slate-600" href="">Buyurtmalarim</a>
        <a class="pl-6" href="">O'zbekcha</a>
    </div>
</div>
</nav>
<header class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
<div class="w-full h-16 bg-white max-w-screen-xl flex flex-wrap items-center mx-auto">
    <a href="./index.html">
        <img src="/Uzum-Refactor/logos/Picsart_24-02-29_11-26-12-300.png" alt="">
    </a>
    <button class="w-32 h-10 bg-violet-100 ml-6 rounded text-violet-600">
        <span class="icon-[ant-design--shopping-outlined]"></span> Katalog
    </button>
    <div id="search" class="max-w-lg mx-auto">
        <div class="search rounded-[5px] flex w-full flex-wrap">
            <input id="searchInput" type="search"
                class="w-[400px] h-10 border-solid border-neutral-300 rounded-l-[5px] border-gray-800"
                placeholder="Mahsulotlar va turkumlar izlash" aria-label="Search"
                aria-describedby="button-addon1" />

            <!--Search button-->


            <button
                class="h-10 flex items-center rounded-r bg-zinc-200  border border-solid border-neutral-300  px-6 py-2.5 text-xs font-medium uppercase leading-tight transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800"
                type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="h-5 w-5 text-gray-600">
                    <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
    <div id="buttons"
        class="ml-3 mb-[-2px] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <!-- Button to Open Modal -->
        <button class="h-10 w-24 pl-[10px] pt-[10px] rounded text-gray-900 flex hover:bg-gray-200"
            id="openModalButton">
            <svg class="mr-[10px] mt-[-3px] text-gray-800" xmlns="http://www.w3.org/2000/svg" width="26"
                height="26" viewBox="0 0 24 24">
                <path fill="black"
                    d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" />
            </svg>Kirish
        </button>

        <!-- Modal box -->
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden"
            id="modal">
            <div class="w-[415px] bg-white p-8 rounded-md shadow-md relative">
                <button class="top-0 right-0 m-2 px-4 py-2" id="closeModalButton">
                    &times;
                </button>
                <h2 class="text-[25px] font-semibold pt-[50px]">Telefon raqamni kiriting</h2>
                <p class="text-x font-semibold mt-[10px] text-zinc-600">Tasdiqlash kodini SMS orqali
                    yuboramiz</p>
                <input type="text" id="phoneNumberInput" placeholder="+998 00 000 00 00"
                    class="h-[50px] border-none p-2 rounded-xl mb-6 mt-[25px] bg-gray-200"
                    style="width: 100%;">
                <button class="h-[50px] bg-indigo-700 text-white px-4 py-2 rounded-xl w-full"
                    id="getCodeButton">Kodni
                    olish
                </button>
                <div class="flex pt-[90px] gap-[5px]">
                    <p class="ml-[45px]">Avtotizatsiyadan o'tish orqali siz</p>
                    <p class="text-blue-400">shaxsiy</p>
                </div>
                <p class="text-blue-400 text-center">ma'lumotlarni qayta ishlash siyosatiga
                    rozilik<br>bildirasiz</p>


            </div>
        </div>

        <a href="favorites.html">
            <button class="pl-[5px] h-10 w-28 pt-[10px] rounded text-gray-900 flex hover:bg-gray-200">
                <svg class="mr-[10px] mt-[-3px] text-gray-800" xmlns="http://www.w3.org/2000/svg" width="26"
                    height="26" viewBox="0 0 48 48">
                    <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="4"
                        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8" />
                </svg>Saralangan
            </button>
        </a>
        <a href="./savat.html">
            <button
                class="ml-[20px] h-10 w-28 pl-[5px] pt-[10px] rounded text-gray-900 flex hover:bg-gray-200">
                <svg class="mr-[10px] mt-[-3px] text-gray-800" xmlns="http://www.w3.org/2000/svg" width="26"
                    height="26" viewBox="0 0 1024 1024">
                    <path fill="black"
                        d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32m-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96z" />
                </svg>Savat
                <p class="bg-indigo-700 text-white w-[20px] ml-[5px] rounded">1</p>
            </button>
        </a>
    </div>
    <div class="max-w-lg mx-auto  z-50 ">
        <div id="searchResults"></div>
    </div>
</div>
<div class="mt-3">
    <ul id="links" class="flex gap-2">
        <img class="w-5 h-5" src="https://static.uzum.uz/nasiya/union.png" alt="">
        <a class="ml-1" href="">Muddatli tolov</a>
        <img class="w-5 h-5 ml-6" src="https://static.uzum.uz/fast_categories/new_sale_2023.png" alt="">
        <a class="ml-1" href="">Sirli toplam</a>
        <img class="w-5 h-5 ml-6" src="https://static.uzum.uz/fast_categories/mens_gifts.png" alt="">
        <a class="" href="">Erkaklar uchun</a>
        <a class="ml-3 text-slate-400" href="">Elektronika</a>
        <a class="ml-3 text-slate-400" href="">Maishiy texnika</a>
        <a class="ml-3 text-slate-400" href=""> Kiyim</a>
        <a class="ml-3 text-slate-400" href="">Poyabzal</a>
        <a class="ml-3 text-slate-400" href="">Aksessuarlar</a>
        <a class="ml-3 text-slate-400" href="">Gozalik va parvarish</a>
        <a class="ml-3 text-slate-400" href="">Salomatlik</a>
        <a class="ml-3 text-slate-400" href="">Yana ></a>
    </ul>
</div>
</header>
`