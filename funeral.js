 
/* =========================================
   YIWBASE FUNERAL & MEMORIALS
========================================= */

const funeralRecords = [
    {
        id: 1,
        type: "announcement",
        name: "Mrs Esther Akua Agyeibea",
        image: "images/ekua8.jpeg",
        brochure: "brochures/sample-funeral.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-11-14",
        dateLabel: "14 November 2026",
        // description: "Replace this sample with verified funeral information provided by the family.",
        funeralDate: "14 November 2026",
        venue: "To be confirmed by the family"
    },

     {
        id: 2,
        type: "announcement",
        name: "Mr Kwabena Ayensu Opare",
        image: "images/Abusua-wofa.png",
        brochure: "brochures/sample-funeral.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-11-14",
        dateLabel: "14 November 2026",
        // description: "Replace this sample with verified funeral information provided by the family.",
        funeralDate: "14 November 2026",
        venue: "To be confirmed by the family"
    },

     {
        id: 3,
        type: "announcement",
        name: "Fredric Asare Alexander",
        image: "images/Asare.jpeg",
        brochure: "brochures/sample-funeral.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-11-14",
        dateLabel: "14 November 2026",
        // description: "Replace this sample with verified funeral information provided by the family.",
        funeralDate: "14 November 2026",
        venue: "To be confirmed by the family"
    },

      {
        id: 4,
        type: "announcement",
        name: "Peace Adu-Brafo",
        image: "images/BRafo.jpeg",
        brochure: "brochures/sample-funeral.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-11-14",
        dateLabel: "14 November 2026",
        // description: "Replace this sample with verified funeral information provided by the family.",
        funeralDate: "14 November 2026",
        venue: "To be confirmed by the family"
    },

      {
        id: 5,
        type: "announcement",
        name: "Mrs Esther Akua Agyeibea",
        image: "images/ekua8.jpeg",
        brochure: "brochures/sample-funeral.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-11-14",
        dateLabel: "14 November 2026",
        // description: "Replace this sample with verified funeral information provided by the family.",
        funeralDate: "14 November 2026",
        venue: "To be confirmed by the family"
    },
    {
        id: 2,
        type: "memorial",
        name: "Mrs Esther Agyeibea",
        image: "images/estherAkua.jpeg",
        brochure: "brochures/cherished-life.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-08-10",
        dateLabel: "Remembering a cherished life",
        // description: "A memorial tribute celebrating a life, family, achievements, photographs and precious memories.",
        funeralDate: "",
        venue: ""
    },

      {
        id: 2,
        type: "memorial",
        name: "Mr Kwabena Ayensu Opare",
        image: "images/ayensu2.jpeg",
        brochure: "brochures/cherished-life.pdf",
        location: "Amanokrom, Akuapem",
        year: 2026,
        date: "2026-08-10",
        dateLabel: "Remembering a cherished life",
        // description: "A memorial tribute celebrating a life, family, achievements, photographs and precious memories.",
        funeralDate: "",
        venue: ""
    },
    {
        id: 3,
        type: "past",
        name: "Mrs Irene Chainortey",
        image: "images/Irene.jpeg",
        brochure: "brochures/a-life-remembered.pdf",
        location: "Amanokrom, Akuapem",
        year: 2024,
        date: "2024-06-15",
        dateLabel: "Memorial archive · 2024",
        // description: "A past memorial preserved so family members and the community can revisit the memories and funeral records.",
        funeralDate: "15 June 2024",
        venue: "Historical record"
    },

    {
        id: 3,
        type: "past",
        name: "Stephen Yeboah Fianko",
        image: "images/sigri.png",
        brochure: "brochures/a-life-remembered.pdf",
        location: "Amanokrom, Akuapem",
        year: 2024,
        date: "2024-06-15",
        dateLabel: "Memorial archive · 2024",
        // description: "A past memorial preserved so family members and the community can revisit the memories and funeral records.",
        funeralDate: "15 June 2024",
        venue: "Historical record"
    }


    
];


/* =========================================
   HELPER FUNCTIONS
========================================= */

function funeralEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function funeralTypeLabel(type) {
    const labels = {
        announcement: "Funeral Announcement",
        memorial: "Memorial Tribute",
        past: "Past Memorial"
    };

    return labels[type] || "Memorial";
}


/* =========================================
   BROCHURE BUTTONS
========================================= */

