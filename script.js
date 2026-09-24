/* =========================
   AIHUB SCRIPT
========================= */


/* ELEMENTS */

const searchInput =
    document.getElementById("searchInput");

const toolCards =
    document.querySelectorAll(".tool-card");

const filters =
    document.querySelectorAll(".filter");

const favoritesFilter =
    document.getElementById("favoritesFilter");

const noResults =
    document.getElementById("noResults");


/* =========================
   SETTINGS
========================= */

let activeFilter = "all";

let showFavorites = false;


/* =========================
   FAVORITES STORAGE
========================= */

let favorites =
    JSON.parse(
        localStorage.getItem("aihubFavorites")
    ) || [];


/* =========================
   UPDATE FAVORITE BUTTONS
========================= */

function updateFavorites() {

    document
        .querySelectorAll(".favorite")
        .forEach(function(button) {

            const toolName =
                button.getAttribute("data-tool");


            if (favorites.includes(toolName)) {

                button.textContent = "♥";

                button.classList.add("active");

            } else {

                button.textContent = "♡";

                button.classList.remove("active");

            }

        });

}


/* =========================
   FILTER TOOLS
========================= */

function filterTools() {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();


    let visibleTools = 0;


    toolCards.forEach(function(card) {

        const name =
            card.getAttribute("data-name")
            .toLowerCase();


        const category =
            card.getAttribute("data-category");


        const price =
            card.getAttribute("data-price");


        /* SEARCH */

        const searchMatch =
            name.includes(search);


        /* CATEGORY */

        let categoryMatch = true;


        if (
            activeFilter !== "all" &&
            activeFilter !== "free" &&
            activeFilter !== "paid"
        ) {

            categoryMatch =
                category === activeFilter;

        }


        /* FREE / PAID */

        let priceMatch = true;


        if (activeFilter === "free") {

            priceMatch =
                price === "free" ||
                price === "both";

        }


        if (activeFilter === "paid") {

            priceMatch =
                price === "paid" ||
                price === "both";

        }


        /* FAVORITES */

        const favoriteMatch =
            !showFavorites ||
            favorites.includes(
                card.getAttribute("data-name")
            );


        /* FINAL RESULT */

        if (
            searchMatch &&
            categoryMatch &&
            priceMatch &&
            favoriteMatch
        ) {

            card.style.display = "";

            visibleTools++;

        } else {

            card.style.display = "none";

        }

    });


    /* NO RESULTS */

    if (visibleTools === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    function() {

        filterTools();

    }
);


/* =========================
   FILTER BUTTONS
========================= */

filters.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {


            /* REMOVE ACTIVE */

            filters.forEach(function(btn) {

                btn.classList.remove("active");

            });


            /* ADD ACTIVE */

            button.classList.add("active");


            /* FAVORITES */

            if (
                button === favoritesFilter
            ) {

                showFavorites = true;

                activeFilter = "all";

            }


            /* OTHER FILTERS */

            else {

                showFavorites = false;

                activeFilter =
                    button.getAttribute(
                        "data-filter"
                    );

            }


            /* APPLY FILTER */

            filterTools();

        }
    );

});


/* =========================
   FAVORITE BUTTONS
========================= */

document.addEventListener(
    "click",
    function(event) {


        const button =
            event.target.closest(".favorite");


        if (!button) {

            return;

        }


        const toolName =
            button.getAttribute("data-tool");


        /* REMOVE FAVORITE */

        if (
            favorites.includes(toolName)
        ) {

            favorites =
                favorites.filter(
                    function(item) {

                        return item !== toolName;

                    }
                );

        }


        /* ADD FAVORITE */

        else {

            favorites.push(toolName);

        }


        /* SAVE */

        localStorage.setItem(
            "aihubFavorites",
            JSON.stringify(favorites)
        );


        /* UPDATE */

        updateFavorites();


        /* REFRESH FAVORITES FILTER */

        if (showFavorites) {

            filterTools();

        }

    }
);


/* =========================
   START WEBSITE
========================= */

updateFavorites();

filterTools();