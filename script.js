 /* =====================================================
   YIWBASE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (mainNav.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}


/* =====================================================
   CATEGORY DATA
===================================================== */

const categories = {

    /* =================================================
       FOOD
    ================================================= */

    food: {

        title: "Food & Restaurants",

        subcategories: [
            "Restaurants",
            "Chop Bars",
            "Fast Food",
            "Bakeries",
            "Catering Services",
            "Food Vendors",
            "Bars & Pubs"
        ],

        businesses: [

            {
                name: "Akro Golden Bakery",

                type: "Bakery",

                location: "Akropong, Akuapem",

                phone: "0240000000",

                whatsapp: "233240000000",

                description:
                    "Akro Golden Bakery provides fresh bread, pastries, cakes and other delicious baked products. We also take orders for special occasions and events.",

                images: [
                    "images/bakery.jpg",
                    "images/bakery1.webp",
                    "images/bakery2.webp"
                ]
            },

            {
                     name: "ABC Restaurant",
                     type: "Restaurant",
                     location: "Akropong, Akuapem",
                     phone: "0241234567",
                     whatsapp: "233241234567",
                     description: "ABC Restaurant serves delicious local and continental meals. We also accept orders for events and special occasions.",
                     images: [
                   "images/restaurant.jpg",
                   "images/restaurant1.png",
                   "images/restaurant2.jpg"
    ]
 
            },

            {
                name: "Catering Services",

                type: "Catering",

                location: "Aburi",

                image: "images/catering.jpeg"
            },

            {
                name: "Catering Services 2",

                type: "Catering",

                location: "Aburi",

                image: "images/catering.jpeg"
            }

        ]

    },


    /* =================================================
       FASHION
    ================================================= */

    fashion: {

        title: "Fashion & Beauty",

        subcategories: [
            "Fashion Designers",
            "Boutiques",
            "Tailors",
            "Barbers",
            "Salons",
            "Makeup Artists",
            "Beauty Shops"
        ],

        businesses: [

            {
                name: "Example Fashion House",

                type: "Fashion Designer",

                location: "Accra",

                image: "images/fashion.jpg"
            },

            {
                name: "Example Beauty Salon",

                type: "Beauty Salon",

                location: "Koforidua",

                image: "images/beautysaloon.avif"
            }

        ]

    },


    /* =================================================
       HOTELS
    ================================================= */

    hotels: {

        title: "Hotels & Accommodation",

        subcategories: [
            "Hotels",
            "Guest Houses",
            "Resorts",
            "Apartments",
            "Hostels"
        ],

        businesses: [

            {
                name: "Example Guest House",

                type: "Guest House",

                location: "Aburi",

                image: "images/guesshouse.jpg"
            },

            {
                name: "Example Hotel",

                type: "Hotel",

                location: "Akuapem",

                image: "images/hotel.jpeg"
            }

        ]

    },


    /* =================================================
       SHOPS
    ================================================= */

    shops: {

        title: "Shops & Retail",

        subcategories: [
            "Supermarkets",
            "Provision Stores",
            "Electronics",
            "Mobile Phones",
            "Furniture",
            "Clothing Shops"
        ],

        businesses: [

            {
                name: "Example Provision Store",

                type: "Retail",

                location: "Akropong",

                image: "images/provision.jpg"
            }

        ]

    },


    /* =================================================
       HEALTH
    ================================================= */

    health: {

        title: "Health & Pharmacy",

        subcategories: [
            "Pharmacies",
            "Hospitals",
            "Clinics",
            "Laboratories",
            "Dental Clinics",
            "Medical Services"
        ],

        businesses: []

    },


    /* =================================================
       EDUCATION
    ================================================= */

    education: {

        title: "Education",

        subcategories: [
            "Basic Schools",
            "Senior High Schools",
            "Universities",
            "Training Centres",
            "Tutors",
            "Computer Schools"
        ],

        businesses: []

    },


    /* =================================================
       CONSTRUCTION
    ================================================= */

    construction: {

        title: "Construction",

        subcategories: [
            "Contractors",
            "Architects",
            "Masons",
            "Carpenters",
            "Electricians",
            "Plumbers",
            "Building Materials"
        ],

        businesses: []

    },


    /* =================================================
       TRANSPORT
    ================================================= */

    transport: {

        title: "Transport",

        subcategories: [
            "Taxis",
            "Car Rentals",
            "Logistics",
            "Delivery",
            "Drivers",
            "Transport Companies"
        ],

        businesses: []

    },


    /* =================================================
       TECHNOLOGY
    ================================================= */

    technology: {

        title: "Technology",

        subcategories: [
            "Web Designers",
            "Graphic Designers",
            "IT Services",
            "Software",
            "Computer Shops",
            "Phone Repairs"
        ],

        businesses: []

    },


    /* =================================================
       EVENTS
    ================================================= */

    events: {

        title: "Events & Entertainment",

        subcategories: [
            "Event Planners",
            "DJs",
            "Photographers",
            "Videographers",
            "Lounges",
            "Music",
            "Decorators"
        ],

        businesses: []

    }

};


/* =====================================================
   OPEN CATEGORY
===================================================== */

function openCategory(category) {

    window.location.href =
        "business.html?category=" + encodeURIComponent(category);

}


/* =====================================================
   LOAD CATEGORY
===================================================== */

