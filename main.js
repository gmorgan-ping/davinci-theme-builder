/**
 * Initialize chrome extension
 */
const initializeExtension = function () {

  console.log("Initializing Theme Builder");

  // Build available web safe fonts control
  const fontFamilySelect = document.getElementById("body-font-family");
  buildSelectOptions(fontFamilySelect, webSafeFonts, true);

  // Build theme selector control
  const themeSelect = document.getElementById("example-themes");
  buildSelectOptions(themeSelect, exampleThemes);
  themeSelect.addEventListener("change", function (e) {
    loadThemeSettings(e.currentTarget.value);
  });

  // Build form position
  const formPositionSelect = document.getElementById("form-position");
  buildSelectOptions(formPositionSelect, divFormPositions);

  // Create handler to place generated CSS on clipboard
  const copyCSSToClipboardBtn = document.getElementById("btnCopyCSS");
  copyCSSToClipboardBtn.addEventListener("click", function (e) {
    writeCSSToClipboard(e);
  });

  // Create handler to apply the current CSS settings
  const applyCSSBtn = document.getElementById("btnApplyCSS");
  applyCSSBtn.addEventListener("click", function (e) {
    applyCSSFromFormControls();
    updateButtonText(e.currentTarget, "✓ Applied", 1000); (e);
  });

  // Create handler to reset CSS to the original values 
  const resetCSSBtn = document.getElementById("btnResetCSS");
  resetCSSBtn.addEventListener("click", function (e) {
    loadThemeSettings(themeSelect.value);
    applyCSSFromFormControls();
    updateButtonText(e.currentTarget, "✓ Restored", 1000); (e);
  });

  // Create event handlers for form controls
  const paletteForm = document.getElementById("davinciCSSForm");
  var inputs = paletteForm.querySelectorAll("input, select");

  inputs.forEach(input => {
    input.addEventListener('change', applyCSSFromFormControls);
    input.addEventListener('keyup', applyCSSFromFormControls);
  });

  // As chrome extensions refresh each time they're clicked, pull CSS settings
  // from local storage 
  chrome.storage.sync.get(['davinciCSS'], function (items) {
    if (Object.keys(items).length === 0) {
      loadThemeSettings("pingidentity");
    } else {
      applyCSSValuesFromLocalStorage(items.davinciCSS);
    }
  });
}

/**
 * Function to apply the CSS items retrieved from local storage
 * @param {Array<{ id: string, value: string }>} items - iterable list of CSS items
 */
const applyCSSValuesFromLocalStorage = function (items) {
  items.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
      element.value = item.value;
    }
  });
}

/**
 * Function to generate the CSS based upon form fields then apply it
 * to the active tab
 */
const applyCSSFromFormControls = function () {
  const messageObj = {
    action: "applyDaVinciCSS",
    css: generateCSS()
  }

  try {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, messageObj);
    });
  } catch (error) {
    console.log("Error sending CSS to active tab")
  }

  // Persist current settings
  persistCurrentSettings();
}

/**
 * Function to write the current form field values to local storage.
 * This is needed as the extension resets each time it is displayed
 */
const persistCurrentSettings = function () {
  const paletteForm = document.getElementById("davinciCSSForm");
  const inputs = paletteForm.querySelectorAll("input, select");
  const formValuesArray = Array.from(inputs).map(input => ({
    id: input.id,
    value: input.value
  }));

  chrome.storage.sync.set({ 'davinciCSS': formValuesArray }, function () {
    console.log('Settings saved');
  });
};

/**
 * Function to build options for a given select component
 * @param {HTMLSelectElement} element - select dropdown element
 * @param {Array<{ value: string, label: string }>} options - iterable list of items
 * @param {boolean} [shouldSort=false] - flag indicating whether to sort the option labels
 */
