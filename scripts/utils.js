
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
 * Function to show/hide an element by adding/removing d-none css class
 * @param {HTMLElement} element 
 * @param {boolean} [doShow] - flag indicating whether to show or hide the element
 */
const setElementVisibility = (element, doShow) => {
  if (element) {
    doShow ? element.classList.remove("d-none") : element.classList.add("d-none")
  }
}

/**
 * Function to build options for a given select component
 * @param {HTMLSelectElement} element - select dropdown element
 * @param {Array<{ value: string, label: string }>} options - iterable list of items
 * @param {boolean} [shouldSort=false] - flag indicating whether to sort the option labels
 * @param {boolean} [includeSelectionText=false] - flag indicating whether to include a selection text option
 * @param {string} [selectionTextLabel="Please select"] - label for the selection text option
 */
const buildSelectOptionsProps = (props) => {
  let element = props.element;
  element.innerHTML = "";

  if (props.includeSelectionText) {
    const selectionTextOption = document.createElement("option");
    selectionTextOption.value = "";
    selectionTextOption.textContent = props.selectionTextLabel || "Please select";
    selectionTextOption.disabled = true; // Set disabled attribute
    element.appendChild(selectionTextOption);
  }

  if (props.shouldSort) {
    props.options.sort((a, b) => a.label.localeCompare(b.label));
  }

  props.options.forEach(option => {
    const newOption = document.createElement("option");
    newOption.value = option.value;
    newOption.textContent = option.label;

    // Append the option element to the select element
    element.appendChild(newOption);
  });

  if (props.changeHandler) {
    element.addEventListener("change", props.changeHandler);
  }
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
* Logging function that enables quick disabling of logs
*/
const consoleLog = (...message) => {
  if (ENABLE_LOGS) {
    console.log(...message);
  }
}

/**
* Dismiss modal dialog
*/
const dismissModal = () => {
  // Hide the modal using Bootstrap's hide method
  const saveStyleModalElement = document.getElementById('saveStyleModal');
  const saveStyleModal = bootstrap.Modal.getInstance(saveStyleModalElement);

  if (saveStyleModal) {
    saveStyleModal.hide();
  }

  // Remove the modal backdrop
  const modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
}