const webSafeFonts = [
  { value: "Helvetica", label: "Helvetica (sans-serif)" },
  { value: "Arial", label: "Arial (sans-serif)" },
  { value: "Arial Black", label: "Arial Black(sans-serif)" },
  { value: "Verdana", label: "Verdana (sans-serif)" },
  { value: "Tahoma", label: "Tahoma (sans-serif)" },
  { value: "Trebuchet MS", label: "Trebuchet MS (sans-serif)" },
  { value: "Impact", label: "Impact (sans-serif)" },
  { value: "Gill Sans", label: "Gill Sans (sans-serif)" },
  { value: "Times New Roman", label: "Times New Roman (serif)" },
  { value: "Georgia", label: "Georgia (serif)" },
  { value: "Palatino", label: "Palatino (serif)" },
  { value: "Baskerville", label: "Baskerville (serif)" },
  { value: "Andale Mono", label: "Andale Mono (monospace)" },
  { value: "Courier", label: "Courier (monospace)" },
  { value: "Lucida", label: "Lucida (monospace)" },
  { value: "Monaco", label: "Monaco (monospace)" },
  { value: "Bradley Hand", label: "Bradley Hand (cursive)" },
  { value: "Brush Script MT", label: "Brush Script MT (cursive)" },
  { value: "Comic Sans MS", label: "Comic Sans MS (cursive)" },
  { value: "Luminari", label: "Luminari (fantasy)" },
  { value: "Montserrat", label: "Montserrat (sans-serif)" },
  { value: "Garamond", label: "Garamond (serif)" },
  { value: "Optima", label: "Optima (sans-serif)" },
  { value: "BlinkMacSystemFont", label: "BlinkMacSystemFont (sans-serif)" },
]

const formAlignLeft = ".bg-light>div{left: 220px;position:fixed;}";
const formAlignRight = ".bg-light>div{right: 220px;position:fixed;}"
const formAlignCenter = "";


const divFormPositions = [
  { value: formAlignLeft, label: "Left Aligned" },
  { value: "", label: "Centered" },
  { value: formAlignRight, label: "Right Aligned" },
]


