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
  { value: "Optima", label: "Optima (sans-serif)" }
]

const exampleThemes = [
  {
    "label": "Ping Identity",
    "value": 1,
    "company-logo-img-url": "https://assets.pingone.com/ux/ui-library/5.0.2/images/logo-pingidentity.png",
    "company-logo-height": "65",
    "card-background-color": "255, 255, 255",
    "background-image-url": "",
    "body-font-family": "Montserrat",
    "body-font-size": "0.85",
    "text-color-primary": "61, 69, 77",
    "text-color-error": "163, 19, 0",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "39, 123, 165",
    "activity-indicator-color": "68, 98, 237"
  },
  {
    "label": "Amazon",
    "value": 2,
    "company-logo-img-url": "https://cdn.glitch.global/f3c6cad2-28d5-40dc-bf7f-37a8538c380f/amazon-logo.png?v=1685554658395",
    "company-logo-height": "80",
    "background-image-url": "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Montserrat",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "200, 33, 17",
    "button-primary-text-color": "17, 17, 17",
    "button-primary-background-color": "241, 197, 90",
    "activity-indicator-color": "236,142,15"
  },
  {
    "label": "Boeing",
    "value": 3,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/boeing-logo.png?v=1686247576255",
    "company-logo-height": "40",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/boeing-background.jpg?v=1686135074897",
    "card-background-color": "241, 242, 242",
    "body-font-family": "Helvetica",
    "body-font-size": "0.85",
    "text-color-primary": "95, 107, 114",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "1, 151, 220",
    "activity-indicator-color": "57, 73, 87"
  },
  {
    "label": "Dixie Lee",
    "value": 4,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/dixie-lee-logo.png?v=1686315429808",
    "company-logo-height": "120",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/dixie-lee-background.png?v=1686315293072",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Palatino",
    "body-font-size": "1",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "200, 33, 17",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "238, 43, 46",
    "activity-indicator-color": "236,142,15"
  },
  {
    "label": "FexEx",
    "value": 5,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/fedex-logo.png?v=1686225320638",
    "company-logo-height": "80",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/fedex-background.png?v=1686225995437",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Arial Black",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "70, 40, 150",
    "activity-indicator-color": "255, 122, 9"
  },
  {
    "label": "McDonalds",
    "value": 6,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/mcdonalds.png?v=1686134816028",
    "company-logo-height": "100",
    "background-image-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/mcdonalds-background.jpeg?v=1686144835104",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Trebuchet MS",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "183, 1, 9",
    "activity-indicator-color": "255, 183, 0"
  },
  {
    "label": "Nova Scotia Tourism",
    "value": 7,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/ns-tourism-logo.png?v=1686247094224",
    "company-logo-height": "60",
    "background-image-url": "https://d3qvqlc701gzhm.cloudfront.net/full/73c0591c106bf913e535e6322effbe2118b52960c480b3fd7f7fd4b57e5f98e4.jpg",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Verdana",
    "body-font-size": "0.85",
    "text-color-primary": "64, 64, 64",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "0, 108, 183",
    "activity-indicator-color": "255, 194, 33"
  },
  {
    "label": "Starbucks",
    "value": 8,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/starbucks-logo.png?v=1686247280375",
    "company-logo-height": "100",
    "background-image-url": "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Helvetica",
    "body-font-size": "0.85",
    "text-color-primary": "63, 63, 63",
    "text-color-error": "214, 44, 31",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "0, 130, 72",
    "activity-indicator-color": "234, 199, 133"
  },
  {
    "label": "Tesla",
    "value": 9,
    "company-logo-img-url": "https://cdn.glitch.global/5b50c5d3-8d5c-4936-9933-3537d1af98b3/tesla-logo.png?v=1686166094567",
    "company-logo-height": "30",
    "background-image-url": "https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    "card-background-color": "255, 255, 255",
    "body-font-family": "Arial",
    "body-font-size": "0.85",
    "text-color-primary": "17, 17, 17",
    "text-color-error": "223, 28, 37",
    "button-primary-text-color": "255, 255, 255",
    "button-primary-background-color": "62, 106, 255",
    "activity-indicator-color": "255, 194, 33"
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
  height: var(--company-logo-height) !important;
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