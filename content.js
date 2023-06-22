console.log("content script running")

// In your content script (content.js)
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  if (message.action === "applyDaVinciCSS") {

    if (message.css) {
      const styleId = "davinci-css"
      let prevStyle = document.getElementById(styleId);
      // Remove the previous version if present
      if (prevStyle) {
        prevStyle.parentElement.removeChild(prevStyle)
      }

      const style = document.createElement("style");
      style.id = "davinci-css";
      style.appendChild(document.createTextNode(message.css));
      var head = document.head;
      head.appendChild(style);
    }
    // Handle the message from the popup
    console.log("Applying CSS from chrome extension");
  } else {
    console.log("Didn't match type")
  }
});