function funeralBrochureButtons(record) {
    if (!record.brochure) return "";

    const path = funeralEscape(record.brochure);
    const name = funeralEscape(record.name);

    return `
        <div class="funeral-brochure-actions">
            <a
                class="funeral-card-button funeral-card-brochure"
                href="${path}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View brochure for ${name}">
                <i class="fa-solid fa-book-open"></i>
                View Brochure
            </a>

            <a
                class="funeral-card-button funeral-card-download"
                href="${path}"
                download
                aria-label="Download brochure for ${name}">
                <i class="fa-solid fa-download"></i>
                Download PDF
            </a>
        </div>
    `;
}


/* =========================================
   CREATE FUNERAL CARDS
========================================= */

function createFuneralCard(record) {
    const image = funeralEscape(
        record.image || "images/memorial-1.jpg"
    );

    return `
        <article class="funeral-card">

            <div class="funeral-card-image">
                <img
                    src="${image}"
                    alt="${funeralEscape(record.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='images/memorial-1.jpg';">

                <span class="funeral-card-badge">
                    ${funeralEscape(funeralTypeLabel(record.type))}
                </span>
            </div>

            <div class="funeral-card-content">

                <p class="funeral-card-location">
                    <i class="fa-solid fa-location-dot"></i>
                    ${funeralEscape(record.location)}
                </p>

                <h3>${funeralEscape(record.name)}</h3>

                <p class="funeral-card-date">
                    <i class="fa-regular fa-calendar"></i>
                    ${funeralEscape(record.dateLabel)}
                </p>

                <p class="funeral-card-description">
                    ${funeralEscape(record.description)}
                </p>

                <div class="funeral-card-actions">
                    <button
                        type="button"
                        class="funeral-card-button funeral-card-view"
                        data-record-id="${record.id}">
                        <i class="fa-solid fa-eye"></i>
                        View Details
                    </button>
                </div>

                ${funeralBrochureButtons(record)}

            </div>
        </article>
    `;
}


/* =========================================
   SEARCH AND FILTER
========================================= */

