document.addEventListener("DOMContentLoaded", function () {
  let progress = document.getElementById("progress")
  let song = document.getElementById("song")
  let ContrlIcn = document.getElementById("cntrl")
  let timeDisplay = document.getElementById("timeDisplayLeft")
  let timeDisplay2 = document.getElementById("timeDisplayRight")
  const searchInput = document.getElementById("search-input")
  const songElements = document.querySelectorAll(".cards")
  const songElementsList = document.querySelectorAll(".sngctn")

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase()
    songElements.forEach(function (songElement) {
      const songTitle = songElement
        .querySelector("h2")
        .textContent.toLowerCase()
      if (songTitle.includes(searchTerm)) {
        songElement.style.display = "block"
      } else {
        songElement.style.display = "none"
      }
    })
    songElementsList.forEach(function (songElement) {
      const songTitle = songElement
        .querySelector("h2")
        .textContent.toLowerCase()
      if (songTitle.includes(searchTerm)) {
        songElement.style.display = "block"
      } else {
        songElement.style.display = "none"
      }
    })
  })

  song.onloadedmetadata = function () {
    if (progress) {
      progress.max = song.duration
      progress.value = song.currentTime
      if (timeDisplay) {
        timeDisplay.textContent = formatTime(song.currentTime)
      }
      if (timeDisplay2) {
        timeDisplay2.textContent = formatTime(song.duration)
      }
    }
  }

  const playMusic = () => {
    song.play()
    ContrlIcn.classList.replace("fa-play", "fa-pause")
  }

  const pauseMusic = () => {
    song.pause()
    ContrlIcn.classList.replace("fa-pause", "fa-play")
  }

  ContrlIcn.addEventListener("click", () => {
    if (song.paused) {
      playMusic()
    } else {
      pauseMusic()
    }
  })

  function togglePlayPause() {
    if (song.paused) {
      playMusic()
    } else {
      pauseMusic()
    }
  }

  if (song.play) {
    setInterval(() => {
      progress.value = song.currentTime
      updateProgressBarColor()
    }, 500)
  }

  function updateProgressBarColor() {
    const progressPercentage = (song.currentTime / song.duration) * 100
    const hue = 120 + progressPercentage * 1.2
    const color = `hsl(${hue}, 100%, 50%)`
    progress.style.background = `linear-gradient(to right, ${color} ${progressPercentage}%, rgb(114, 115, 114) ${progressPercentage}%, rgb(114, 115, 114) 100%)`
  }

  progress.oninput = function () {
    song.currentTime = progress.value
    timeDisplay.textContent = formatTime(song.currentTime)
    ContrlIcn.classList.add("fa-pause")
    ContrlIcn.classList.remove("fa-play")
  }

  song.addEventListener("timeupdate", () => {
    timeDisplay.textContent = formatTime(song.currentTime)
    timeDisplay2.textContent = formatTime(song.duration)
    updateProgressBarColor()
  })

  const playButtons = document.querySelectorAll(".play")
  const playButtons2 = document.querySelectorAll("#play1img")
  const playButtons3 = document.querySelectorAll(".play2img")

  playButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault()
      const audioPlayer = document.querySelector("audio")
      const songSrc = this.closest(".cards").querySelector("a").href

      if (audioPlayer.src === songSrc) {
        togglePlayPause()
      } else {
        audioPlayer.src = songSrc
        playMusic()
      }
    })
  })

  playButtons2.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault()
      const audioPlayer = document.querySelector("audio")
      const anchor = this.closest(".sngctn").querySelector("a")
      audioPlayer.src = anchor.href
      playMusic()
    })
  })

  playButtons3.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault()
      const audioPlayer = document.querySelector("audio")
      const anchor1 = this.closest("#sngctn2").querySelector("a")
      audioPlayer.src = anchor1.href
      playMusic()
    })
  })

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, "0")
    const formattedSeconds = String(remainingSeconds).padStart(2, "0")

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const slider = document.querySelector(".hamburger")
  const left = document.querySelector(".left")
  slider.addEventListener("click", function () {
    left.style.left = 0
  })

  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".left").style.left = "-100%"
  })

  document.querySelector("#home").addEventListener("click", function () {
    left.style.left = "-100%"
  })

  const playlist = [
    "songs/Ishq Jaisa Kuch Fighter 320 Kbps.mp3",
    "songs/O Maahi - Dunki.mp3",
    "songs/Sher Khul Gaye.mp3",
    "songs/Papa Meri Jaan Animal 320 Kbps.mp3",
    "Arijit Songs/Farata_320(PagalWorld.com.sb).mp3",
    "Arijit Songs/_Heeriye_320(PagalWorld.com.sb).mp3",
    "Arijit Songs/Jo Tum Na Ho_320(PagalWorld.com.sb).mp3",
    "Arijit Songs/O Mahi O Mahi_320(PagalWorld.com.sb).mp3",
    "Arijit Songs/Tu Hai To Mujhe Phir Aur Kya Chahiye_320(PagalWorld.com.sb).mp3",
    "Sonu Nigam/Do Pal Veer Zaara 320 Kbps.mp3",
    "Sonu Nigam/Ishq Vishk Pyaar Vyaar_320(PagalWorld.com.sb).mp3",
    "Shreya Ghoshal/Tu Hai Sheetal Dhaara (Adipurush)_320(MyMp3Song).mp3",
    "Shreya Ghoshal/Do Naino Ke Pechida_320(PagalWorld.com.sb).mp3",
    "Pritam/Dil Ibaadat Tum Mile Original Motion Picturetrack 320 Kbps.mp3",
    "Pritam/Aao Milo Chalo Jab We Met 320 Kbps.mp3",
    "songs/Hua Main Animal 320 Kbps.mp3",
    "Ed_Sh/Perfect Ed Sheeran-(PagalSongs.Com.IN).mp3",
    "Shreya Ghoshal/_Dheeme Dheeme_320(PagalWorld.com.sb).mp3",
    "Shreya Ghoshal/Aashiyan Barfi 320 Kbps.mp3",
    "Shreya Ghoshal/Gam Mein Soye Hain Gam Mein Jage_320(PagalWorld.com.sb).mp3",
    "Shreya Ghoshal/Tu Hai Sheetal Dhaara (Adipurush)_320(MyMp3Song).mp3",
    "songs/Haiwaan_320-(PagalWorld.Com.IN).mp3",
    "songs/04 - Arjan Vailly (320 Kbps).mp3",
    "songs/Pehle Bhi Main Animal 320 Kbps.mp3",
    "songs/_Ram Siya Ram_320(PagalWorld.com.pe).mp3",
    "songs/Maine Pi Rakhi Hai_320(PagalWorld.com.pe).mp3",
    "songs/Tere Pyar Mein_320(PagalWorld.com.pe).mp3",
    "songs/Show Me The Thumka_320(PagalWorld.com.pe).mp3",
    "songs/Cartoon - On & On (feat. Daniel Levi) [NCS Release].mp3",
    "songs/Different Heaven & EH!DE - My Heart [NCS Release].mp3",
    "songs/Elektronomia - Sky High pt.II [NCS Release].mp3",
    "songs/TULE - Fearless pt.II (feat. Chris Linton) [NCS Release].mp3",
    "songs/Arya & blankfaces - Daydream [NCS Release].mp3",
    "songs/Desmeon - Hellcat [NCS Release].mp3",
    "songs/Jo Cohen & Sex Whales - We Are [NCS Release].mp3",
    "songs/Jim Yosef - Firefly [NCS Release].mp3",
    "songs/Bad Girl.mp3",
    "songs/Cartoon - Why We Lose (feat. Coleman Trapp) [NCS Release].mp3",
  ]

  song.addEventListener("ended", function () {
    if (repeat) {
      loadSong()
    } else {
      playNext()
    }
  })

  // Volume Button

  document.querySelector(".range input").addEventListener("change", (e) => {
    console.log("Started Volume", e.target.value, "/100")
    console.log("hi")
    const volumeValue = Math.max(0, Math.min(1, parseInt(e.target.value) / 100))
    song.volume = volumeValue
  })

  const range = document.querySelector(".range")
  document.querySelector(".volume").addEventListener("click", () => {
    range.classList.remove("hidden")
  })
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".volume").contains(e.target)) {
      range.classList.add("hidden")
    }
  })

  // Prevent clicks on the slider from propagating to the document
  range.addEventListener("click", (e) => {
    e.stopPropagation()
  })
  document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
      togglePlayPause()
    }
  })

  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault()
    },
    false
  )

  //Arijit Songs

  const cardsContainer = document.getElementById("cardsContainer")

  const songs = [
    {
      title: "Farata",
      movie: "Jawan",
      src: "Arijit Songs/Farata_320(PagalWorld.com.sb).mp3",
      img: "Arijit Songs/67609_4.jpg",
      duration: "03:14",
    },
    {
      title: "_Heeriye",
      movie: "Arijit Singh",
      src: "Arijit Songs/_Heeriye_320(PagalWorld.com.sb).mp3",
      img: "Arijit Songs/67444_4.jpg",
      duration: "03:19",
    },
    {
      title: "Shayad",
      movie: "Love Aaj Kal 2",
      src: "Arijit Songs/Jo Tum Na Ho_320(PagalWorld.com.sb).mp3",
      img: "Arijit Songs/67520_4.jpg",
      duration: "04:08",
    },
    {
      title: "O Mahi O Mahi",
      movie: "Dunki",
      src: "Arijit Songs/O Mahi O Mahi_320(PagalWorld.com.sb).mp3",
      img: "Arijit Songs/O Mahi.jpg",
      duration: "03:53",
    },
    {
      title: "Phir Aur Kya Chahiye",
      movie: "Zara Hatke Zara...",
      src: "Arijit Songs/Tu Hai To Mujhe Phir Aur Kya Chahiye_320(PagalWorld.com.sb).mp3",
      img: "Arijit Songs/5.jpg",
      duration: "04:26",
    },
    {
      title: "Jeena Sikha De",
      movie: "SRIKANTH",
      src: "Arijit Songs/Jeena Sikha De_320(PagalWorld.com.sb).mp3",
      img: "Arijit Songs/6.jpg",
      duration: "04:30",
    },
  ]
  let i = 0
  let repeat = false
  let shuffle = false
  let shuffledSongs = []

  function playPrevious() {
    if (shuffle) {
      i = (i - 1 + shuffledSongs.length) % shuffledSongs.length
    } else {
      i = (i - 1 + songs.length) % songs.length
    }
    loadSong()
  }

  function toggleShuffle() {
    shuffle = !shuffle
    const shuffleButton = document.querySelector(".shuffle")
    if (shuffle) {
      shuffledSongs = [...songs].sort(() => Math.random() - 0.5)
      shuffleButton.style.filter = "grayscale(0)"
      i = 0 // Reset index to start from the beginning of the shuffled list
    } else {
      shuffleButton.style.filter = "grayscale(1)" // change color to grayscale
      i = songs.indexOf(shuffledSongs[i]) // Maintain current song when turning off shuffle
    }
  }

  function toggleRepeat() {
    repeat = !repeat
    const repeatButton = document.querySelector(".repeat")
    if (repeat) {
      repeatButton.style.filter = "grayscale(0)"
    } else {
      repeatButton.style.filter = "grayscale(1)" // change color to grayscale
    }
  }

  // Modify the playNext function to check for repeat mode and shuffle mode
  function playNext() {
    if (repeat) {
      loadSong() // repeat the current song
    } else {
      if (shuffle) {
        i = (i + 1) % shuffledSongs.length
      } else {
        i = (i + 1) % songs.length
      }
      loadSong()
    }
  }

  document.getElementById("previous").addEventListener("click", playPrevious)
  document.getElementById("next").addEventListener("click", playNext)
  document.querySelector(".shuffle").addEventListener("click", toggleShuffle)
  document.querySelector(".repeat").addEventListener("click", toggleRepeat)

  function loadSong() {
    const currentSong = shuffle ? shuffledSongs[i] : songs[i]
    song.src = currentSong.src
    song.play()
  }

  song.addEventListener("ended", function () {
    if (repeat) {
      loadSong()
    } else {
      playNext()
    }
  })
  // render songs initially
  renderSongs(songs)

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredSongs = songs.filter((song) => {
      return (
        song.title.toLowerCase().includes(searchTerm) ||
        song.movie.toLowerCase().includes(searchTerm)
      )
    })
    renderSongs(filteredSongs)
  })

  function renderSongs(songs) {
    cardsContainer.innerHTML = ""
    songs.forEach((song, index) => {
      const card = document.createElement("div")
      card.id = "sngctn2"
      card.innerHTML = `
        <div class="sequence-number">${index + 1}</div>
        <img class="img1" src="${song.img}" alt="${song.title}" />
        <h2 class="H2">${song.title}</h2>
        <p>${song.movie}</p>
        <h3 class="upper2">${song.duration}</h3>
        <div>
          <div class="lists">
            <a href="${song.src}" class="playButton" data-src="${song.src}">
              <img src="play-svgrepo-com (3).svg" class="play2img"/>
            </a>
          </div>
        </div>
      `

      cardsContainer.appendChild(card)
    })

    // add event listeners to play buttons
    document.querySelectorAll(".playButton").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault()
        const songSrc = button.getAttribute("data-src")
        song.src = songSrc
        playMusic()
      })
    })

    // add event listeners to song titles
    document.querySelectorAll(".H2").forEach((title) => {
      title.addEventListener("click", () => {
        const playButton = title
          .closest("#sngctn2")
          .querySelector(".playButton")
        playButton.click()
      })
    })
  }
})

document.querySelector(".hamburger").addEventListener("click", function () {
  const artistSong = document.querySelector(".songplay")
  if (artistSong.style.display === "none") {
    artistSong.style.display = "block"
  } else {
    artistSong.style.display = "none"
  }
})
document.querySelector(".close").addEventListener("click", function () {
  const artistSong = document.querySelector(".songplay")
  if (artistSong.style.display === "flex") {
    artistSong.style.display = "none"
  } else {
    artistSong.style.display = "block"
  }
})
document.querySelector("#home").addEventListener("click", function () {
  window.location.href = "index.html"
})
