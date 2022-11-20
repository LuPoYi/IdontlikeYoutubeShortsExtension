chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const [host, videoId] = changeInfo.url.split("/shorts/")

    if (host === "https://www.youtube.com") {
      chrome.tabs.sendMessage(tabId, {
        message: "YoutubeShortsToWatch",
        url: `${host}/watch?v=${videoId}`,
      })
    }
  }
})
