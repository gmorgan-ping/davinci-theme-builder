/**
 * Generates the custom CSS by retrieving form values and substituting into
 * templated CSS overrides and base
 */
const generateCSS = function () {

  const overrideCSS = `
  :root {
    /********************************************************
    * COMPANY LOGO
    *********************************************************/
    --company-logo-img-url: url("${getFormValue("company-logo-img-url")}");
    --company-logo-max-height: ${getFormValue("company-logo-max-height")}px;

    /********************************************************
    * PAGE BACKGROUND 
    *********************************************************/
    --background-image-url: url("${getFormValue("background-image-url")}");

    /********************************************************
    * CARD BODY
    *********************************************************/
    --card-background-color: rgb(${hexToRgb(getFormValue("card-background-color"))});
    --card-shadow-color: rgba(${hexToRgb(getFormValue("card-shadow-color"))}, .35);

    /********************************************************
    * BODY
    *********************************************************/
    --body-font-family: ${getFormValue("body-font-family")};
    --body-font-size: ${getFormValue("body-font-size")}rem;

    /********************************************************
    * TEXT FONT COLORS
    *********************************************************/

    /*  PRIMARY FONT COLOR (RGB) */
    --text-color-primary: ${hexToRgb(getFormValue("text-color-primary"))};

    /* HEADING FONT COLR (RBG) */
    --heading-text-color: ${hexToRgb(getFormValue("heading-text-color"))};
    
    /*  MUTED TEXT ALPHA  */
    --text-color-muted-apha: 0.75;

    /*  ERROR FONT COLOR  */
    --text-color-error: rgb(${hexToRgb(getFormValue("text-color-error"))});

    /********************************************************
    * BUTTON ATTRIBUTES
    *********************************************************/

    /*  BUTTON FONT COLOR  */
    --button-primary-text-color: rgb(${hexToRgb(getFormValue("button-primary-text-color"))});

    /*  BUTTON BACKGROUND COLOR (RGB)  */
    --button-primary-background-color: ${hexToRgb(getFormValue("button-primary-background-color"))};
    
    /* LINK BUTTON FONT COLOR (RGB)  */
    --link-button-primary-color: ${hexToRgb(getFormValue("link-button-primary-color"))};

    /* BUTTON BORDER RADIUS */
    --button-primary-border-radius: ${getFormValue("button-primary-border-radius")}px;

    /*  BUTTON HOVER ALPHA  */
    --button-hover-alpha: 0.70;

    /*  BUTTON ACTIVE ALPHA  */
    --button-active-alpha: 0.80;

    /*  BUTTON DISABLED ALPHA  */
    --button-disabled-alpha: 0.65;

    /********************************************************
     * FORM CONTROLS
     *********************************************************/
    --form-control-border-radius: ${getFormValue("form-control-border-radius")}px;
    --card-body-border-radius: ${getFormValue("card-body-border-radius")}px;
    --focus-highlight-color: ${hexToRgb(getFormValue("focus-highlight-color"))};

    /********************************************************
    * ACTIVITY INDICATOR & BUTTON SPINNER COLOR
    *********************************************************/

    --activity-indicator-color: rgb(${hexToRgb(getFormValue("activity-indicator-color"))});

    --polling-indicator-color: rgb(${hexToRgb(getFormValue("polling-indicator-color"))});

    /********************************************************
    * APPLYING TEXT COLOR - DO NOT CHANGE
    *********************************************************/
    /* H1,H2, H3, Body text color */
    --bs-body-color: rgb(var(--text-color-main)) !important;
    --bs-danger-rgb: var(--text-color-error);
  }

  ${getFormValue("form-position")}
  `
  return overrideCSS + baseCSS
}