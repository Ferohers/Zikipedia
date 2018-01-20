chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         var oldurl = details.url;
         var newurl = oldurl.replace("wikipedia.org", "0wikipedia.org");
         return {redirectUrl: newurl};
    },
    {
        urls: [
            "*://*.wikipedia.org/*",
            "*://*.www.wikipedia.org/*"
        ],
    },
    ["blocking"]
);
