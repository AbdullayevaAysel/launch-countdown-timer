//24 * 9 = 192
const flip = document.querySelectorAll(".flip")
const date = new Date().setHours(new Date().getHours() + 192)

function addZero(el) {
  return el < 10 ? "0" + el : el
}

setInterval(() => {
  const currentDate = new Date()
  const timeBetween = Math.ceil((date - currentDate) / 1000)
  allFilpCard(currentDate, timeBetween)
}, 1000)

function allFilpCard(currentDate, timeBetween) {
  let second = timeBetween % 60
  let minutes = Math.floor((timeBetween / 60) % 60)
  let hours = Math.floor((timeBetween / 3600) % 24)
  let day = Math.ceil(timeBetween / (60 * 60 * 24))

  flip.forEach((el) => {
    if (el.dataset.second) {
      let bottom = el.querySelector(".bottom")
      let top = el.querySelector(".top")
      let topOldHtml = Number(top.textContent)

      if(second === topOldHtml) return

      bottom.textContent = topOldHtml

      const topFlip = document.createElement("div")
      topFlip.classList.add("top-flip")
      topFlip.textContent = addZero(topOldHtml)

      
      const bottomFlip = document.createElement("div")
      bottomFlip.classList.add("bottom-flip")
      bottomFlip.textContent = addZero(second)
      
      el.append(topFlip, bottomFlip)

      topFlip.addEventListener("animationstart", function(){
        top.textContent = second
      })

      topFlip.addEventListener("animationend", function(){
        this.remove()
      })

      bottomFlip.addEventListener("animationend", function(){
        bottom.textContent = second
        this.remove()
      })

      top.innerHTML = addZero(second)
      bottom.innerHTML = addZero(second)
    }
    if (el.dataset.minutes) {
      let bottom = el.querySelector(".bottom")

      let top = el.querySelector(".top")
      top.innerHTML = addZero(minutes)
      bottom.innerHTML = addZero(minutes)
    }

    if (el.dataset.hours) {
      let bottom = el.querySelector(".bottom")

      let top = el.querySelector(".top")
      top.innerHTML = addZero(hours)
      bottom.innerHTML = addZero(hours)
    }

    if (el.dataset.day) {
      let bottom = el.querySelector(".bottom")

      let top = el.querySelector(".top")
      top.innerHTML = addZero(day)
      bottom.innerHTML = addZero(day)
    }
  })
}