const exampleThemes = [
  {
    "label": "Ping Identity",
    "value": "pingidentity",
    "company-logo-img-url": "https://assets.pingone.com/ux/ui-library/5.0.2/images/logo-pingidentity.png",
    "company-logo-max-height": "65",
    "card-background-color": "255, 255, 255",
    "background-image-url": "",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "61, 69, 77",
    "text-color-error": "163, 19, 0",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "39, 123, 165",
    "activity-indicator-color": "68, 98, 237",
    "form-position": formAlignCenter
  },
  {
    "label": "BX Airlines",
    "value": "bx-airlines",
    "company-logo-img-url": "https://demo.bxindustry.org/airlines/auth-dialog-logo.png",
    "company-logo-max-height": "35",
    "background-image-url": "https://demo.bxindustry.org/airlines/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "231, 113, 120",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "200, 61, 125",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Company",
    "value": "bx-company",
    "company-logo-img-url": "https://demo.bxindustry.org/company/auth-dialog-logo.png",
    "company-logo-max-height": "35",
    "background-image-url": "https://demo.bxindustry.org/company/banner.png",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "231, 113, 120",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "0,42,236",
    "activity-indicator-color": "152,77,247",
    "form-position": formAlignCenter
  },
  {
    "label": "BX Eats",
    "value": "bx-eats",
    "company-logo-img-url": "https://demo.bxindustry.org/eats/auth-dialog-logo.png",
    "company-logo-max-height": "35",
    "background-image-url": "https://demo.bxindustry.org/eats/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 97",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "51,182,103",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignCenter
  },
  {
    "label": "BX Education",
    "value": "bx-education",
    "company-logo-img-url": "https://demo.bxindustry.org/education/auth-dialog-logo.png",
    "company-logo-max-height": "35",
    "background-image-url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 97",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "76, 107, 247",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignRight
  },
  {
    "label": "BX Finance",
    "value": "bx-finance",
    "company-logo-img-url": "https://demo.bxindustry.org/finance/logo.svg",
    "company-logo-max-height": "45",
    "background-image-url": "https://cdn.glitch.global/f3c6cad2-28d5-40dc-bf7f-37a8538c380f/finance.png?v=1687952473955",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 97",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "74, 186, 163",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Government",
    "value": "bx-government",
    "company-logo-img-url": "https://demo.bxindustry.org/government/auth-dialog-logo.png",
    "company-logo-max-height": "40",
    "background-image-url": "https://demo.bxindustry.org/government/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "33, 37, 41",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "207, 140, 26",
    "activity-indicator-color": "33, 37, 41",
    "form-position": formAlignCenter
  },
  {
    "label": "BX Health",
    "value": "bx-health",
    "company-logo-img-url": "https://demo.bxindustry.org/health/logo.svg",
    "company-logo-max-height": "40",
    "background-image-url": "https://demo.bxindustry.org/health/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.9",
    "text-color-primary": "33, 37, 41",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "51, 40, 66",
    "activity-indicator-color": "223,95,79",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Hotels",
    "value": "bx-hotels",
    "company-logo-img-url": "https://demo.bxindustry.org/hotels/auth-dialog-logo.png",
    "company-logo-max-height": "60",
    "background-image-url": "https://demo.bxindustry.org/hotels/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Garamond",
    "body-font-size": "1.0",
    "text-color-primary": "33,37,41",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "180, 151, 49",
    "activity-indicator-color": "9, 21, 43",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Insurance",
    "value": "bx-insurance",
    "company-logo-img-url": "https://demo.bxindustry.org/insurance/auth-dialog-logo.png",
    "company-logo-max-height": "35",
    "background-image-url": "https://demo.bxindustry.org/insurance/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": ".9",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "243, 89, 17",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Manufacturing",
    "value": "bx-manufacturing",
    "company-logo-img-url": "https://demo.bxindustry.org/manufacturing/auth-dialog-logo.png",
    "company-logo-max-height": "40",
    "background-image-url": "https://demo.bxindustry.org/manufacturing/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "1.0",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "24, 34, 55",
    "button-primary-background-color": "241 ,203, 0",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignRight
  },
  {
    "label": "BX Pharmacy",
    "value": "bx-pharmacy",
    "company-logo-img-url": "https://demo.bxindustry.org/pharmacy/auth-dialog-logo.png",
    "company-logo-max-height": "40",
    "background-image-url": "https://demo.bxindustry.org/pharmacy/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "1.0",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "254, 254, 254",
    "button-primary-background-color": "38,189,144",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Realty",
    "value": "bx-realty",
    "company-logo-img-url": "https://demo.bxindustry.org/realty/auth-dialog-logo.png",
    "company-logo-max-height": "30",
    "background-image-url": "https://demo.bxindustry.org/realty/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "1.0",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "254, 254, 254",
    "button-primary-background-color": "31, 153, 211",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignLeft
  },
  {
    "label": "BX Retail",
    "value": "bx-retail",
    "company-logo-img-url": "https://demo.bxindustry.org/retail/auth-dialog-logo.svg",
    "company-logo-max-height": "30",
    "background-image-url": "https://demo.bxindustry.org/retail/home-hero-office-bg.png",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "1.0",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "254, 254, 254",
    "button-primary-background-color": "31, 153, 211",
    "activity-indicator-color": "248,199,70",
    "form-position": formAlignCenter
  },
  {
    "label": "BX Sports",
    "value": "bx-sports",
    "company-logo-img-url": "https://demo.bxindustry.org/sports/auth-dialog-logo.png",
    "company-logo-max-height": "30",
    "background-image-url": "https://demo.bxindustry.org/sports/banner.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "1.0",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "254, 254, 254",
    "button-primary-background-color": "238,39,27",
    "activity-indicator-color": "24, 34, 55",
    "form-position": formAlignCenter
  },
  {
    "label": "BX Volunteer",
    "value": "bx-volunteer",
    "company-logo-img-url": "https://demo.bxindustry.org/volunteer/auth-dialog-logo.png",
    "company-logo-max-height": "50",
    "background-image-url": "https://cdn.glitch.global/f3c6cad2-28d5-40dc-bf7f-37a8538c380f/bx-volunteer.png?v=1687812400334",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Garamond",
    "body-font-size": "1.1",
    "text-color-primary": "24, 34, 55",
    "text-color-error": "226, 91, 101",
    "button-primary-text-color": "254, 254, 254",
    "button-primary-background-color": "60, 113, 87",
    "activity-indicator-color": "147,184,164",
    "form-position": formAlignLeft
  },
  {
    "label": "Amazon",
    "value": "amazon",
    "company-logo-img-url": "https://cdn.glitch.global/f3c6cad2-28d5-40dc-bf7f-37a8538c380f/amazon-logo.png?v=1685554658395",
    "company-logo-max-height": "80",
    "background-image-url": "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "BlinkMacSystemFont",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "200, 33, 17",
    "button-primary-text-color": "17, 17, 17",
    "button-primary-background-color": "241, 197, 90",
    "activity-indicator-color": "236,142,15",
    "form-position": formAlignCenter
  },
  {
    "label": "Boeing",
    "value": "boeing",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/boeing-logo.png?v=1686247576255",
    "company-logo-max-height": "40",
    "background-image-url": "https://images.unsplash.com/photo-1660682349275-07d8f8439e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "card-background-color": "241, 242, 242",
    "body-font-family": "Helvetica",
    "body-font-size": "0.85",
    "text-color-primary": "95, 107, 114",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "1, 151, 220",
    "activity-indicator-color": "57, 73, 87",
    "form-position": formAlignRight
  },
  {
    "label": "Dixie Lee",
    "value": "dixielee",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/dixie-lee-logo.png?v=1686315429808",
    "company-logo-max-height": "120",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/dixie-lee-background.png?v=1686315293072",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Palatino",
    "body-font-size": "1",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "200, 33, 17",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "238, 43, 46",
    "activity-indicator-color": "236,142,15",
    "form-position": formAlignCenter
  },
  {
    "label": "FedEx",
    "value": "fedex",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/fedex-logo.png?v=1686225320638",
    "company-logo-max-height": "100",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/fedex-background.png?v=1686225995437",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Arial Black",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "70, 40, 150",
    "activity-indicator-color": "255, 122, 9",
    "form-position": formAlignLeft
  },
  {
    "label": "McDonalds",
    "value": "mcdonalds",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/mcdonalds.png?v=1686134816028",
    "company-logo-max-height": "100",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/mcdonalds-background.jpeg?v=1686144835104",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Trebuchet MS",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "183, 1, 9",
    "activity-indicator-color": "255, 183, 0",
    "form-position": formAlignLeft
  },
  {
    "label": "Nova Scotia Tourism",
    "value": "nstourism",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/ns-tourism-logo.png?v=1686247094224",
    "company-logo-max-height": "60",
    "background-image-url": "https://d3qvqlc701gzhm.cloudfront.net/full/73c0591c106bf913e535e6322effbe2118b52960c480b3fd7f7fd4b57e5f98e4.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Verdana",
    "body-font-size": "0.85",
    "text-color-primary": "64, 64, 64",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "0, 108, 183",
    "activity-indicator-color": "255, 194, 33",
    "form-position": formAlignCenter
  },
  {
    "label": "Serengeti Quest",
    "value": "serengetiquest",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/serengeti-quest-logo.png?v=1687518091134",
    "company-logo-max-height": "130",
    "background-image-url": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Verdana",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "10, 77, 21",
    "activity-indicator-color": "249, 165, 38",
    "form-position": formAlignRight
  },
  {
    "label": "Starbucks",
    "value": "starbucks",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/starbucks-logo.png?v=1686247280375",
    "company-logo-max-height": "100",
    "background-image-url": "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Helvetica",
    "body-font-size": "0.85",
    "text-color-primary": "63, 63, 63",
    "text-color-error": "214, 44, 31",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "0, 130, 72",
    "activity-indicator-color": "234, 199, 133",
    "form-position": formAlignCenter
  },
  {
    "label": "Tesla",
    "value": "tesla",
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/tesla-logo.png?v=1686166094567",
    "company-logo-max-height": "30",
    "background-image-url": "https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Arial",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "62, 106, 255",
    "activity-indicator-color": "255, 194, 33",
    "form-position": formAlignRight
  },
]

