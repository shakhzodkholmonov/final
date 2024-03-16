let categories = [
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst3orifoubkc6q23r0/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1",
        description: "5.0 (2624 sharh)",
        price: "5 180 so'm/oyiga",
        realprice: "57 000 so'm",
        sale: "43 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst3orifoubkc6q23r0/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst3orifoubkc6q23r0/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst3orifoubkc6q23r0/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Aqlli smart televizori Xiaomi Mi TV A2 ",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno0u4lbl7rtgkb9vi40/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Aqlli smart televizori Xiaomi Mi TV A2 ",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno0u4lbl7rtgkb9vi40/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Aqlli smart televizori Xiaomi Mi TV A2 ",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno0u4lbl7rtgkb9vi40/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Aqlli smart televizori Xiaomi Mi TV A2 ",
        description: "5.0 (146 sharh)",
        price: "6 000 so'm/oyiga",
        realprice: "85 000 so'm",
        sale: "55 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno0u4lbl7rtgkb9vi40/original.jpg"],
        category: 2,
    },
];

function displayProductsByCaterogy(category, containerId) {
    let container = document.getElementById(containerId)
    let productsHtml = '';

    categories.forEach((c) => {
        if (c.category === category) {
            productsHtml += `
            <div>
                <img class="w-[15rem] rounded" src="${c.images}" alt="">
                <h3 class="text-sm text-gray-700">${c.name}</h3>
                <h2 class="text-xs text-gray-500 mt-2"><span class="fa fa-star checked"></span>${c.description}</h2>
                <mark class="text-[11px]">${c.price}</mark>
                <p class="mt-6 line-through text-xs text-slate-400">${c.realprice}</p>
                <div class="flex">
                    <p class="text-[15px]">${c.sale}</p>
                    <div class="border h-8 w-8 rounded-full flex centeritems-center ml-[120px] mt-[-5px] pl-[3px] pt-[3px]">
                        <div data-v-1a3a46a8="" class="slot default"><svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
                            <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
                            <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });

    container.innerHTML = productsHtml;
}

displayProductsByCaterogy(1, "for_phones");
displayProductsByCaterogy(2, "for_tv");