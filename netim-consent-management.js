(function(){

    const COOKIE_NAME = "acm_cookie";

    /* JSON used to generate the banner ( refer to ./template/banner.thml) and the controlPanel (refer to ./template/controlPanel.html) */
    /* Text modification sould be done here */
    const CONFIG = {
        "banner" : [{
            "name" : "Container",
            "type" : "div",
            "id" : "ACM-container",
            "children" : [{
                "name" : "Banner",
                "type" : "div",
                "id" : "ACM-banner",
                "children" : [{
                    "name" : "Header",
                    "type" : "div",
                    "id" : "ACM-header",
                    "class" : "ACM-header",
                    "children" : [{
                        "name" : "Header_content_01",
                        "type" : "div",
                        "id" : "ACM-header-content-01",
                        "children" : [{
                            "name" : "Button_refuse",
                            "type" : "span",
                            "id" : "ACM-button-refuse",
                            "text" : {
                                "fr" : "Continuer sans accepter",
                                "en" : "Continue without accepting"
                            }
                        }]
                    }, {
                        "name" : "Header_content_02",
                        "type" : "div",
                        "id" : "ACM-header-content-02",
                        "children" : [{
                            "name" : "Logo_img",
                            "type" : "img",
                            "alt" : "logo",
                            "src" : "https://www.netim.fr/images/design/logo.png"
                        }]
                    }]
                    
                },{
                    "name" : "Body",
                    "type" : "div",
                    "id" : "ACM-body",
                    "class" : "ACM-body",
                    "children" : [{
                        "name" : "Body_content_01",
                        "type" : "div",
                        "id" : "ACM-body-content-01",
                        "children" : [{
                            "name" : "title",
                            "type" : "p",
                            "text" : {
                                "fr" : "Nous respectons votre vie privée !",
                                "en" : "We respect your privacy !"
                            }
                        }]
                    },{
                        "name": "Body_content_02",
                        "type" : "div",
                        "id" : "ACM-body-content-02",
                        "children" : [{
                            "name" : "Paragraph_01",
                            "type" : "p",
                            "text" : {
                                "fr" : "Nous utilisons des cookies, y compris des cookies tiers, pour assurer le bon fonctionnement du site, mesurer notre audience, optimiser les performances du site et pour vous proposer des offres adaptées selon vos centres d'intérêt.",
                                "en" : "We use cookies, including third-party cookies to ensure the site is operating accurately, to measure our audiences, to optimize its performance and provide our customer with more relevant advertising."
                            }
                        },{
                            "name" : "Paragraph_02",
                            "type" : "p",
                            "text" : {
                                "fr" : "Pour plus d'informations, vous pouvez consulter notre <a href=\"\">politique de confidentialité</a>.",
                                "en" : "To learn more about cookies, you can visit our <a href=\"\">privacy policy</a>."
                            }
                        }]
                    }]
                }, {
                    "name" : "Footer",
                    "type" : "div",
                    "id" : "ACM-footer",
                    "class" : "ACM-footer",
                    "children" : [{
                        "name" : "Button_config",
                        "type" : "button",
                        "id" : "ACM-button-config",
                        "class" : "ACM-button secondary",
                        "text" : {
                            "fr" : "PARAMÉTRER →",
                            "en" : "CUSTOMIZE →"
                        }
                    },{
                        "name" : "Button_accept",
                        "type" : "button",
                        "id" : "ACM-button-accept",
                        "class" : "ACM-button primary",
                        "text" : {
                            "fr" : "ACCEPTER",
                            "en" : "ACCEPT"
                        }
                    }]
                }]
                
            }]
    }],
        "controlPanel" : [{
            "name" : "Container",
            "type" : "div",
            "id" : "ACM-container",
            "children" : [{
                "name" : "Banner",
                "type" : "div",
                "id" : "ACM-banner",
                "children" : [{
                    "name" : "Header",
                    "type" : "div",
                    "id" :"ACM-header",
                    "children" : [{
                        "name" : "Header_content_01",
                        "type" : "div",
                        "id" : "ACM-header-content-01",
                        "children" : [{
                            "name" : "Button_back",
                            "type" : "span",
                            "id" :"ACM-button-back",
                            "text" : {
                                "fr" : "Retour",
                                "en" : "Back"
                            }
                        }]
                    },{
                        "name" : "Header_content_02",
                        "type" : "div",
                        "id" : "ACM-header-content-02",
                        "children" : [{
                            "name" : "Logo_img",
                            "type" : "img",
                            "src" : "https://www.netim.fr/images/design/logo.png"
                        }]
                    }]
                }, {
                    "name" : "Body",
                    "type" : "div",
                    "id" : "ACM-body",
                    "children" : [{
                        "name" : "Body_content_01",
                        "id" : "ACM-body-content-01",
                        "type" : "div",
                        "children" : [{
                            "name" : "Categories",
                            "type" : "div",
                            "id" : "ACM-categories",
                            "children" : [{
                                "name" : "Category_01",
                                "type" : "div",
                                "id" : "ACM-category-01",
                                "class" : "ACM-category",
                                "children" : [{
                                    "name" : "Category_01_text",
                                    "type" : "div",
                                    "class" : "ACM-category-text",
                                    "children" : [{
                                        "name" : "Category_01_text_header",
                                        "type" : "p",
                                        "class" : "ACM-category-text-head",
                                        "text" : {
                                            "fr" : "<strong>Cookies nécessaires</strong>",
                                            "en" : "<strong>Necessary cookies</strong>"
                                        }
                                    }, {
                                        "name" : "Category_01_text_body",
                                        "type" : "p",
                                        "class" : "ACM-category-text-body",
                                        "text" : {
                                            "fr" : "Les cookies nécessaires contribuent à rendre le site utilisable en activant les fonctions de base comme la navigation de page et l’accès aux zones sécurisées du site.",
                                            "en" : "The necessary cookies help make the site usable by enabling basic functions such as page navigation and access to secure areas of the site."
                                        }
                                    }]
                                },{
                                    "name" : "Category_01_switch",
                                    "type" : "div",
                                    "class" : "ACM-category-switch",
                                    "children" : [{
                                        "name" : "Switch_01",
                                        "type" : "label",
                                        "class" : "ACM-switch",
                                        "children" : [{
                                            "type" : "input",
                                            "inputType" : "checkbox",
                                            "id" : "ACM-preference-input",
                                            "checked" : true,
                                            "disabled" : true
                                        },{
                                            "type" : "span",
                                            "class" : "ACM-slider ACM-round"
                                        }]
                                    }]
                                }]
                            },{
                                "type" : "hr"
                            },{
                                "name" : "Category_02",
                                "type" : "div",
                                "id" : "ACM-category-02",
                                "class" : "ACM-category",
                                "children" : [{
                                    "name" : "Category_02_text",
                                    "type" : "div",
                                    "class" : "ACM-category-text",
                                    "children" : [{
                                        "name" : "Category_02_text_header",
                                        "type" : "p",
                                        "class" : "ACM-category-text-head",
                                        "text" : {
                                            "fr" : "<strong>Cookies statistiques</strong>",
                                            "en" : "<strong>Statistical cookies</strong>"
                                        }
                                    }, {
                                        "name" : "Category_02_text_body",
                                        "type" : "p",
                                        "class" : "ACM-category-text-body",
                                        "text" : {
                                            "fr" : "Les cookies statistiques nous aident, par la collecte et la communication d’informations, à comprendre comment les visiteurs interagissent avec notre site web.",
                                            "en" : "Statistical cookies help us, by collecting and communicating information, understand how visitors interact with our website."
                                        }
                                    }]
                                },{
                                    "name" : "Category_02_switch",
                                    "type" : "div",
                                    "class" : "ACM-category-switch",
                                    "children" : [{
                                        "name" : "Switch_02",
                                        "type" : "label",
                                        "class" : "ACM-switch",
                                        "children" : [{
                                            "type" : "input",
                                            "id" : "ACM-statistics-input",
                                            "inputType" : "checkbox",
                                            "checked" : false,
                                            "disabled" : false
                                        },{
                                            "type" : "span",
                                            "class" : "ACM-slider ACM-round"
                                        }]
                                    }]
                                }]
                            },{
                                "type" : "hr"
                            },{
                                "name" : "Category_03",
                                "type" : "div",
                                "id" : "ACM-category-03",
                                "class" : "ACM-category",
                                "children" : [{
                                    "name" : "Category_03_text",
                                    "type" : "div",
                                    "class" : "ACM-category-text",
                                    "children" : [{
                                        "name" : "Category_03_text_header",
                                        "type" : "p",
                                        "class" : "ACM-category-text-head",
                                        "text" : {
                                            "fr" : "<strong>Cookies marketing</strong>",
                                            "en" : "<strong>Marketing cookies</strong>"
                                        }
                                    }, {
                                        "name" : "Category_03_text_body",
                                        "type" : "p",
                                        "class" : "ACM-category-text-body",
                                        "text" : {
                                            "fr" : "Les cookies marketing sont utilisés pour effectuer le suivi des visiteurs au travers du site. Le but est d’afficher des publicitées pertinentes et intéressantes pour les utilisateurs.",
                                            "en" : "Marketing cookies are used to track visitors through the site. The aim is to display advertisements that are relevant and interesting to users."
                                        }
                                    }]
                                },{
                                    "name" : "Category_03_switch",
                                    "type" : "div",
                                    "class" : "ACM-category-switch",
                                    "children" : [{
                                        "name" : "Switch_03",
                                        "type" : "label",
                                        "class" : "ACM-switch",
                                        "children" : [{
                                            "type" : "input",
                                            "id" : "ACM-marketing-input",
                                            "inputType" : "checkbox",
                                            "checked" : false,
                                            "disabled" : false
                                        },{
                                            "type" : "span",
                                            "class" : "ACM-slider ACM-round"
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }, {
                    "name" : "Footer",
                    "type" : "div",
                    "id" : "ACM-footer",
                    "children" : [{
                        "name" : "Button_valid",
                        "type" : "button",
                        "id" : "ACM-button-valid",
                        "class" : "ACM-button primary",
                        "text" : {
                            "fr" : "VALIDER",
                            "en" : "VALIDATE"
                        }
                    }]
                }]
            }]
        }]
    };

    /* Style modification should be done here */
    const STYLE = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        #ACM-container {
        
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        
            top: 0;
            left: 0;
            position: fixed;
            z-index: 1000000;
        
            font-family: "Poppins", sans-serif;
        
            color: #555555;
            font-size: 0.9em;
        
            width: 100%;
            height: 100%;
            opacity: 1;
        
            background-color: rgba(50,50,50,0.8);
        }
        #ACM-banner {
        
            padding: 2em 2em;
            box-sizing: border-box;
        
            top:50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: relative;
            text-align: center;
        
            max-width: 600px;
            max-height: 100vh;
        
            background-color: rgba(255,255,255,1);
            border-radius: 10px;
            
        }
        /* HEADER */
        
        #ACM-header-content-01{
            text-align: right;
            margin-bottom: 1.3em;
            color: #555555;
        }
        #ACM-header-content-01 span {
            cursor: pointer;
        }
        #ACM-header-content-02 img{
            padding: 0.5em;
            max-width: 300px;
        }
        
        /* BODY */
        
        #ACM-body {
            padding : 0.5em 0;
        }
        #ACM-body-content-01 {
            font-size: 1.2em;
            font-weight: bold;
        }
        #ACM-body-content-02 {
            font-size: 1em;
        }
        
        /* Control panel*/
        
        #ACM-categories {
            text-align: left;
            margin: 1em 0;
            border: solid 1px rgba(0,0,0,0.2);
            border-radius: 10px;
            position: relative;
            max-height: 50vh;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
        }
        
        #ACM-categories hr {
            background: rgba(0,0,0,0.2);
            height: 1px;
            margin: 10px;
            border : none;
        }
        
        .ACM-category {
            position: relative;
            display: flex;
            font-size: 0.8em;
            font-weight: normal;
        }
        .ACM-category > * {
            padding : 0.5em 1em;
        }
        .ACM-category-text-body {
            font-size: 1em;
        }
        
        /* Switch  */
        .ACM-switch {
        
            position: relative;
            top:50%;
            display: inline-block;
            width: 60px;
            height: 30px;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        
        /* Hide default HTML checkbox */
        .ACM-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        /* The slider */
        .ACM-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }
        
        .ACM-slider:before {
            position: absolute;
            content: "";
            height: 22px;
            width: 22px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }
        
        input:checked + .ACM-slider {
            background-color: #5281a6;
        }
        
        input:focus + .ACM-slider {
            box-shadow: 0 0 1px #5281a6;
        }
        
        input:checked + .ACM-slider:before {
            -webkit-transform: translateX(30px);
            -ms-transform: translateX(30px);
            transform: translateX(30px);
        }
        
        /* Rounded sliders */
        .ACM-slider.ACM-round {
            border-radius: 34px;
        }
        
        .ACM-slider.ACM-round:before {
            border-radius: 50%;
        }
        
        /* FOOTER */
        .ACM-footer {
            text-align: center;
        }
        
        .ACM-button {
            position: relative;
            padding: 1em 2em;
            margin: 1em;
            min-width: 200px;
        
            font-family: inherit;
            font-weight: bold;
            letter-spacing: 0.1em;
        
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        .ACM-button.primary {
            background: #5281a6;
            color: #FFFFFF;
            border: none;
        }
        .ACM-button.secondary {
            background: #FFFFFF;
            color: #5281a6;
            border: 1px solid #5281a6;
        }    
    `;
    class AcmBanner
    {
        lang = document.documentElement.lang;

        constructor (bannerType, content) {

            this.buildHtml(document.body, content[bannerType]);
            this.addStyle();
            this.setHandlers(bannerType);

        }
        
        buildHtml = (parent, elem) => {
            
            /* Loop for elements present in CONFIG and generate the HTML */
            for(let i = 0; i < elem.length; i++) {

                let e = elem[i];
                let html = document.createElement(e.type);
                
                if(e.id) { html.setAttribute("id", e.id); }
                if(e.class) { html.setAttribute("class", e.class); }
                if(e.src) { html.setAttribute("src", e.src); }
                if(e.alt) { html.setAttribute("alt", e.alt); }
                if(e.inputType) { html.setAttribute("type", e.inputType); }
                if(e.checked) { html.checked = true; }
                if(e.disabled) { html.disabled = true; }

                //Using innerHTML method only for <p> instead of innerText in order to keep <a> element in place
                if(e.text && e.type != "p") { html.innerText = e.text[this.lang]; }
                if(e.text && e.type == "p") { html.innerHTML = e.text[this.lang]; }

                parent.appendChild(html);
                
                //Checking if there is other tag within the current element. Relaunch the function if so.
                if(e.children) { this.buildHtml(html, e.children); }
            }

        }

        /* Add the stylesheet (STYLE) to the container */
        addStyle = () => {

            let css = STYLE,
                container = document.querySelector("#ACM-container"),
                style = document.createElement("style");

            if(!container) {
                return false;
            }

            style.setAttribute("type", "text/css");
            container.appendChild(style);

            style.appendChild(document.createTextNode(css));

        };

        /* Setting up the buttons */
        setHandlers = (bannerType) => {

            if(bannerType == "banner") {

                let btnRefuse = document.querySelector('#ACM-button-refuse');
                let btnAccept = document.querySelector('#ACM-button-accept');
                let btnConfig = document.querySelector('#ACM-button-config');

                btnRefuse.addEventListener('click', () => {
                    setAuthorizedCookies(true, false, false);
                    this.removeBanner(); 
                });
                btnAccept.addEventListener('click', () => {
                    setAuthorizedCookies(true, true, true);
                    this.removeBanner();
                });
                btnConfig.addEventListener('click', () => {
                    this.removeBanner();
                    let acmBanner = new AcmBanner("controlPanel", CONFIG);
                });

            } else if (bannerType == "controlPanel") {

                let btnBack = document.querySelector('#ACM-button-back');
                let btnValid = document.querySelector('#ACM-button-valid');

                btnBack.addEventListener('click', () => {
                    this.removeBanner();
                    let acmBanner = new AcmBanner("banner", CONFIG);
                });

                btnValid.addEventListener('click', () => {

                    let prefInput = document.querySelector('#ACM-preference-input').checked;
                    let statsInput = document.querySelector('#ACM-statistics-input').checked;
                    let markInput = document.querySelector('#ACM-marketing-input').checked;

                    setAuthorizedCookies(prefInput, statsInput, markInput);
                    this.removeBanner();
                });
            }
            

        };

        removeBanner = () => {

            let container = document.querySelector('#ACM-container');
            container.remove();
            
        };
    }

    let isCookie = (cookieName) => {
        let res;
        let cookieNameEq = cookieName + "=";
        let cookiesArray = document.cookie.split(";");

        for (let i = 0; i < cookiesArray.length; i++) {
            if (cookiesArray[i].includes(cookieNameEq)) {
                res = true;
            } else {
                res = false;
            }
        }
        return res;
    };

    let getCookieValue = (cookieName) => {
        let cookieValue;
        let cookieNameEq = cookieName + "=";
        let cookiesArray = document.cookie.split(";");

        for (let i = 0; i < cookiesArray.length; i++) {
            if (cookiesArray[i].includes(cookieNameEq)) {
                cookieValue = cookiesArray[i].substring(cookieNameEq.length);
            }
        }

        return cookieValue;
    };

    let getAuthorizedCookies = () => {
        let separator = "%ACM";
        let authorizedCookiesArray = getCookieValue(COOKIE_NAME).split(separator);
        let authorizedCookies = {};

        for(let i = 0; i < authorizedCookiesArray.length; i++) {
            let cookie = authorizedCookiesArray[i];
            if(cookie == "preference", "statistics", "marketing") {
                authorizedCookies[cookie] = true;
            }
        }

        updateDataLayer(authorizedCookies);
    };

    let setAuthorizedCookies = (pref, stats, mark) => {

        let cookieValue = "";
        let separator = "%ACM";
        let authorizedCookies = {
            preference : pref,
            statistics : stats,
            marketing : mark
        };

        if(authorizedCookies.preference) { cookieValue += separator + "preference";}
        if(authorizedCookies.statistics) { cookieValue += separator + "statistics";}
        if(authorizedCookies.marketing) { cookieValue += separator + "marketing";}
        
        let date = new Date();
        date.setTime(date.getTime() + (30*24*60*60*1000));
        let expires = "; expires=" + date.toUTCString();

        document.cookie = COOKIE_NAME + "=" + cookieValue + expires + " ; path=/";

        updateDataLayer(authorizedCookies);

    };

    let updateDataLayer = (authorizedCookies) => {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            "event" : "ACM_update"
        });
        
    };

    let init = () => {

        if (isCookie(COOKIE_NAME)) {

            getAuthorizedCookies(getCookieValue());

        } else {

            let acmBanner = new AcmBanner("banner", CONFIG);

        }

    };

    window.addEventListener("load", function () {

        setTimeout(init, 1000);

    });

})();