const buildSelectOptions = function (element, options, shouldSort = false) {
  if (shouldSort) {
    options.sort((a, b) => a.value.localeCompare(b.value));
  }
  options.forEach(option => {
    const newOption = document.createElement("option");
    newOption.value = option.value;
    newOption.textContent = option.label;

    // Append the option element to the select element
    element.appendChild(newOption);
  });
}

/**
 * Function to load the CSS settings for a select item them
 * @param {string} selectedValue - select dropdown value
 */
const loadThemeSettings = function (selectedValue) {
  console.log("loadThemeSettings", selectedValue);
  const selectedTheme = exampleThemes.find(theme => theme.value === selectedValue);
  setCSSFormFields(selectedTheme);
}

/**
 * Function to apply the selected example theme to the form fields
 * @param {Object} themeCSS - theme object 
 */
const setCSSFormFields = function (themeCSS) {
  if (themeCSS) {
    // Update form fields
    for (let key in themeCSS) {
      if (key !== "label" && key !== "value") {
        setElementValue(key, themeCSS[key]);
      }
    }
  }
}

/**
 * Returns an elements value
 * @param {string} id - The ID of the HTML element
 */
const getFormValue = function (id) {
  let elementValue;
  try {
    elementValue = document.getElementById(id).value;
  } catch (error) {
    console.error("Unknown element", id);
  }
  return elementValue;
}


/**
 * Sets the value of an HTML element based on its ID
 * @param {string} id - The ID of the HTML element
 * @param {string} value - The value to be set for the element
 * @throws {Error} If the element with the given ID is not found.
 */
const setElementValue = function (id, value) {
  let element = document.getElementById(id);

  if (!element) {
    throw new Error(`Element with id '${id}' not found.`);
  }

  switch (element.type) {
    case "text":
      element.value = value;
      break;
    case "color":
      element.value = rgbToHex(`rgb(${value})`);
      break;
    default:
      if (element.tagName === "SELECT") {
        element.value = value;
      }
      break;
  }
}

/**
 * Converts a hex color value to RGB
 * This method is used as the color form controls return a hex value
 * however the css overrides require rgb
 * @param {string} hex - the hex color value
 */
const hexToRgb = function (hex) {
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const rgb = `${r}, ${g}, ${b}`

  return rgb;
}

/**
 * Converts a RGB color value to Hex
 * This method is used as the color form controls needs to be passed a hex value
 * however the css overrides use RGB
 * @param {string} rgb - the RGB color value
 */
const rgbToHex = function (rgb) {
  const [r, g, b] = rgb.match(/\d+/g);

  const hexR = Number(r).toString(16).padStart(2, '0');
  const hexG = Number(g).toString(16).padStart(2, '0');
  const hexB = Number(b).toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
}

/**
 * Method that updates a button's text for a period of time
 * then restores to original value
 * @param {button element} button - The button element
 * @param {string} newText - The text value to be set for the element
 * @param {integer} duration - The duration in ms to display the updated text
 */
const updateButtonText = function (button, newText, duration) {
  var originalText = button.textContent;
  var originalBackgroundColor = button.style.backgroundColor;

  // Update the button text to the new text
  button.textContent = newText;
  button.style.backgroundColor = "#c6ea99";

  setTimeout(function () {
    button.textContent = originalText;
    button.style.backgroundColor = originalBackgroundColor;
  }, duration);
}

/**
 * Method that writes to the clipboard by creating a textarea
 * @param {string} text - The text value to place on the clipboard
 */
const writeToClipboard = function (text) {
  const tmpTextArea = document.createElement('textarea');

  tmpTextArea.value = text;
  tmpTextArea.style.position = 'fixed';
  document.body.appendChild(tmpTextArea);
  tmpTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea from the document
  document.body.removeChild(tmpTextArea);
}

/**
 * Generates the custom CSS and writes to the clipboard
 */
const writeCSSToClipboard = function (e) {
  writeToClipboard(generateCSS());
  updateButtonText(e.currentTarget, "✓ Copied", 1500);

}

initializeExtension();