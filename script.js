 /* =====================================================
   YIWBASE - MAIN JAVASCRIPT
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
       FOOD & RESTAURANTS
    ================================================= */

    food: {

        title: "Food & Restaurants",

        heroImage: "images/bakery.jpg",

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

                description:
                    "ABC Restaurant serves delicious local and continental meals. We also accept orders for events and special occasions.",

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
       FASHION & BEAUTY
    ================================================= */

    fashion: {

        title: "Fashion & Beauty",

        heroImage: "images/fashion.jpg",

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
       HOTELS & ACCOMMODATION
    ================================================= */

    hotels: {

        title: "Hotels & Accommodation",

        heroImage: "images/hotel.jpeg",

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
       SHOPS & RETAIL
    ================================================= */

    shops: {

        title: "Shops & Retail",

        heroImage: "images/provision.jpg",

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
       HEALTH & PHARMACY
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
       EVENTS & ENTERTAINMENT
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
        "business.html?category=" +
        encodeURIComponent(category);

}


/* =====================================================
   LOAD CATEGORY
===================================================== */

function loadCategory(category) {

    const data = categories[category];

    if (!data) return;


    /* =================================================
       CATEGORY HERO IMAGE
    ================================================= */

    const hero =
        document.getElementById("categoryHero");

    if (hero && data.heroImage) {

        hero.style.backgroundImage =
            `url("${data.heroImage}")`;

    }


    /* =================================================
       CATEGORY TITLES
    ================================================= */

    const title =
        document.getElementById("categoryTitle");

    const subTitle =
        document.getElementById("subCategoryTitle");

    const submenu =
        document.getElementById("subcategoryMenu");


    if (title) {

        title.innerText =
            data.title;

    }


    if (subTitle) {

        subTitle.innerText =
            data.title;

    }


    /* =================================================
       CREATE FILTER BUTTONS
    ================================================= */

    if (submenu) {

        submenu.innerHTML = "";


        /* =============================================
           ALL BUTTON
        ============================================= */

        const allButton =
            document.createElement("button");

        allButton.type = "button";

        allButton.innerText =
            "All";

        allButton.className =
            "subcategory-btn active all-filter";


        allButton.onclick =
            function () {

                displayBusinesses(
                    data.businesses
                );

                setActiveFilter(
                    allButton
                );

            };


        submenu.appendChild(
            allButton
        );


        /* =============================================
           SUBCATEGORY BUTTONS
        ============================================= */

        if (data.subcategories) {

            data.subcategories.forEach(
                function (sub) {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type = "button";

                    button.innerText =
                        sub;

                    button.className =
                        "subcategory-btn";


                    button.onclick =
                        function () {

                            filterBusinesses(
                                sub
                            );

                            setActiveFilter(
                                button
                            );

                        };


                    submenu.appendChild(
                        button
                    );

                }
            );

        }

    }


    /* =================================================
       SHOW ALL BUSINESSES BY DEFAULT
    ================================================= */

    displayBusinesses(
        data.businesses
    );

}


/* =====================================================
   SET ACTIVE FILTER
===================================================== */

function setActiveFilter(activeButton) {

    const buttons =
        document.querySelectorAll(
            ".subcategory-btn"
        );


    buttons.forEach(
        function (button) {

            button.classList.remove(
                "active"
            );

        }
    );


    if (activeButton) {

        activeButton.classList.add(
            "active"
        );

    }

}


/* =====================================================
   FILTER MAP
===================================================== */

const filterMap = {

    /* FOOD */

    "restaurants": [
        "restaurant",
        "restaurants"
    ],

    "chop bars": [
        "chop bar",
        "chop bars"
    ],

    "fast food": [
        "fast food"
    ],

    "bakeries": [
        "bakery",
        "bakeries"
    ],

    "catering services": [
        "catering",
        "caterer",
        "catering service",
        "catering services"
    ],

    "food vendors": [
        "food vendor",
        "food vendors"
    ],

    "bars & pubs": [
        "bar",
        "bars",
        "pub",
        "pubs"
    ],


    /* FASHION */

    "fashion designers": [
        "fashion designer",
        "fashion designers"
    ],

    "boutiques": [
        "boutique",
        "boutiques"
    ],

    "tailors": [
        "tailor",
        "tailors"
    ],

    "barbers": [
        "barber",
        "barbers"
    ],

    "salons": [
        "salon",
        "salons"
    ],

    "makeup artists": [
        "makeup artist",
        "makeup artists"
    ],

    "beauty shops": [
        "beauty shop",
        "beauty shops"
    ],


    /* HOTELS */

    "hotels": [
        "hotel",
        "hotels"
    ],

    "guest houses": [
        "guest house",
        "guest houses"
    ],

    "resorts": [
        "resort",
        "resorts"
    ],

    "apartments": [
        "apartment",
        "apartments"
    ],

    "hostels": [
        "hostel",
        "hostels"
    ],


    /* SHOPS */

    "supermarkets": [
        "supermarket",
        "supermarkets"
    ],

    "provision stores": [
        "provision",
        "provision store",
        "provision stores",
        "retail"
    ],

    "electronics": [
        "electronics",
        "electronic"
    ],

    "mobile phones": [
        "mobile phone",
        "mobile phones",
        "phone"
    ],

    "furniture": [
        "furniture"
    ],

    "clothing shops": [
        "clothing",
        "clothing shop",
        "clothing shops"
    ],


    /* HEALTH */

    "pharmacies": [
        "pharmacy",
        "pharmacies"
    ],

    "hospitals": [
        "hospital",
        "hospitals"
    ],

    "clinics": [
        "clinic",
        "clinics"
    ],

    "laboratories": [
        "laboratory",
        "laboratories",
        "lab"
    ],

    "dental clinics": [
        "dental",
        "dental clinic",
        "dental clinics"
    ],

    "medical services": [
        "medical",
        "medical service",
        "medical services"
    ],


    /* EDUCATION */

    "basic schools": [
        "basic school",
        "basic schools"
    ],

    "senior high schools": [
        "senior high school",
        "senior high schools",
        "shs"
    ],

    "universities": [
        "university",
        "universities"
    ],

    "training centres": [
        "training centre",
        "training centres",
        "training center",
        "training centers"
    ],

    "tutors": [
        "tutor",
        "tutors"
    ],

    "computer schools": [
        "computer school",
        "computer schools"
    ],


    /* CONSTRUCTION */

    "contractors": [
        "contractor",
        "contractors"
    ],

    "architects": [
        "architect",
        "architects"
    ],

    "masons": [
        "mason",
        "masons"
    ],

    "carpenters": [
        "carpenter",
        "carpenters"
    ],

    "electricians": [
        "electrician",
        "electricians"
    ],

    "plumbers": [
        "plumber",
        "plumbers"
    ],

    "building materials": [
        "building material",
        "building materials"
    ],


    /* TRANSPORT */

    "taxis": [
        "taxi",
        "taxis"
    ],

    "car rentals": [
        "car rental",
        "car rentals"
    ],

    "logistics": [
        "logistic",
        "logistics"
    ],

    "delivery": [
        "delivery",
        "deliveries"
    ],

    "drivers": [
        "driver",
        "drivers"
    ],

    "transport companies": [
        "transport company",
        "transport companies"
    ],


    /* TECHNOLOGY */

    "web designers": [
        "web designer",
        "web designers"
    ],

    "graphic designers": [
        "graphic designer",
        "graphic designers"
    ],

    "it services": [
        "it service",
        "it services",
        "it"
    ],

    "software": [
        "software"
    ],

    "computer shops": [
        "computer shop",
        "computer shops"
    ],

    "phone repairs": [
        "phone repair",
        "phone repairs"
    ],


    /* EVENTS */

    "event planners": [
        "event planner",
        "event planners"
    ],

    "djs": [
        "dj",
        "djs"
    ],

    "photographers": [
        "photographer",
        "photographers"
    ],

    "videographers": [
        "videographer",
        "videographers"
    ],

    "lounges": [
        "lounge",
        "lounges"
    ],

    "music": [
        "music"
    ],

    "decorators": [
        "decorator",
        "decorators"
    ]

};


/* =====================================================
   FILTER BUSINESSES
===================================================== */

function filterBusinesses(type) {

    const category =
        new URLSearchParams(
            window.location.search
        ).get("category");


    if (!category) return;


    const data =
        categories[category];


    if (!data) return;


    /* =============================================
       ALL
    ============================================= */

    if (
        type &&
        type.toLowerCase().trim() === "all"
    ) {

        displayBusinesses(
            data.businesses
        );

        return;

    }


    /* =============================================
       GET FILTER TYPES
    ============================================= */

    const filterKey =
        type.toLowerCase().trim();


    const allowedTypes =
        filterMap[filterKey] ||
        [filterKey];


    /* =============================================
       FILTER BUSINESSES
    ============================================= */

    const filtered =
        data.businesses.filter(
            function (business) {

                if (!business.type) {

                    return false;

                }


                const businessType =
                    business.type
                        .toLowerCase()
                        .trim();


                return allowedTypes.some(
                    function (allowedType) {

                        return businessType.includes(
                            allowedType
                        );

                    }
                );

            }
        );


    /* =============================================
       DISPLAY RESULTS
    ============================================= */

    displayBusinesses(
        filtered
    );

}


/* =====================================================
   DISPLAY BUSINESSES
===================================================== */

function displayBusinesses(businesses) {

    const results =
        document.getElementById(
            "businessResults"
        );


    if (!results) return;


    results.innerHTML = "";


    /* =============================================
       NO RESULTS
    ============================================= */

    if (
        !businesses ||
        businesses.length === 0
    ) {

        results.innerHTML = `

            <div class="empty-results">

                <i class="fa-solid fa-store"></i>

                <h3>
                    No businesses found
                </h3>

                <p>
                    There are currently no
                    businesses listed under
                    this filter.
                </p>

            </div>

        `;

        return;

    }


    /* =============================================
       CREATE BUSINESS CARDS
    ============================================= */

    businesses.forEach(
        function (business) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "business-card";


            /* =====================================
               BUSINESS IMAGE
            ===================================== */

            const firstImage =
                business.images &&
                business.images.length > 0

                    ? business.images[0]

                    : business.image;


            /* =====================================
               BUSINESS CARD
            ===================================== */

            card.innerHTML = `

                <div class="business-image">

                    <img
                        src="${firstImage || ""}"
                        alt="${business.name}"
                        loading="lazy"
                    >

                    <span class="verified">

                        <i class="fa-solid fa-circle-check"></i>

                        Verified

                    </span>

                </div>


                <div class="business-info">

                    <small>
                        ${business.type || ""}
                    </small>


                    <h3>
                        ${business.name || ""}
                    </h3>


                    <p>

                        <i class="fa-solid fa-location-dot"></i>

                        ${business.location || ""}

                    </p>


                    <a
                        href="./business-details.html?name=${encodeURIComponent(
                            business.name || ""
                        )}"
                    >

                        View Business

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>

                </div>

            `;


            results.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   DIRECTORY SEARCH
===================================================== */

const directorySearch =
    document.getElementById(
        "directorySearch"
    );


if (directorySearch) {

    directorySearch.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const category =
                new URLSearchParams(
                    window.location.search
                ).get("category");


            if (!category) return;


            const data =
                categories[category];


            if (!data) return;


            /* =========================================
               SEARCH ALL BUSINESS INFORMATION
            ========================================= */

            const filtered =
                data.businesses.filter(
                    function (business) {

                        const name =
                            (
                                business.name ||
                                ""
                            ).toLowerCase();


                        const type =
                            (
                                business.type ||
                                ""
                            ).toLowerCase();


                        const location =
                            (
                                business.location ||
                                ""
                            ).toLowerCase();


                        const description =
                            (
                                business.description ||
                                ""
                            ).toLowerCase();


                        return (

                            name.includes(search)

                            ||

                            type.includes(search)

                            ||

                            location.includes(search)

                            ||

                            description.includes(search)

                        );

                    }
                );


            displayBusinesses(
                filtered
            );


            /* =========================================
               MOBILE SEARCH
            ========================================= */

            if (
                window.innerWidth <= 768
            ) {

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


                    setTimeout(
                        function () {

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

                        },
                        100
                    );


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
        document.getElementById(
            "homeSearch"
        );


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
        document.getElementById(
            "homeSearch"
        );


    if (!input) return;


    input.value =
        value;


    searchBusinesses();

}


/* =====================================================
   HOME SEARCH ENTER KEY
===================================================== */

const homeSearch =
    document.getElementById(
        "homeSearch"
    );


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


/* =====================================================
   AUTO LOAD CATEGORY PAGE
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
        params.get("category") ||
        "food";


    loadCategory(
        category
    );

}


/* =====================================================
   HOME SEARCH ON DIRECTORY PAGE
===================================================== */

if (
    window.location.pathname.includes(
        "business.html"
    )
) {

    const savedSearch =
        localStorage.getItem(
            "yiwbaseSearch"
        );


    if (
        savedSearch &&
        directorySearch
    ) {

        directorySearch.value =
            savedSearch;


        /* =============================================
           RUN SAVED SEARCH
        ============================================= */

        const category =
            new URLSearchParams(
                window.location.search
            ).get("category");


        if (category) {

            const data =
                categories[category];


            if (data) {

                const search =
                    savedSearch
                        .toLowerCase()
                        .trim();


                const filtered =
                    data.businesses.filter(
                        function (business) {

                            const name =
                                (
                                    business.name ||
                                    ""
                                ).toLowerCase();


                            const type =
                                (
                                    business.type ||
                                    ""
                                ).toLowerCase();


                            const location =
                                (
                                    business.location ||
                                    ""
                                ).toLowerCase();


                            const description =
                                (
                                    business.description ||
                                    ""
                                ).toLowerCase();


                            return (

                                name.includes(search)

                                ||

                                type.includes(search)

                                ||

                                location.includes(search)

                                ||

                                description.includes(search)

                            );

                        }
                    );


                displayBusinesses(
                    filtered
                );


                localStorage.removeItem(
                    "yiwbaseSearch"
                );

            }

        }

    }

}