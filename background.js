chrome.tabs.onUpdated.addListener((tabId, { status }, { url }) => {
  if (status === "complete" && url) {
    const [host, videoId] = url.split("/shorts/")

    if (host === "https://www.youtube.com") {
      chrome.tabs.sendMessage(tabId, {
        message: "YoutubeShortsToWatch",
        url: `${host}/watch?v=${videoId}`,
      })
    }
  }
})
