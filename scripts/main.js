// Set logging for extension
const ENABLE_LOGS = true;

const STORAGE_DAVINCI_CSS = "DAVINCI_CSS";
const STORAGE_ACTIVE_TAB = "ACTIVE_TAB"
const STORAGE_CUSTOM_THEMES = "CUSTOM_THEMES"
const THEME_TYPE = { EXAMPLE: "EXAMPLE", CUSTOM: "CUSTOM" };

// Fields
let userThemeSelect;
let exampleThemeSelect;

let customThemesArray = [];
let customThemeGuid;
let activeTheme;
let activeThemeType;

//Modal Fields
let saveStyleBtn;
let updateStyleBtn;
let themeNameField;

//Delete Modal
let btnManageThemes;
let confirmDeleteButton;


/**
 * Initialize chrome extension
 */
const initializeExtension = () => {

  consoleLog("Initializing DaVinci Flow Design Studio");

  // Build theme selector control
  exampleThemeSelect = document.getElementById("example-themes");
  buildSelectOptionsProps({
    element: exampleThemeSelect,
    options: exampleThemes,
    includeSelectionText: true,
    selectionTextLabel: "Select Example Theme",
    changeHandler: exampleThemeSelectHandler
  });

  // Get custom themes
  userThemeSelect = document.getElementById("user-themes");
  userThemeSelect.addEventListener("change", userThemeSelectHandler);
  getAndPopulateUserThemes();

  // Populate available web safe fonts options
  const fontFamilySelect = document.getElementById("body-font-family");
  buildSelectOptionsProps({ element: fontFamilySelect, options: webSafeFonts, shouldSort: true });

  // Populate form position options
  const formPositionSelect = document.getElementById("form-position");
  buildSelectOptionsProps({ element: formPositionSelect, options: divFormPositions });

  // Create handler to place generated CSS on clipboard
  const copyCSSToClipboardBtn = document.getElementById("btnCopyCSS");
  copyCSSToClipboardBtn.addEventListener("click", writeCSSToClipboard)

  // Create handler to apply the current CSS settings
  const applyCSSBtn = document.getElementById("btnApplyCSS");
  applyCSSBtn.addEventListener("click", applyCSSBtnHandler);

  // Create handler to reset CSS to the original values 
  const resetCSSBtn = document.getElementById("btnResetCSS");
  resetCSSBtn.addEventListener("click", resetCSSBtnHandler);

  // Create event handlers for form controls
  const paletteForm = document.getElementById("davinciCSSForm");
  let inputs = paletteForm.querySelectorAll("input, select");
  inputs.forEach(input => {
    input.addEventListener('change', applyCSSFromFormControls);
    input.addEventListener('keyup', applyCSSFromFormControls);
  });

  // Set tab listener
  document.getElementById('myTabs').addEventListener('shown.bs.tab', tabChangeHandler);

  // Retrieve css from local storage
  chrome.storage.local.get([STORAGE_DAVINCI_CSS], retrievedCSSFromStorageHandler);

  // Set the active tab
  chrome.storage.local.get([STORAGE_ACTIVE_TAB], setActiveTabHandler);

  // Show Save Modal 
  document.getElementById('btnSaveCSS').addEventListener('click', showSaveModalDialog);

  // Set handler for saving custom theme
  saveStyleBtn = document.getElementById('saveStyleBtn');
  saveStyleBtn.addEventListener('click', saveCustomThemeHandler);

  // Delete theme button
  confirmDeleteButton = document.getElementById("confirmDeleteThemeBtn");
  confirmDeleteButton.addEventListener("click", deleteCustomTheme);

  // Update theme handler
  updateStyleBtn = document.getElementById('updateStyleBtn');
  updateStyleBtn.addEventListener('click', updateThemeHandler);

  // Assign the theme name input field
  themeNameField = document.getElementById('themeName');

  btnManageThemes = document.getElementById('btnManageThemes');
  btnManageThemes.addEventListener("click", displayModalDeleteTheme)
}



// Function to persist the custom theme with the given file name
const saveCurrentTheme = (props) => {
  let theme = {};
  let formValues = getCurrentCSSSettings();
  // remove key 'example keys' from mapping as not applicable
  formValues = formValues.filter(obj => obj.id !== 'example-themes' && obj.id !== 'user-themes');
  theme.values = formValues;

  if (props.updateExisting) {
    theme.label = props.title;
    theme.value = props.existingGuid;

    // Find the existing element in the array
    var index = customThemesArray.findIndex(function (obj) {
      return obj.value === theme.value;
    });

    if (index !== -1) {
      customThemesArray[index] = theme;
    } else {
      consoleLog("Unable to update existing theme");
      return
    }
  } else {
    theme.value = generateGUID();
    theme.label = props.title;
    customThemesArray.push(theme);
  }

  persistCustomThemes(STORAGE_CUSTOM_THEMES, customThemesArray);
  getAndPopulateUserThemes(theme.value);
};

