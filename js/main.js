let classList = ["ytp-play-progress ytp-swatch-background-color", "ytp-load-progress", "ytp-progress-list",
            "ytp-play-progress ytp-swatch-background-color", "ytp-play-progress ytp-swatch-background-color",
            "ytp-chapters-container", "ytp-prev-button ytp-button", "ytp-chapter-title-content",
             "ytp-subtitles-button ytp-button"]

const removeBottomBar = (classList) => {
  for (let className of classList) {
    let elements = document.getElementsByClassName(className);
    for (let e of elements) {
      e.remove();
    }
  }
}

const checkEveryElementsLoaded = (classList) => {
  // check if the dynamically loaded object exists.
  for (let className of classList) {
    let elem = document.getElementsByClassName(className);
    if (elem == undefined || elem == null) {
      return false
    }
  }
  // if exists, remove unnecessary DOM object for seeing caption.
  removeBottomBar(classList)
  // clear interval
  clearInterval(intervalID);
  return true
}

let intervalID = setInterval(() => checkEveryElementsLoaded(classList), 500);