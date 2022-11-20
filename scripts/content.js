chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "YoutubeShortsToWatch") location.replace(request.url)
})