/**
 * getCustomTheme
 * @param {*} themeId The Id for the custom theme
 * @returns customTheme
 */
const getCustomTheme = (themeId) => {
  let filteredTheme = customThemesArray.filter(function (theme) {
    return theme.id = themeId === theme.value;
  })
  return filteredTheme;
}

// Get custom themes from local storage
const getAndPopulateUserThemes = (selectId) => {
  chrome.storage.local.get([STORAGE_CUSTOM_THEMES], function (items) {
    const userThemeSelect = document.getElementById("user-themes")
    customThemesArray = Object.keys(items).length !== 0 ? items[STORAGE_CUSTOM_THEMES] : [];
    buildUserThemeOptions();
    // Once populated select option if passed
    if (selectId) {
      userThemeSelect.value = selectId;
      var event = new Event('change');
      userThemeSelect.dispatchEvent(event);
    }
  });
}

const buildUserThemeOptions = () => {
  let labelText = customThemesArray.length > 0 ? "Select Saved Theme" : "No Saved Themes";

  buildSelectOptionsProps({
    element: userThemeSelect,
    options: customThemesArray,
    shouldSort: true,
    includeSelectionText: true,
    selectionTextLabel: labelText
  });
}

/**
 * Function to apply the CSS items retrieved from local storage
 * @param {Array<{ id: string, value: string }>} items - iterable list of CSS items
 */
const applyCSSValuesFromLocalStorage = (items) => {
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
const applyCSSFromFormControls = () => {
  const messageObj = {
    action: "applyDaVinciCSS",
    css: generateCSS()
  }

  try {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      try {
        chrome.tabs.sendMessage(tabs[0].id, messageObj);
      } catch (sendMessageError) {
        console.error("Error sending message to active tab:", sendMessageError);
      }
    });
  } catch (queryError) {
    console.error("Error querying tabs:", queryError);
  }

  // Persist current settings
  persistCurrentSettings(STORAGE_DAVINCI_CSS);
}

const persistCustomThemes = (storageKey, themes) => {
  chrome.storage.local.set({ [storageKey]: themes }, function () {
    consoleLog('Themes persisted');
  });
}

const persistActiveTab = (activeTabId) => {
  const tab = { id: STORAGE_ACTIVE_TAB, value: activeTabId };
  chrome.storage.local.set({ [STORAGE_ACTIVE_TAB]: tab }, function () {
    consoleLog('Active Tab Saved', tab);
  });
}

const getCurrentCSSSettings = () => {
  const paletteForm = document.getElementById("davinciCSSForm");
  const inputs = paletteForm.querySelectorAll("input, select");
  const formValuesArray = Array.from(inputs).map(input => ({
    id: input.id,
    value: input.value
  }));
  return formValuesArray;
}

/**
 * Function to write the current form field values to local storage.
 * This is needed as the extension resets each time it is displayed
 */
const persistCurrentSettings = (settingsName) => {
  const formValuesArray = getCurrentCSSSettings();
  chrome.storage.local.set({ [settingsName]: formValuesArray }, function () {
    consoleLog('Settings saved');
  });
};

/**
 * Function to load the CSS settings for a select item them
 * @param {string} selectedValue - select dropdown value
 */
const applyExampleTheme = (selectedValue) => {

  const selectedTheme = exampleThemes.find(theme => theme.value === selectedValue);
  activeTheme = selectedTheme.label;
  activeThemeType = THEME_TYPE.EXAMPLE;
  setCSSFormFields(selectedTheme);
  setElementVisibility(btnManageThemes, false);
  consoleLog(`Theme Change: ${activeTheme} - ${activeThemeType}`)
}

/**
 * Function to apply the selected example theme to the form fields
 * @param {Object} themeCSS - theme object 
 */
const setCSSFormFields = (themeCSS) => {
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
 * Show Toast
 * @param {*} message 
 */
const showToast = (message) => {
  const toastElement = document.getElementById('toast');
  const toastInstance = new bootstrap.Toast(toastElement, { delay: 1500 });
  const toastBody = toastElement.querySelector('.toast-body');
  toastBody.textContent = message;
  toastInstance.show();
}

initializeExtension();