// bot_#####.js

// MAKE SURE TO END YOUR FILE NAME IN ".js" !!
// I recommend a file name like "#####_business_name.js";

(function() {

  
// Load the chat plugin
var script = document.createElement('script');

script.src = 'https://app.aminos.ai/js/chat_plugin.js'; // Regular website Universal
Script. // Comment out if not using.
//script.src = 'https://app.aminos.ai/js/chat_plugin_ghl.js'; // GoHighLevel Original

  Script.src // Comment out if not using.
//script.src = 'https://app.aminos.ai/js/chat_form_plugin.js'; // Inline Website Original

  Script. // Comment out if not using.
script.setAttribute('data-bot-id', '#####'); // Input Bot ID here by replacing ##### with your bot number.
document.head.appendChild(script);

  // Add custom CSS styling
var css = `div.talktext p {
color: black !important;
font-family: sans-serif !important;
}`;
var style = document.createElement('style');
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
document.head.appendChild(style);
//************************************************
//NEW INTEGRATION CODE: <script src='https://subdomain.YOURDOMAIN.suffix/bot_#####.js"></script>
  //MAKE SURE TO ADD: <div id="chat_form"></div>
//Change out subdomain.YOURDOMAIN.suffix with your own domain/subdomain,
i.e.: chatbot.coolchatbotz.com
//test this code in jsfiddle.net to ensure it’s working. Copy from “<script…” to “</div>”.
//Notice the Integration code does NOT include the repository name. The repo name
is not necessary for the integration code.
//************************************************

})();
