
// Add event listener to accept incoming messages
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  if (message.action === "applyDaVinciCSS") {

    if (message.css) {
      const styleId = "davinci-theme-builder-css"
      let prevStyle = document.getElementById(styleId);
      if (prevStyle) {
        prevStyle.parentElement.removeChild(prevStyle)
      }

      const style = document.createElement("style");
      style.id = styleId;
      style.appendChild(document.createTextNode(message.css));
      var head = document.head;
      head.appendChild(style);
    }
    console.log("Applying CSS from DaVinci Theme Builder extension");
  } else {
    console.log("DaVinci Theme Builder: Message.action match type error")
  }
});
