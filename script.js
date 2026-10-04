/* =====================================================
   YIWBASE JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (mainNav.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CATEGORY DATA
===================================================== */

const categories = {

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
                location: "Akuapem",
                image: "images/bakery.jpg"
            },

            {
                name: "Restaurant",
                type: "Restaurant",
                location: "Akropong",
                image: "images/restaurant.jpg"
            },

           {
                name: "Catering Services",
                type: "Catering",
                location: "Aburi",
                image: "images/catering.jpeg"
            },

             {
                name: "Catering Services",
                type: "Catering",
                location: "Aburi",
                image: "images/catering.jpeg"
            }

            
 
        ]

    },


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
        "business.html?category=" + category;

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

    const results =
        document.getElementById("businessResults");


    if (title) {

        title.innerText = data.title;

    }

    if (subTitle) {

        subTitle.innerText = data.title;

    }


    /* SUBCATEGORY MENU */

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


    /* BUSINESS CARDS */

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


    businesses.forEach(function (business) {

        const card =
            document.createElement("div");

        card.className = "business-card";


        card.innerHTML = `

            <div class="business-image">

                <img src="${business.image}"
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

                <a href="#">
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


    const data = categories[category];

    if (!data) return;


    const filtered =
        data.businesses.filter(function (business) {

            return business.type
                .toLowerCase()
                .includes(type.toLowerCase());

        });


    if (filtered.length > 0) {

        displayBusinesses(filtered);

    } else {

        displayBusinesses(data.businesses);

    }

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
                this.value.toLowerCase().trim();

            const category =
                new URLSearchParams(window.location.search)
                .get("category");

            if (!category) return;

            const data =
                categories[category];

            if (!data) return;

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

            /* SHOW SEARCH RESULTS */
            displayBusinesses(filtered);


            /* =========================================
               MOBILE SEARCH BEHAVIOUR
            ========================================= */

            if (window.innerWidth <= 768) {

                if (search !== "") {

                    /* Hide category/subcategory area */
                    const sidebar =
                        document.querySelector(".category-sidebar");

                    const submenu =
                        document.getElementById("subcategoryMenu");

                    if (sidebar) {
                        sidebar.classList.add("searching");
                    }

                    if (submenu) {
                        submenu.classList.add("searching");
                    }


                    /* Move directly to results */
                    setTimeout(function () {

                        const results =
                            document.getElementById("businessResults");

                        if (results) {

                            results.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }, 100);

                } else {

                    /* Search cleared - show categories again */

                    const sidebar =
                        document.querySelector(".category-sidebar");

                    const submenu =
                        document.getElementById("subcategoryMenu");

                    if (sidebar) {
                        sidebar.classList.remove("searching");
                    }

                    if (submenu) {
                        submenu.classList.remove("searching");
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

        alert("Please enter what you are looking for.");

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


    input.value = value;

    searchBusinesses();

}


/* =====================================================
   AUTO LOAD CATEGORY
===================================================== */

if (window.location.pathname.includes("business.html")) {

    const params =
        new URLSearchParams(window.location.search);

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