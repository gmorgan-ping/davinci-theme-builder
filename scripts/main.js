// Set logging for extension
const enableLogs = true;

const STORAGE_DAVINCI_CSS = "DAVINCI_CSS";
const STORAGE_ACTIVE_TAB = "ACTIVE_TAB"
const STORAGE_CUSTOM_THEMES = "CUSTOM_THEMES"

let activeTabId = "prebuiltTab";
let customThemesArray = [];
let activeCustomTheme;

/**
 * Initialize chrome extension
 */
const initializeExtension = () => {

  console.log("Initializing Theme Builder");

  // Build available web safe fonts control
  const fontFamilySelect = document.getElementById("body-font-family");
  buildSelectOptions(fontFamilySelect, webSafeFonts, true);

  // Build theme selector control
  const themeSelect = document.getElementById("example-themes");
  buildSelectOptions(themeSelect, exampleThemes, false, true, "Select Example Theme");
  themeSelect.addEventListener("change", function (e) {
    applyExampleTheme(e.currentTarget.value);
    userThemeSelect.selectedIndex = 0;
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
    applyExampleTheme(themeSelect.value);
    applyCSSFromFormControls();
    updateButtonText(e.currentTarget, "✓ Restored", 1000); (e);
  });

  // Create event handlers for form controls
  const paletteForm = document.getElementById("davinciCSSForm");
  var inputs = paletteForm.querySelectorAll("input, select");

  inputs.forEach(input => {
    consoleLog(`Adding listener for: ${input.id}`)
    input.addEventListener('change', applyCSSFromFormControls);
    input.addEventListener('keyup', applyCSSFromFormControls);
  });

  // Set tab listener
  document.getElementById('myTabs').addEventListener('shown.bs.tab', function (event) {
    activeTabId = event.target.getAttribute('href').substring(1);
    persistActiveTab();
  });

  // As chrome extensions refresh each time they're clicked, pull CSS settings
  // from local storage 
  chrome.storage.local.get([STORAGE_DAVINCI_CSS], function (items) {
    consoleLog(items)
    if (Object.keys(items).length === 0) {
      applyExampleTheme("pingidentity");
    } else {
      applyCSSValuesFromLocalStorage(items[STORAGE_DAVINCI_CSS]);
    }
  });

  // Set the active tab
  chrome.storage.local.get([STORAGE_ACTIVE_TAB], function (items) {
    consoleLog("Getting Active tab", items)
    if (Object.keys(items).length !== 0) {
      setActiveTab(items[STORAGE_ACTIVE_TAB].value)
    }
  });

  // Get custom themes
  getAndPopulateUserThemes();
  const userThemeSelect = document.getElementById("user-themes");
  userThemeSelect.addEventListener("change", function (e) {
    consoleLog("Set user theme ", e.currentTarget.value);
    let filteredTheme = customThemesArray.filter(function (theme) {
      return theme.id = e.currentTarget.value === theme.value;
    })
    if (filteredTheme && filteredTheme.length === 1) {
      applyCSSValuesFromLocalStorage(filteredTheme[0].values);
      consoleLog("Applying user theme: ", filteredTheme[0].label);
      themeSelect.selectedIndex = 0;
      applyCSSFromFormControls();
    }
  })


  document.getElementById('btnSaveCSS').addEventListener('click', function () {
    const themeNameField = document.getElementById('themeName');
    themeNameField.value = activeCustomTheme;
    console.log('Theme Name:', activeCustomTheme, themeNameField.value);

    // Find the modal element
    const saveStyleModalElement = document.getElementById('saveStyleModal');

    // Create a new Bootstrap Modal instance
    const saveStyleModal = new bootstrap.Modal(saveStyleModalElement);

    // Listen for the modal hidden event
    saveStyleModalElement.addEventListener('hidden.bs.modal', function () {
      // Remove the backdrop manually when the modal is hidden
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    });

    // Toggle the modal visibility
    saveStyleModal.toggle();
  });


  document.getElementById('saveStyleBtn').addEventListener('click', function () {
    // Get the file name from the input field
    const themeNameField = document.getElementById('themeName');

    // Call the function to persist the custom theme with the file name
    saveCurrentTheme(themeNameField.value);

    dismissModal();
  });
}

const dismissModal = () => {
  consoleLog("Attempting to dismiss modal")
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


// Function to persist the custom theme with the given file name
const saveCurrentTheme = (title) => {
  // Your logic to persist the custom theme goes here
  console.log('Persisting custom theme with  name:', title);

  let theme = {}
  theme.value = generateGUID();
  theme.label = title;

  let formValues = getCurrentCSSSettings();
  // remove key 'example keys' from mapping as not applicable
  formValues = formValues.filter(obj => obj.id !== 'example-themes' && obj.id !== 'user-themes');
  theme.values = formValues;
  customThemesArray.push(theme);

  persistCustomThemes(STORAGE_CUSTOM_THEMES, customThemesArray);
  getAndPopulateUserThemes();

};

const getAndPopulateUserThemes = () => {
  chrome.storage.local.get([STORAGE_CUSTOM_THEMES], function (items) {
    const userThemeSelect = document.getElementById("user-themes")
    consoleLog("Getting custom themes", items)
    customThemesArray = Object.keys(items).length !== 0 ? items[STORAGE_CUSTOM_THEMES] : [];
    buildSelectOptions(userThemeSelect, customThemesArray, true, true, "Select Saved Theme");
    consoleLog("Custom themes:", customThemesArray)
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
      // consoleLog(`Setting field: ${element.id} to ${item.value}`)
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
      chrome.tabs.sendMessage(tabs[0].id, messageObj);
    });
  } catch (error) {
    console.log("Error sending CSS to active tab")
  }

  // Persist current settings
  persistCurrentSettings(STORAGE_DAVINCI_CSS);
}

const persistCustomThemes = (storageKey, themes) => {
  chrome.storage.local.set({ [storageKey]: themes }, function () {
    consoleLog('Themes persisted', themes);
  });
}

const persistActiveTab = () => {
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
    console.log('Settings saved');
  });
};

/**
 * Function to load the CSS settings for a select item them
 * @param {string} selectedValue - select dropdown value
 */
const applyExampleTheme = (selectedValue) => {
  console.log("loadThemeSettings", selectedValue);
  const selectedTheme = exampleThemes.find(theme => theme.value === selectedValue);
  setCSSFormFields(selectedTheme);
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

initializeExtension();