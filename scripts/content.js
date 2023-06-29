const [host, videoId] = location.href.split("/shorts/")
if (host === "https://www.youtube.com" && videoId.length)
  location.replace(`${host}/watch?v=${videoId}`)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "YoutubeShortsToWatch") location.replace(request.url)
})

// tiger air
if (window.location.host === "booking.tigerairtw.com") {
  const displayDays = ["日", "一", "二", "三", "四", "五", "六"]

  const addDayOfWeek = () => {
    console.log("script: addDayOfWeek")
    const dateDOMS = document.querySelectorAll(
      ".price-brick-card-content .text-caption"
    )
    for (const dateDOM of dateDOMS) {
      const dateString = dateDOM.innerHTML
      const dateParts = dateString.split("/")
      if (dateParts[0]?.length === 2 && dateParts[0]?.length === 2) {
        const date = new Date(
          new Date().getFullYear(),
          parseInt(dateParts[0]) - 1,
          parseInt(dateParts[1])
        )
        const dayOfWeek = date.getDay()

        dateDOM.setHTML(`${dateString} (${displayDays[dayOfWeek]})`)
      }
    }
  }

  const observer = new MutationObserver((mutations) => addDayOfWeek())

  window.addEventListener("load", () => {
    const addObserverIfDesiredNodeAvailable = () => {
      const cardContent = document.querySelector(".price-brick-card-content")

      if (!cardContent) {
        setTimeout(() => addObserverIfDesiredNodeAvailable(), 500)
        return
      }

      observer.observe(cardContent, { childList: true, attritubes: true })
      addDayOfWeek()
    }

    addObserverIfDesiredNodeAvailable()
  })
}
