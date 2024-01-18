
const generateGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const setActiveTab = (activeTabId) => {
  // Find the tab link with the specified ID
  const tabLink = document.querySelector(`.nav-tabs .nav-link[href="#${activeTabId}"]`);

  // If the tab link is found, trigger a click event
  if (tabLink) {
    tabLink.click();
  }
};

/**
 * Function to build options for a given select component
 * @param {HTMLSelectElement} element - select dropdown element
 * @param {Array<{ value: string, label: string }>} options - iterable list of items
 * @param {boolean} [shouldSort=false] - flag indicating whether to sort the option labels
 * @param {boolean} [includeSelectionText=false] - flag indicating whether to include a selection text option
 * @param {string} [selectionTextLabel="Please select"] - label for the selection text option
 */
const buildSelectOptions = (element, options, shouldSort = false, includeSelectionText = false, selectionTextLabel = "Please select") => {
  element.innerHTML = "";

  if (includeSelectionText) {
    const selectionTextOption = document.createElement("option");
    selectionTextOption.value = "";
    selectionTextOption.textContent = selectionTextLabel;
    selectionTextOption.disabled = true; // Set disabled attribute
    element.appendChild(selectionTextOption);
  }

  if (shouldSort) {
    options.sort((a, b) => a.label.localeCompare(b.label));
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
 * Returns an elements value
 * @param {string} id - The ID of the HTML element
 */
const getFormValue = (id) => {
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
const setElementValue = (id, value) => {
  let element = document.getElementById(id);

  if (!element) {
    throw new Error(`Element with id '${id}' not found.`);
  }

  switch (element.type) {
    case "text":
    case "number":
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
  consoleLog(`Setting: ${id} (${element.type}) to ${value}`)
}

/**
 * Converts a hex color value to RGB
 * This method is used as the color form controls return a hex value
 * however the css overrides require rgb
 * @param {string} hex - the hex color value
 */
const hexToRgb = (hex) => {
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
const rgbToHex = (rgb) => {
  const [r, g, b] = rgb.match(/\d+/g);

  const hexR = Number(r).toString(16).padStart(2, '0');
  const hexG = Number(g).toString(16).padStart(2, '0');
  const hexB = Number(b).toString(16).padStart(2, '0');

  return `#${hexR}${hexG}${hexB}`;
}

/**
 * Method that writes to the clipboard by creating a textarea
 * @param {string} text - The text value to place on the clipboard
 */
const writeToClipboard = (text) => {
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

/**
 * Method that updates a button's text for a period of time
 * then restores to original value
 * @param {button element} button - The button element
 * @param {string} newText - The text value to be set for the element
 * @param {integer} duration - The duration in ms to display the updated text
 */
const updateButtonText = (button, newText, duration) => {
  var originalText = button.textContent;
  var originalBackgroundColor = button.style.backgroundColor;

  // Update the button text to the new text
  button.textContent = newText;
  button.classList.toggle("cssActionActive");

  setTimeout(() => {
    button.textContent = originalText;
    button.classList.toggle("cssActionActive");
  }, duration);
}

const consoleLog = (...message) => {
  if (enableLogs) {
    console.log(...message);
  }
}