function loadCategory(category) {

    const data = categories[category];

    if (!data) return;


    const title =
        document.getElementById("categoryTitle");

    const subTitle =
        document.getElementById("subCategoryTitle");

    const submenu =
        document.getElementById("subcategoryMenu");


    if (title) {

        title.innerText = data.title;

    }


    if (subTitle) {

        subTitle.innerText = data.title;

    }


    /* ===============================================
       SUBCATEGORY MENU
    =============================================== */

    if (submenu) {

        submenu.innerHTML = "";


        data.subcategories.forEach(function (sub) {

            const button =
                document.createElement("button");


            button.innerText = sub;


            button.onclick = function () {

                filterBusinesses(sub);

            };


            submenu.appendChild(button);

        });

    }


    /* ===============================================
       BUSINESS CARDS
    =============================================== */

    displayBusinesses(data.businesses);

}


/* =====================================================
   DISPLAY BUSINESSES
===================================================== */

function displayBusinesses(businesses) {

    const results =
        document.getElementById("businessResults");


    if (!results) return;


    results.innerHTML = "";


    /* ===============================================
       NO RESULTS
    =============================================== */

    if (businesses.length === 0) {

        results.innerHTML = `

            <div class="empty-results">

                <i class="fa-solid fa-store"></i>

                <h3>
                    No businesses listed yet
                </h3>

                <p>
                    Businesses in this category
                    will appear here.
                </p>

            </div>

        `;

        return;

    }


    /* ===============================================
       CREATE BUSINESS CARDS
    =============================================== */

    businesses.forEach(function (business) {


        const card =
            document.createElement("div");


        card.className =
            "business-card";


        /* =========================================
           FIRST IMAGE
        ========================================= */

        const firstImage =
            business.images && business.images.length > 0
                ? business.images[0]
                : business.image;


        card.innerHTML = `

            <div class="business-image">

                <img
                    src="${firstImage}"
                    alt="${business.name}">

                <span class="verified">

                    <i class="fa-solid fa-circle-check"></i>

                    Verified

                </span>

            </div>


            <div class="business-info">

                <small>
                    ${business.type}
                </small>


                <h3>
                    ${business.name}
                </h3>


                <p>

                    <i class="fa-solid fa-location-dot"></i>

                    ${business.location}

                </p>


                <a
                    href="business-details.html?name=${encodeURIComponent(business.name)}">

                    View Business

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>

        `;


        results.appendChild(card);

    });

}


/* =====================================================
   FILTER BUSINESSES
===================================================== */

function filterBusinesses(type) {

    const category =
        new URLSearchParams(window.location.search)
        .get("category");


    if (!category) return;


    const data =
        categories[category];


    if (!data) return;


    const filtered =
        data.businesses.filter(function (business) {

            return business.type
                .toLowerCase()
                .includes(type.toLowerCase());

        });


    displayBusinesses(filtered);

}


/* =====================================================
   DIRECTORY SEARCH
===================================================== */

const directorySearch =
    document.getElementById("directorySearch");


if (directorySearch) {


    directorySearch.addEventListener(
        "input",
        function () {


            const search =
                this.value
                .toLowerCase()
                .trim();


            const category =
                new URLSearchParams(window.location.search)
                .get("category");


            if (!category) return;


            const data =
                categories[category];


            if (!data) return;


            /* =========================================
               SEARCH BUSINESS NAME / TYPE / LOCATION
            ========================================= */

            const filtered =
                data.businesses.filter(function (business) {

                    return (

                        business.name
                            .toLowerCase()
                            .includes(search)

                        ||

                        business.type
                            .toLowerCase()
                            .includes(search)

                        ||

                        business.location
                            .toLowerCase()
                            .includes(search)

                    );

                });


            displayBusinesses(filtered);


            /* =========================================
               MOBILE SEARCH
            ========================================= */

            if (window.innerWidth <= 768) {


                const sidebar =
                    document.querySelector(
                        ".category-sidebar"
                    );


                const submenu =
                    document.getElementById(
                        "subcategoryMenu"
                    );


                if (search !== "") {


                    if (sidebar) {

                        sidebar.classList.add(
                            "searching"
                        );

                    }


                    if (submenu) {

                        submenu.classList.add(
                            "searching"
                        );

                    }


                    setTimeout(function () {

                        const results =
                            document.getElementById(
                                "businessResults"
                            );


                        if (results) {

                            results.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }, 100);


                } else {


                    if (sidebar) {

                        sidebar.classList.remove(
                            "searching"
                        );

                    }


                    if (submenu) {

                        submenu.classList.remove(
                            "searching"
                        );

                    }

                }

            }

        }

    );

}


/* =====================================================
   HOME SEARCH
===================================================== */

function searchBusinesses() {

    const input =
        document.getElementById("homeSearch");


    if (!input) return;


    const search =
        input.value.trim();


    if (search === "") {

        alert(
            "Please enter what you are looking for."
        );

        return;

    }


    localStorage.setItem(
        "yiwbaseSearch",
        search
    );


    window.location.href =
        "business.html";

}


/* =====================================================
   QUICK SEARCH
===================================================== */

function quickSearch(value) {

    const input =
        document.getElementById("homeSearch");


    if (!input) return;


    input.value =
        value;


    searchBusinesses();

}


/* =====================================================
   AUTO LOAD CATEGORY
===================================================== */

if (
    window.location.pathname.includes(
        "business.html"
    )
) {


    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get("category") || "food";


    loadCategory(category);

}


/* =====================================================
   SEARCH ENTER KEY
===================================================== */

const homeSearch =
    document.getElementById("homeSearch");


if (homeSearch) {

    homeSearch.addEventListener(
        "keypress",
        function (event) {

            if (event.key === "Enter") {

                searchBusinesses();

            }

        }
    );

}