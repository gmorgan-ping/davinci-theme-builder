// Example Theme Dropdown Handler
const exampleThemeSelectHandler = (e) => {
  applyExampleTheme(e.currentTarget.value);
  userThemeSelect.selectedIndex = 0;
  updateThemeTypeAndVisibility(THEME_TYPE.EXAMPLE, e.currentTarget.options[e.currentTarget.selectedIndex].text, false);
};

/**
 * Apply the user custom theme
*/
const userThemeSelectHandler = () => {
  // Retrieve the selected theme
  let filteredTheme = getCustomTheme(userThemeSelect.value);

  if (filteredTheme && filteredTheme.length === 1) {
    applyCSSValuesFromLocalStorage(filteredTheme[0].values);
    exampleThemeSelect.selectedIndex = 0;
    applyCSSFromFormControls();
    customThemeGuid = filteredTheme[0].value;
    updateThemeTypeAndVisibility(THEME_TYPE.CUSTOM, filteredTheme[0].label, true);
  }
}

/**
 * Generates the custom CSS and writes to the clipboard
 */
const writeCSSToClipboard = (e) => {
  writeToClipboard(generateCSS());
  showToast('CSS Copied to Clipboard');
}

/**
 * Apply CSS btn handler (Currently Not Shown)
 */
const applyCSSBtnHandler = (e) => {
  applyCSSFromFormControls();
}

/**
 * Reset CSS btn handler
 */
const resetCSSBtnHandler = (e) => {
  if (activeThemeType === THEME_TYPE.EXAMPLE) {
    applyExampleTheme(exampleThemeSelect.value);
  } else {
    userThemeSelectHandler();
  }
  applyCSSFromFormControls();
  showToast('Theme Restored');
}

/**
 * Store the active tab when changed
 */
const tabChangeHandler = (e) => {
  activeTabId = e.target.getAttribute('href').substring(1);
  persistActiveTab(activeTabId);
}

/**
 * Set the active tab once retrieved from local storage
 */
const setActiveTabHandler = (items) => {
  if (Object.keys(items).length !== 0) {
    setActiveTab(items[STORAGE_ACTIVE_TAB].value)
  }
}
/**
 * Handler once css settings are retrieved from local storage
 */
const retrievedCSSFromStorageHandler = (items) => {
  if (Object.keys(items).length === 0) {
    applyExampleTheme("pingidentity");
  } else {
    applyCSSValuesFromLocalStorage(items[STORAGE_DAVINCI_CSS]);
  }

  //Determine if custom or example theme is being rendered
  if (exampleThemeSelect.value) {
    activeThemeType = THEME_TYPE.EXAMPLE;
    activeTheme = exampleThemeSelect.options[exampleThemeSelect.selectedIndex].text
    setElementVisibility(btnManageThemes, false);
  } else {
    activeThemeType = THEME_TYPE.CUSTOM;
    activeTheme = userThemeSelect.options[userThemeSelect.selectedIndex].text
    setElementVisibility(btnManageThemes, true);
    customThemeGuid = userThemeSelect.value;
  }
  // Apply CSS to the page
  applyCSSFromFormControls();

  consoleLog(`Retrieve from storage: Type: ${activeThemeType} Name: ${activeTheme}`);
}

/**
 * Display the Save modal dialog
 */
const showSaveModalDialog = (e) => {
  let placeholderThemeName = "";
  if (activeThemeType === THEME_TYPE.EXAMPLE) {
    placeholderThemeName = `${activeTheme} - Copy`
    updateStyleBtn.classList.add("d-none");
    saveStyleBtn.innerText = "Save"
  } else {
    placeholderThemeName = activeTheme;
    updateStyleBtn.classList.remove("d-none");
    saveStyleBtn.innerText = "Save as New"
  }
  themeNameField.value = placeholderThemeName;

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

  // On Show handler
  saveStyleModalElement.addEventListener('shown.bs.modal', function () {
    themeNameField.focus();
  });

  // Toggle the modal visibility
  saveStyleModal.show();
}

/**
 * Save custom theme handler
 */
const saveCustomThemeHandler = (e) => {
  // Call the function to persist the custom theme with the file name
  saveCurrentTheme({ title: themeNameField.value });
  dismissModal();
  showToast('Theme Saved');
}

const updateThemeHandler = (e) => {
  saveCurrentTheme({ title: themeNameField.value, updateExisting: true, existingGuid: customThemeGuid });
  showToast('Theme Updated');
}

const displayModalDeleteTheme = (e) => {
  // Find the modal element
  const deleteThemeModalElement = document.getElementById('deleteThemeModal');
  const deleteThemeNameSpan = document.getElementById("deleteThemeName");
  const deleteThemeName = userThemeSelect.options[userThemeSelect.selectedIndex].text;
  deleteThemeNameSpan.innerText = deleteThemeName;

  // Create a new Bootstrap Modal instance
  const deleteThemeModal = new bootstrap.Modal(deleteThemeModalElement);

  // Toggle the modal visibility
  deleteThemeModal.show();
}

const deleteCustomTheme = (e) => {
  // Find index of theme
  const indexToRemove = customThemesArray.findIndex(obj => obj.value === customThemeGuid);
  // remove theme
  if (indexToRemove !== -1) {
    // Remove the object from the array using splice
    customThemesArray.splice(indexToRemove, 1);

    // Save the custom themes to storage
    persistCustomThemes(STORAGE_CUSTOM_THEMES, customThemesArray);
    //rebuild customTheme options
    buildUserThemeOptions();

    // Default back to Ping Identity custom theme
    exampleThemeSelect.value = "pingidentity"
    let event = new Event('change');
    exampleThemeSelect.dispatchEvent(event);
    showToast('Theme Deleted');
  } else {
    consoleLog("Unable to find theme to delete");
  }

}
// Shared function to update active theme type and visibility of elements
const updateThemeTypeAndVisibility = (type, theme, isVisible) => {
  activeThemeType = type;
  activeTheme = theme;
  setElementVisibility(btnManageThemes, isVisible);
  consoleLog(`Theme Change: ${activeTheme} - ${activeThemeType}`);
};