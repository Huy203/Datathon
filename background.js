// Background script code
// This script will run in the background of the browser

// Example: Listen for a click on the browser action button
chrome.browserAction.onClicked.addListener(function (tab) {
  // Perform actions when the browser action button is clicked
  // You can inject content scripts, interact with tabs, etc.
  console.log("Browser action button clicked");
});
