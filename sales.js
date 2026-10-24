 
document.addEventListener("DOMContentLoaded", function () {
    // ========================================
    // ELEMENTS
    // ========================================

    const listingGrid = document.getElementById("salesListingGrid");
    const searchInput = document.getElementById("salesSearch");
    const locationFilter = document.getElementById("salesLocation");
    const sortSelect = document.getElementById("salesSort");
    const resultsCount = document.getElementById("salesResultsCount");
    const noResults = document.getElementById("salesNoResults");
    const resetButton = document.getElementById("salesReset");
    const categoryButtons = document.querySelectorAll("[data-category]");
    const yearElement = document.getElementById("salesYear");

    if (!listingGrid) return;

    // ========================================
    // SAMPLE MARKETPLACE LISTINGS
    // Edit these records to add your items.
    // ========================================

    const listings = [
        {
            id: 1,
            title: "Toyota Corolla",
            category: "cars",
            price: 85000,
            location: "Accra",
            description: "Toyota Corolla available for sale. Contact the seller for more information.",
            image: "images/corrola.jpg",
            date: "2026-10-20",
            seller: "Demo Seller",
            phone: "",
            featured: true
        },
        {
            id: 2,
            title: "Modern Family House",
            category: "houses",
            price: 850000,
            location: "Akuapem",
            description: "A family house available for sale. Ask the seller for details and viewing arrangements.",
            image: "images/house.webp",
            date: "2026-10-18",
            seller: "Demo Seller",
            phone: "",
            featured: true
        },
        {
            id: 3,
            title: "Residential Plot of Land",
            category: "land",
            price: 65000,
            location: "Akropong",
            description: "Land available for purchase. Confirm the documents, boundaries, and ownership before payment.",
            image: "images/land.webp",
            date: "2026-10-16",
            seller: "Demo Seller",
            phone: "",
            featured: false
        },
        {
            id: 4,
            title: "Laptop Computer",
            category: "electronics",
            price: 4500,
            location: "Accra",
            description: "Laptop for work, school, or everyday use. Ask the seller about the specifications and condition.",
            image: "images/laptop.webp",
            date: "2026-10-15",
            seller: "Demo Seller",
            phone: "",
            featured: false
        },
        {
            id: 5,
            title: "Smartphone",
            category: "phones",
            price: 3200,
            location: "Aburi",
            description: "Smartphone available for sale. Confirm the model, storage, and condition with the seller.",
            image: "images/phone.jpg",
            date: "2026-10-14",
            seller: "Demo Seller",
            phone: "",
            featured: false
        },
        {
            id: 6,
            title: "Living Room Sofa",
            category: "furniture",
            price: 5800,
            location: "Nsawam",
            description: "Living room sofa available. Contact the seller for dimensions and condition.",
            image: "images/sofa.jpg",
            date: "2026-10-12",
            seller: "Demo Seller",
            phone: "",
            featured: false
        },
        {
            id: 7,
            title: "Fashion Collection",
            category: "fashion",
            price: 450,
            location: "Accra",
            description: "Fashion items available. Ask the seller about sizes, colours, and availability.",
            image: "images/fashion.jpg",
            date: "2026-10-10",
            seller: "Demo Seller",
            phone: "",
            featured: false
        },
        {
            id: 8,
            title: "Household Item",
            category: "other",
            price: 700,
            location: "Akropong",
            description: "Household item available for sale. Contact the seller for more details.",
            image: "images/item.jpg",
            date: "2026-10-08",
            seller: "Demo Seller",
            phone: "",
            featured: false
        }
    ];

    let activeCategory = "all";
    let currentLightboxIndex = 0;
    let visibleImages = [];

    // ========================================
    // HELPER FUNCTIONS
    // ========================================

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];
        });
    }

    function formatPrice(price) {
        return "GH₵ " + Number(price).toLocaleString("en-GH");
    }

    function getImagePath(image) {
        return escapeHTML(image || "images/item.jpg");
    }

    function getWhatsAppLink(phone) {
        const digits = String(phone || "").replace(/\D/g, "");

        if (!digits) return "";

        return "https://wa.me/" + digits;
    }

    // ========================================
    // CREATE A LISTING CARD
    // ========================================

    function createListingCard(item) {
        const safeTitle = escapeHTML(item.title);
        const safeLocation = escapeHTML(item.location);
        const safeSeller = escapeHTML(item.seller || "Seller");
        const safeDescription = escapeHTML(item.description);
        const imagePath = getImagePath(item.image);
        const whatsappLink = getWhatsAppLink(item.phone);

        const categoryNames = {
            cars: "Cars",
            houses: "Houses",
            land: "Land",
            electronics: "Electronics",
            phones: "Phones",
            furniture: "Furniture",
            fashion: "Fashion",
            other: "Other Items"
        };

        const categoryName =
            categoryNames[item.category] || "Marketplace";

        const featuredLabel = item.featured
            ? '<span class="sales-featured-badge">Featured</span>'
            : "";

        const contactButton = whatsappLink
            ? `<a class="sales-card-button" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">Contact Seller</a>`
            : '<button class="sales-card-button" type="button" disabled>Contact Pending</button>';

        return `
            <article class="sales-card" data-listing-id="${item.id}">
                <div class="sales-card-image">
                    ${featuredLabel}

                    <img
                        src="${imagePath}"
                        alt="${safeTitle}"
                        loading="lazy"
                        data-image-id="${item.id}"
                        onerror="this.onerror=null;this.src='https://placehold.co/600x400/f1eee7/52604f?text=Image+Unavailable';"
                    >

                    <span class="sales-image-hint">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        Click to enlarge
                    </span>
                </div>

                <div class="sales-card-content">
                    <span class="sales-card-category">
                        ${escapeHTML(categoryName)}
                    </span>

                    <h3>${safeTitle}</h3>

                    <p class="sales-card-price">
                        ${formatPrice(item.price)}
                    </p>

                    <p class="sales-card-location">
                        <i class="fa-solid fa-location-dot"></i>
                        ${safeLocation}
                    </p>

                    <p class="sales-card-description">
                        ${safeDescription}
                    </p>

                    <div class="sales-card-meta">
                        <span>
                            <i class="fa-solid fa-user"></i>
                            ${safeSeller}
                        </span>
                        <span class="sales-sample-label">Sample listing</span>
                    </div>

                    <div class="sales-card-actions">
                        <button
                            type="button"
                            class="sales-card-button sales-details-button"
                            data-details-id="${item.id}"
                        >
                            View Details
                        </button>

                        ${contactButton}
                    </div>
                </div>
            </article>
        `;
    }

    // ========================================
    // FILTER AND SORT LISTINGS
    // ========================================

    function getFilteredListings() {
        const searchTerm = searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";

        const selectedLocation = locationFilter
            ? locationFilter.value.toLowerCase()
            : "all";

        const sortValue = sortSelect
            ? sortSelect.value
            : "newest";

        let filtered = listings.filter(function (item) {
            const matchesCategory =
                activeCategory === "all" ||
                item.category === activeCategory;

            const searchableText = [
                item.title,
                item.category,
                item.location,
                item.description,
                item.seller
            ].join(" ").toLowerCase();

            const matchesSearch =
                searchableText.includes(searchTerm);

            const matchesLocation =
                selectedLocation === "all" ||
                item.location.toLowerCase() === selectedLocation;

            return (
                matchesCategory &&
                matchesSearch &&
                matchesLocation
            );
        });

        if (sortValue === "price-low") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortValue === "price-high") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortValue === "oldest") {
            filtered.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );
        } else {
            filtered.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
        }

        return filtered;
    }

    // ========================================
    // DISPLAY LISTINGS
    // ========================================

    function renderListings() {
        const filteredListings = getFilteredListings();

        listingGrid.innerHTML = filteredListings
            .map(createListingCard)
            .join("");

        if (resultsCount) {
            resultsCount.textContent =
                filteredListings.length +
                (filteredListings.length === 1
                    ? " item found"
                    : " items found");
        }

        if (noResults) {
            noResults.style.display =
                filteredListings.length === 0 ? "block" : "none";
        }

        // Refresh the images available to the lightbox.
        visibleImages = filteredListings;
    }

    // ========================================
    // CATEGORY BUTTONS
    // ========================================

    categoryButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            activeCategory = button.dataset.category || "all";

            categoryButtons.forEach(function (categoryButton) {
                categoryButton.classList.remove("active");
                categoryButton.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            renderListings();
        });
    });

    // ========================================
    // SEARCH, LOCATION, SORT, RESET
    // ========================================

    if (searchInput) {
        searchInput.addEventListener("input", renderListings);
    }

    if (locationFilter) {
        locationFilter.addEventListener("change", renderListings);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", renderListings);
    }

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            if (searchInput) searchInput.value = "";
            if (locationFilter) locationFilter.value = "all";
            if (sortSelect) sortSelect.value = "newest";

            activeCategory = "all";

            categoryButtons.forEach(function (button) {
                const isAll = button.dataset.category === "all";

                button.classList.toggle("active", isAll);
                button.setAttribute(
                    "aria-pressed",
                    isAll ? "true" : "false"
                );
            });

            renderListings();
        });
    }

    // ========================================
    // VIEW DETAILS
    // ========================================

    listingGrid.addEventListener("click", function (event) {
        const detailsButton = event.target.closest(
            ".sales-details-button"
        );

        if (!detailsButton) return;

        const itemId = Number(detailsButton.dataset.detailsId);
        const item = listings.find(
            listing => listing.id === itemId
        );

        if (!item) return;

        const details = [
            item.title,
            "",
            "Price: " + formatPrice(item.price),
            "Category: " + item.category,
            "Location: " + item.location,
            "Seller: " + (item.seller || "Seller"),
            "",
            item.description
        ].join("\n");

        alert(details);
    });

    // ========================================
    // IMAGE LIGHTBOX
    // ========================================

    const lightbox = document.getElementById("salesLightbox");
    const lightboxImage = document.getElementById("salesLightboxImage");
    const lightboxCaption = document.getElementById("salesLightboxCaption");
    const lightboxClose = document.getElementById("salesLightboxClose");
    const lightboxPrev = document.getElementById("salesLightboxPrev");
    const lightboxNext = document.getElementById("salesLightboxNext");

    function showLightboxImage(index) {
        if (!lightbox || visibleImages.length === 0) return;

        currentLightboxIndex =
            (index + visibleImages.length) % visibleImages.length;

        const item = visibleImages[currentLightboxIndex];

        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxCaption.textContent =
            item.title + " — " + formatPrice(item.price) +
            " · " + item.location;

        if (lightboxPrev) {
            lightboxPrev.style.display =
                visibleImages.length > 1 ? "flex" : "none";
        }

        if (lightboxNext) {
            lightboxNext.style.display =
                visibleImages.length > 1 ? "flex" : "none";
        }
    }

    function openLightbox(itemId) {
        if (!lightbox) return;

        const index = visibleImages.findIndex(
            item => item.id === Number(itemId)
        );

        if (index < 0) return;

        showLightboxImage(index);

        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("sales-lightbox-open");

        if (lightboxClose) lightboxClose.focus();
    }

    function closeLightbox() {
        if (!lightbox) return;

        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("sales-lightbox-open");
    }

    function moveLightbox(direction) {
        if (visibleImages.length <= 1) return;

        showLightboxImage(currentLightboxIndex + direction);
    }

    listingGrid.addEventListener("click", function (event) {
        const image = event.target.closest("[data-image-id]");

        if (!image) return;

        openLightbox(image.dataset.imageId);
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", function () {
            moveLightbox(-1);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener("click", function () {
            moveLightbox(1);
        });
    }

    if (lightbox) {
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (!lightbox || !lightbox.classList.contains("open")) return;

        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowLeft") {
            moveLightbox(-1);
        } else if (event.key === "ArrowRight") {
            moveLightbox(1);
        }
    });

    // ========================================
    // FOOTER YEAR
    // ========================================

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ========================================
    // INITIAL DISPLAY
    // ========================================

    renderListings();
});