const baseCSS = `
/********************************************************
* CLASSES BELOW ARE DERIVED FROM VALUES ABOVE
* DO NOT CHANGE UNLESS YOU HAVE CSS 'SKILLZ' :)
*********************************************************/

/*  COMPANY LOGO  */
.companyLogo {
  content: var(--company-logo-img-url) !important;
  height: var(--company-logo-max-height) !important;
  width: auto !important;
}

/*  BACKGROUND IMAGE  */
div.bg-light {
  background-image:       var(--background-image-url);
  background-size:        cover;
  background-repeat:      no-repeat;
}

/*  BODY FONT & COLOR  */
.card-body {
  /*  font family */
  font-family: var(--body-font-family) !important;
  /*  font size */
  font-size: var(--body-font-size) !important;
  /*  font color */
  color: rgb(var(--text-color-primary)) !important;
  /*  background color */
  background-color: var(--card-background-color) !important;
}

/*  MUTED PARAGRAPH  */
p.text-muted {
  color: rgba(var(--text-color-primary), var(--text-color-muted-apha)) !important;
}

/*  ERROR MESSAGE PARAGRAPH  */
.card .text-danger {
  color: var(--text-color-error) !important;
}

/*  FORM CONTROL FONT COLOR  */
.form-control,
.form-control:focus {
  color: var(--text-color-primary) !important;
}

/*  FORM CONTROL PLACEHOLDER FONT COLOR  */
.form-floating input+label {
  color: rgba(var(--text-color-primary), var(--text-color-muted-apha)) !important;
}

/*  FORM CONTROL HIGHLIGHT  */
.form-control:focus {
  border-color: rgba(var(--button-primary-background-color), .5) !important;
  box-shadow: 0 0 0 0.25rem rgba(var(--button-primary-background-color), 0.25) !important;
}

/*  PRIMARY BUTTON  */
.btn-primary {
  /*  font color  */
  --bs-btn-color: var(--button-primary-text-color) !important;
  /*  font color when hovering  */
  --bs-btn-hover-color: var(--button-primary-text-color) !important;
  /*  border color  */
  --bs-btn-border-color: var(--button-primary-background-color) !important;
  /*  background color  */
  --bs-btn-bg: rgb(var(--button-primary-background-color)) !important;
  /*  background color when hovering  */
  --bs-btn-hover-bg: rgba(var(--button-primary-background-color), var(--button-hover-alpha)) !important;
  /*  background color when active  */
  --bs-btn-active-bg: rgba(var(--button-primary-background-color), var(--button-active-alpha)) !important;
  /*  background color when disabled  */
  --bs-btn-disabled-bg: rgba(var(--button-primary-background-color), var(--button-disabled-alpha)) !important;
  background-color: rgb(var(--button-primary-background-color)) !important;
  border-color: rgb(var(--button-primary-background-color)) !important;
  color: var(--button-primary-text-color) !important;
}


.btn-primary:hover {
  background-color: rgba(var(--button-primary-background-color), var(--button-hover-alpha)) !important;
  border-color: rgba(var(--button-primary-background-color), var(--button-hover-alpha)) !important;

  color: var(--button-primary-text-color) !important;
}

/*  LINK BUTTON  */
.btn-link {
  /*  button font color  */
  --bs-btn-color: rgb(var(--button-primary-background-color)) !important;
  /*  button font color when active  */
  --bs-btn-active-color: rgba(var(--button-primary-background-color), var(--button-active-alpha)) !important;
  /*  button font color when hovering  */
  --bs-btn-hover-color: rgba(var(--button-primary-background-color), var(--button-hover-alpha)) !important;
  /*  button font color when disabled  */
  --bs-btn-disabled-color: rgba(var(--button-primary-background-color), var(--button-disabled-alpha)) !important;
  color: rgb(var(--button-primary-background-color)) !important;
}

/*  POLLING INDICATORS  */
.css-11k6vsm,
.css-17zi2ag,
.css-139roxj {
  width: 20px;
  height: 20px;
  animation-duration: 0.75s;
  /*  circle background color  */
  background-color: var(--activity-indicator-color) !important;
}

/*  BUTTON ACTIVITY INDICATOR  */
.css-sw2ho0 {
  /*  spinning circle color  */
  --primary-color: var(--activity-indicator-color) !important;
}
`