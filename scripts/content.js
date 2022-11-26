const [host, videoId] = location.href.split("/shorts/")
if (host === "https://www.youtube.com" && videoId.length)
  location.replace(`${host}/watch?v=${videoId}`)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "YoutubeShortsToWatch") location.replace(request.url)
})
