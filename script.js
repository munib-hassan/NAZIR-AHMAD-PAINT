document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       MOBILE MENU
       ========================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
            });

        });

    }


    /* ==========================
       CURRENT YEAR
       ========================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ==========================
       LOCAL BUSINESS SEO
       ========================== */

    const businessData = {

        "@context": "https://schema.org",

        "@type": "PaintStore",

        "name": "Nazir Ahmad Paint",

        "alternateName": [
            "Nazir Ahmed Paint",
            "Nazir Paint",
            "Nazir Ahmad Paint Shahkam Chowk",
            "Nazir Paint Shahkam Chowk Lahore"
        ],

        "description":
            "Nazir Ahmad Paint at Shahkam Chowk Lahore. Paint products, Diamond, Brighto, Master and ICI brands, colour matching, home delivery, painter service and paint quotations.",

        "telephone": "+923225040002",

        "email": "haseebmanzoor001@gmail.com",

        "address": {

            "@type": "PostalAddress",

            "streetAddress":
                "Diamond Paints - Nazir Ahmad Paint, Shahkam Chowk, Defence Rd, Block B Mohlanwal",

            "addressLocality": "Lahore",

            "postalCode": "54810",

            "addressCountry": "PK"

        },

        "areaServed": [

            "Shahkam Chowk",

            "Mohlanwal",

            "Defence Road Lahore",

            "Lahore"

        ],

        "brand": [

            {
                "@type": "Brand",
                "name": "Diamond Paints"
            },

            {
                "@type": "Brand",
                "name": "Brighto Paints"
            },

            {
                "@type": "Brand",
                "name": "Master Paints"
            },

            {
                "@type": "Brand",
                "name": "ICI Paints"
            }

        ],

        "hasOfferCatalog": {

            "@type": "OfferCatalog",

            "name": "Paint Services",

            "itemListElement": [

                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Home Delivery"
                    }
                },

                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Colour Matching"
                    }
                },

                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Painter Provider"
                    }
                },

                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Paint Quotations"
                    }
                }

            ]

        },

        "url":
            "https://munib-hassan.github.io/NAZIR-AHMAD-PAINT/",

        "image":
            new URL(
                "storefront.jpg",
                window.location.href
            ).href

    };


    const schema =
        document.createElement("script");

    schema.type =
        "application/ld+json";

    schema.textContent =
        JSON.stringify(businessData);

    document.head.appendChild(schema);

});
