document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE MENU
       ================================ */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });


        // Menu link click hone par menu close
        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });

    }



    /* ================================
       CURRENT YEAR
       ================================ */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }



    /* ================================
       GOOGLE LOCAL BUSINESS SEO
       ================================

       Business Name:
       Nazir Ahmad Paint

       Location:
       Shahkam Chowk, Lahore

       NOTE:
       Structured data Google ko business
       samajhne mein help karta hai.

       Ye #1 ranking guarantee nahi karta.
    */

    const businessSchema = {

        "@context": "https://schema.org",

        "@type": "PaintStore",

        "name": "Nazir Ahmad Paint",

        "alternateName": [
            "Nazir Ahmed Paint",
            "Nazir Paint",
            "Nazir Ahmad Paint Shahkam Chowk"
        ],

        "description":
            "Nazir Ahmad Paint at Shahkam Chowk, Lahore. Diamond, Brighto, Master, ICI and other paint brands with colour matching, home delivery, painter service and quotations.",

        "telephone": "+923225040002",

        "email": "haseebmanzoor001@gmail.com",


        /* ================================
           BUSINESS ADDRESS
           ================================ */

        "address": {

            "@type": "PostalAddress",

            "streetAddress":
                "Diamond Paints - Nazir Ahmad Paint, Shahkam Chowk, Defence Rd, Block B Mohlanwal",

            "addressLocality": "Lahore",

            "postalCode": "54810",

            "addressCountry": "PK"

        },


        /* ================================
           SERVICE AREA
           ================================ */

        "areaServed": [

            "Shahkam Chowk",

            "Mohlanwal",

            "Defence Road Lahore",

            "Lahore"

        ],


        /* ================================
           AVAILABLE BRANDS
           ================================ */

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


        /* ================================
           SERVICES
           ================================ */

        "makesOffer": [

            {
                "@type": "Offer",

                "itemOffered": {

                    "@type": "Service",

                    "name": "Home Paint Delivery"

                }

            },


            {
                "@type": "Offer",

                "itemOffered": {

                    "@type": "Service",

                    "name": "Paint Colour Matching"

                }

            },


            {
                "@type": "Offer",

                "itemOffered": {

                    "@type": "Service",

                    "name": "Painter Provider Service"

                }

            },


            {
                "@type": "Offer",

                "itemOffered": {

                    "@type": "Service",

                    "name": "Paint Quotations"

                }

            }

        ],


        /* ================================
           SHOP IMAGE
           ================================ */

        "image":
            new URL(
                "storefront.jpg",
                window.location.href
            ).href,


        /* ================================
           WEBSITE URL
           ================================ */

        "url": window.location.href

    };



    /* ================================
       ADD SCHEMA TO PAGE
       ================================ */

    const schemaScript =
        document.createElement("script");

    schemaScript.type =
        "application/ld+json";

    schemaScript.textContent =
        JSON.stringify(businessSchema);

    document.head.appendChild(schemaScript);



    /* ================================
       EXTRA SEO META INFORMATION
       ================================ */

    function addMeta(name, content) {

        let meta =
            document.querySelector(
                `meta[name="${name}"]`
            );


        if (!meta) {

            meta =
                document.createElement("meta");

            meta.name = name;

            document.head.appendChild(meta);

        }


        meta.content = content;

    }



    addMeta(

        "description",

        "Nazir Ahmad Paint Shahkam Chowk Lahore. Nazir Paint and Nazir Ahmed Paint. Diamond, Brighto, Master and ICI paints, colour matching, home delivery, painter service and quotations."

    );



    addMeta(

        "keywords",

        "Nazir Ahmad Paint, Nazir Ahmed Paint, Nazir Paint, Nazir Paint Shahkam Chowk, Nazir Ahmad Paint Shahkam Chowk, paint shop Shahkam Chowk, paint shop Shahkam Chowk Lahore, paint shop in Lahore, Master Paint Shahkam Chowk, Diamond Paints Shahkam Chowk, Brighto Paints Lahore, ICI Paints Lahore, paint store Lahore"

    );



    addMeta(

        "robots",

        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

    );



    addMeta(

        "author",

        "Nazir Ahmad Paint"

    );



    /* ================================
       OPEN GRAPH
       ================================ */

    function addProperty(property, content) {

        let meta =
            document.querySelector(
                `meta[property="${property}"]`
            );


        if (!meta) {

            meta =
                document.createElement("meta");

            meta.setAttribute(
                "property",
                property
            );

            document.head.appendChild(meta);

        }


        meta.content = content;

    }



    addProperty(

        "og:title",

        "Nazir Ahmad Paint | Nazir Paint Shahkam Chowk Lahore"

    );


    addProperty(

        "og:description",

        "Nazir Ahmad Paint at Shahkam Chowk, Lahore. Diamond, Brighto, Master, ICI and other paint brands."

    );


    addProperty(

        "og:type",

        "website"

    );


    addProperty(

        "og:locale",

        "en_PK"

    );


    addProperty(

        "og:image",

        new URL(
            "storefront.jpg",
            window.location.href
        ).href

    );



    /* ================================
       CANONICAL URL
       ================================ */

    if (
        !document.querySelector(
            'link[rel="canonical"]'
        )
    ) {

        const canonical =
            document.createElement("link");

        canonical.rel =
            "canonical";

        canonical.href =
            window.location.href
                .split("#")[0];

        document.head.appendChild(
            canonical
        );

    }



    /* ================================
       LOCATION LABEL
       ================================ */

    const locationElements =
        document.querySelectorAll(
            '[data-location="shahkam-chowk"]'
        );


    locationElements.forEach(element => {

        element.setAttribute(

            "title",

            "Nazir Ahmad Paint - Nazir Paint Shahkam Chowk Lahore"

        );

    });


});