function getFuneralFilteredRecords() {
    const searchInput = document.getElementById("funeralSearch");
    const typeFilter = document.getElementById("funeralTypeFilter");
    const yearFilter = document.getElementById("funeralYearFilter");

    const term = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const selectedType = typeFilter ? typeFilter.value : "all";
    const selectedYear = yearFilter ? yearFilter.value : "all";

    return funeralRecords.filter(record => {
        const searchableText = [
            record.name,
            record.location,
            record.description,
            record.dateLabel,
            record.funeralDate,
            record.venue,
            record.year
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(term);
        const matchesType =
            selectedType === "all" || record.type === selectedType;

        const matchesYear =
            selectedYear === "all" ||
            String(record.year) === String(selectedYear);

        return matchesSearch && matchesType && matchesYear;
    });
}


/* =========================================
   DISPLAY RECORDS
========================================= */

function renderFuneralRecords() {
    const allRecords = getFuneralFilteredRecords();

    const groups = {
        announcement: {
            grid: "funeralAnnouncementGrid",
            count: "funeralAnnouncementCount"
        },
        memorial: {
            grid: "funeralMemorialGrid",
            count: "funeralMemorialCount"
        },
        past: {
            grid: "funeralPastGrid",
            count: "funeralPastCount"
        }
    };

    Object.entries(groups).forEach(([type, ids]) => {
        const records = allRecords.filter(
            record => record.type === type
        );

        const grid = document.getElementById(ids.grid);
        const count = document.getElementById(ids.count);

        if (grid) {
            grid.innerHTML = records.map(createFuneralCard).join("");
        }

        if (count) {
            count.textContent = records.length;
        }
    });

    const noResults = document.getElementById("funeralNoResults");

    if (noResults) {
        noResults.hidden = allRecords.length > 0;
    }
}


/* =========================================
   YEAR FILTER
========================================= */

function populateFuneralYears() {
    const select = document.getElementById("funeralYearFilter");

    if (!select) return;

    const previousValue = select.value;

    const years = [...new Set(
        funeralRecords.map(record => String(record.year))
    )].sort((a, b) => Number(b) - Number(a));

    select.innerHTML = `
        <option value="all">All years</option>
        ${years.map(year => `
            <option value="${funeralEscape(year)}">
                ${funeralEscape(year)}
            </option>
        `).join("")}
    `;

    if (years.includes(previousValue)) {
        select.value = previousValue;
    }
}


/* =========================================
   OPEN DETAILS MODAL
========================================= */

function openFuneralModal(recordId) {
    const record = funeralRecords.find(
        item => String(item.id) === String(recordId)
    );

    const modal = document.getElementById("funeralModal");

    if (!record || !modal) {
        console.error("Cannot open funeral details.", {
            recordId,
            recordFound: Boolean(record),
            modalFound: Boolean(modal)
        });
        return;
    }

    const image = document.getElementById("funeralModalImage");
    const name = document.getElementById("funeralModalName");
    const type = document.getElementById("funeralModalType");
    const meta = document.getElementById("funeralModalMeta");
    const description = document.getElementById("funeralModalDescription");
    const events = document.getElementById("funeralModalEvents");

    if (image) {
        image.src = record.image || "images/memorial-1.jpg";
        image.alt = record.name || "Memorial photograph";

        image.onerror = function () {
            this.onerror = null;
            this.src = "images/memorial-1.jpg";
        };
    }

    if (name) {
        name.textContent = record.name || "";
    }

    if (type) {
        type.textContent = funeralTypeLabel(record.type);
    }

    if (meta) {
        meta.textContent = [
            record.location,
            record.dateLabel
        ].filter(Boolean).join(" · ");
    }

    if (description) {
        description.textContent = record.description || "";
    }

    if (events) {
        events.replaceChildren();

        const details = [
            ["Funeral date", record.funeralDate],
            ["Venue", record.venue]
        ];

        details.forEach(([label, value]) => {
            if (!value) return;

            const paragraph = document.createElement("p");
            const strong = document.createElement("strong");

            strong.textContent = label + ": ";
            paragraph.appendChild(strong);
            paragraph.appendChild(
                document.createTextNode(value)
            );

            events.appendChild(paragraph);
        });

        if (record.brochure) {
            const brochureLink = document.createElement("a");

            brochureLink.href = record.brochure;
            brochureLink.target = "_blank";
            brochureLink.rel = "noopener noreferrer";
            brochureLink.className =
                "funeral-card-button funeral-card-brochure";
            brochureLink.innerHTML =
                '<i class="fa-solid fa-book-open"></i> View Brochure';

            events.appendChild(brochureLink);
        }
    }

    /* IMPORTANT: use "open" to match funeral.css */
    modal.hidden = false;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("funeral-modal-open");
}


/* =========================================
   CLOSE DETAILS MODAL
========================================= */

function closeFuneralModal() {
    const modal = document.getElementById("funeralModal");

    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modal.hidden = true;

    document.body.classList.remove("funeral-modal-open");
}


/* =========================================
   INITIALISE PAGE
========================================= */

function initialiseFuneralPage() {
    populateFuneralYears();
    renderFuneralRecords();

    const searchInput = document.getElementById("funeralSearch");
    const searchButton = document.getElementById("funeralSearchButton");
    const typeFilter = document.getElementById("funeralTypeFilter");
    const yearFilter = document.getElementById("funeralYearFilter");
    const resetButton = document.getElementById("funeralReset");
    const noResultsReset = document.getElementById("funeralNoResultsReset");

    if (searchInput) {
        searchInput.addEventListener("input", renderFuneralRecords);
    }

    if (searchButton) {
        searchButton.addEventListener("click", renderFuneralRecords);
    }

    if (typeFilter) {
        typeFilter.addEventListener("change", renderFuneralRecords);
    }

    if (yearFilter) {
        yearFilter.addEventListener("change", renderFuneralRecords);
    }

    function resetFilters() {
        if (searchInput) searchInput.value = "";
        if (typeFilter) typeFilter.value = "all";
        if (yearFilter) yearFilter.value = "all";

        renderFuneralRecords();
    }

    if (resetButton) {
        resetButton.addEventListener("click", resetFilters);
    }

    if (noResultsReset) {
        noResultsReset.addEventListener("click", resetFilters);
    }

    /* =====================================
       VIEW DETAILS AND CLOSE BUTTONS
    ===================================== */

    document.addEventListener("click", function (event) {
        const detailsButton = event.target.closest(
            "button[data-record-id]"
        );

        if (detailsButton) {
            event.preventDefault();
            openFuneralModal(detailsButton.dataset.recordId);
            return;
        }

        if (
            event.target.closest("#funeralModalClose") ||
            event.target.closest("[data-funeral-close]")
        ) {
            event.preventDefault();
            closeFuneralModal();
            return;
        }

        const modal = document.getElementById("funeralModal");

        if (modal && event.target === modal) {
            closeFuneralModal();
        }
    });

    /* Close with Escape */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeFuneralModal();
        }
    });

    /* Footer year */
    const footerYear = document.getElementById("funeralYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    /* =====================================
       MOBILE NAVIGATION
       CSS uses .open, so JavaScript uses .open
    ===================================== */

    const menuToggle = document.getElementById("funeralMenuToggle");
    const nav = document.getElementById("funeralNav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.className = isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";
            }
        });
    }
}


/* =========================================
   START PAGE
========================================= */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initialiseFuneralPage,
        { once: true }
    );
} else {
    initialiseFuneralPage();
}
 