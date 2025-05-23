
// Add event listener to accept incoming messages
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  try {
    if (message.action === "applyDaVinciCSS" && message.css) {
      const styleId = "davinci-theme-builder-css";
      let prevStyle = document.getElementById(styleId);
      if (prevStyle) {
        prevStyle.parentElement.removeChild(prevStyle);
      }
      const style = document.createElement("style");
      style.id = styleId;
      style.appendChild(document.createTextNode(message.css));
      document.head.appendChild(style);
      console.log("CSS applied by content script");

      
      sendResponse({ status: "ok" });
    } else {
      console.warn("DaVinci Flow Design Studio: Message.action mismatch");
    }
  } catch (error) {
    console.error("Error handling message:", error);
    sendResponse({ status: "error", message: error.message });
  }

  return true;
});
