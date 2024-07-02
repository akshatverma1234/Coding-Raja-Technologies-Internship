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
    "songs/Farata_320(PagalWorld.com.sb).mp3",
    "songs/_Heeriye_320(PagalWorld.com.sb).mp3",
    "songs/Jo Tum Na Ho_320(PagalWorld.com.sb).mp3",
    "songs/O Mahi O Mahi_320(PagalWorld.com.sb).mp3",
    "songs/Tu Hai To Mujhe Phir Aur Kya Chahiye_320(PagalWorld.com.sb).mp3",
    "songs/Do Pal Veer Zaara 320 Kbps.mp3",
    "songs/Ishq Vishk Pyaar Vyaar_320(PagalWorld.com.sb).mp3",
    "songs/Tu Hai Sheetal Dhaara (Adipurush)_320(MyMp3Song).mp3",
    "songs/Do Naino Ke Pechida_320(PagalWorld.com.sb).mp3",
    "songs/Dil Ibaadat Tum Mile Original Motion Picturetrack 320 Kbps.mp3",
    "songs/Aao Milo Chalo Jab We Met 320 Kbps.mp3",
    "songs/Hua Main Animal 320 Kbps.mp3",
    "songs/Perfect Ed Sheeran-(PagalSongs.Com.IN).mp3",
    "songs/_Dheeme Dheeme_320(PagalWorld.com.sb).mp3",
    "songs/Aashiyan Barfi 320 Kbps.mp3",
    "songs/Gam Mein Soye Hain Gam Mein Jage_320(PagalWorld.com.sb).mp3",
    "songs/Tu Hai Sheetal Dhaara (Adipurush)_320(MyMp3Song).mp3",
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

  let i = 0
  let repeat = false
  let shuffle = false
  let shuffledPlaylist = []

  function playPrevious() {
    if (shuffle) {
      i = (i - 1 + shuffledPlaylist.length) % shuffledPlaylist.length
    } else {
      i = (i - 1 + playlist.length) % playlist.length
    }
    loadSong()
  }

  function toggleShuffle() {
    shuffle = !shuffle
    const shuffleButton = document.querySelector(".shuffle")
    if (shuffle) {
      shuffledPlaylist = [...playlist].sort(() => Math.random() - 0.5)
      shuffleButton.style.filter = "grayscale(0)"
    } else {
      shuffleButton.style.filter = "grayscale(1)" // change color to grayscale
    }
    i = 0 // Reset index to start from the beginning of the shuffled list
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
        i = (i + 1) % shuffledPlaylist.length
      } else {
        i = (i + 1) % playlist.length
      }
      loadSong()
    }
  }

  document.getElementById("previous").addEventListener("click", playPrevious)
  document.getElementById("next").addEventListener("click", playNext)
  document.querySelector(".shuffle").addEventListener("click", toggleShuffle)
  document.querySelector(".repeat").addEventListener("click", toggleRepeat)

  function loadSong() {
    const currentSong = shuffle ? shuffledSongs[i] : playlist[i]
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

  const cardContent = document.querySelector(".card_content")
  const songsList = document.querySelector(".songslist")
  const playButtons0 = document.getElementById("play1img")

  // Sample data for songs
  const songs = [
    {
      src: "songs/Ishq Jaisa Kuch Fighter 320 Kbps.mp3",
      img: "ishq-jaisa-kuch-fighter-500-500.jpg",
      title: "Ishq Jaisa Kuch",
      movie: "Fighter",
    },
    {
      src: "songs/O Maahi - Dunki.mp3",
      img: "152062-o-maahi-from-dunki-mp3-song-300.jpg",
      title: "O Maahi - Dunki",
      movie: "Fighter",
    },
    {
      src: "songs/Sher Khul Gaye.mp3",
      img: "152110-sher-khul-gaye-mp3-song-300.jpg",
      title: "Sher Khul Gaye",
      movie: "Fighter",
    },
    {
      src: "songs/Papa Meri Jaan Animal 320 Kbps.mp3",
      img: "papa-meri-jaan-animal-500-500.jpg",
      title: "Papa Meri Jaan",
      movie: "Animal",
    },
    {
      title: "Farata",
      movie: "Jawan",
      src: "songs/Farata_320(PagalWorld.com.sb).mp3",
      img: "67609_4.jpg",
      duration: "03:14",
    },
    {
      title: "_Heeriye",
      movie: "Arijit Singh",
      src: "songs/_Heeriye_320(PagalWorld.com.sb).mp3",
      img: "67444_4.jpg",
      duration: "03:19",
    },
    {
      title: "Shayad",
      movie: "Love Aaj Kal 2",
      src: "songs/Jo Tum Na Ho_320(PagalWorld.com.sb).mp3",
      img: "67520_4.jpg",
      duration: "04:08",
    },

    {
      title: "Phir Aur Kya Chahiye",
      movie: "Zara Hatke Zara...",
      src: "songs/Tu Hai To Mujhe Phir Aur Kya Chahiye_320(PagalWorld.com.sb).mp3",
      img: "5.jpg",
      duration: "04:26",
    },
    {
      title: "Jeena Sikha De",
      movie: "SRIKANTH",
      src: "songs/Jeena Sikha De_320(PagalWorld.com.sb).mp3",
      img: "6.jpg",
      duration: "04:30",
    },
    {
      title: "Do Pal",
      movie: "Veer-Zaara",
      src: "songs/Do Pal Veer Zaara 320 Kbps.mp3",
      img: "Do-Pal-Veer-Zaara-500-500.jpg",
      duration: "04:25",
    },
    {
      title: "Dil Ibaadat",
      movie: "Tum Mile",
      src: "songs/Ishq Vishk Pyaar Vyaar_320(PagalWorld.com.sb).mp3",
      img: "71257_4.jpg",
      duration: "03:21",
    },
    {
      title: "Tu Hai Sheetal...",
      movie: "Adipurush",
      src: "songs/Tu Hai Sheetal Dhaara (Adipurush)_320(MyMp3Song).mp3",
      img: "5543_3.jpg",
      duration: "03:21",
    },
    {
      title: "Ve Kamleya",
      movie: "Rocky Aur Rani...",
      src: "songs/Do Naino Ke Pechida_320(PagalWorld.com.sb).mp3",
      img: "70556_4.jpg",
      duration: "02:58",
    },
    {
      title: "Dil Ibaadat",
      movie: "Tum Mile",
      src: "songs/Dil Ibaadat Tum Mile Original Motion Picturetrack 320 Kbps.mp3",
      img: "Dil-Ibaadat-Tum-Mile-Original-Motion-Picture-Soundtrack-500-500.jpg",
      duration: "05:29",
    },
    {
      title: "Aao Milo Chalo",
      movie: "Jab We Met",
      src: "songs/Aao Milo Chalo Jab We Met 320 Kbps.mp3",
      img: "Aao-Milo-Chalo-Jab-We-Met-500-500.jpg",
      duration: "05:28",
    },
    {
      title: "Hua Main",
      movie: "Animal",
      src: "songs/Hua Main Animal 320 Kbps.mp3",
      img: "hua-main-animal-500-500.jpg",
      duration: "04:37",
    },
    {
      title: "Perfect",
      movie: "Ed Sheeran",
      src: "songs/Perfect Ed Sheeran-(PagalSongs.Com.IN).mp3",
      img: "615_7.webp",
      duration: "04:21",
    },
    {
      title: "Dheeme Dheeme",
      movie: "Laapataa Ladies",
      src: "songs/_Dheeme Dheeme_320(PagalWorld.com.sb).mp3",
      img: "70132_4.jpg",
      duration: "04:28",
    },
    {
      title: "Aashiyan Barfi",
      movie: "Barfi",
      src: "songs/Aashiyan Barfi 320 Kbps.mp3",
      img: "Aashiyan-Barfi-500-500.jpg",
      duration: "03:56",
    },
    {
      title: "Yimmy Yimmy",
      movie: "Shreya Ghoshal",
      src: "songs/Gam Mein Soye Hain Gam Mein Jage_320(PagalWorld.com.sb).mp3",
      img: "70646_4.jpg",
      duration: "03:35",
    },

    {
      title: "Tu Hai Sheetal...",
      movie: "Adipurush",
      src: "songs/Tu Hai Sheetal Dhaara (Adipurush)_320(MyMp3Song).mp3",
      img: "5543_3.jpg",
      duration: "03:21",
    },
  ]

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
    cardContent.innerHTML = ""
    songs.forEach((song) => {
      const card = document.createElement("div")
      card.className = "cards"
      card.innerHTML = `
        <div >
          <a href="${song.src}" class="play" data-src="${song.src}">
            <img src="play-svgrepo-com (3).svg" alt="Play" />
          </a>
        </div>
        <div class="add">
        <i class="fa-solid fa-ellipsis-vertical" id="icon1" ></i>
        </div>
        <img src="${song.img}" alt="${song.title}" />
        <h2>${song.title}</h2>
        <button class="add-to-playlist hidden">Add to Playlist</button>
      `
      cardContent.appendChild(card)
    })

    // Add event listeners to play buttons
    document.querySelectorAll(".play").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault()
        const songSrc = button.getAttribute("data-src")
        song.src = songSrc
        playMusic()
      })
    })
    document.querySelectorAll(".add-to-playlist").forEach((button, index) => {
      button.addEventListener("click", () => {
        addToPlaylist(songs[index])
      })
    })
  }
  function addToPlaylist(song) {
    const songItem = document.createElement("div")
    songItem.className = "sngctn"
    songItem.innerHTML = `
      <img src="${song.img}" alt="${song.title}" />
      <h2 class="H2">${song.title}</h2>
      <p>Song</p>
      <div>
        <div class="lists">
          <a href="${song.src}" >
            <img src="play-svgrepo-com (3).svg" id="play1img"  data-src="${song.src}"/>
          </a>
           <i class="fa-solid fa-ellipsis-vertical" ></i>
        <button class="delete-from-playlist hidden" id="delete-button">Delete</button>
        </div>
      </div>
    `
    songsList.appendChild(songItem)
    savePlaylistToLocalStorage()

    // Add event listener to the delete button
    songItem
      .querySelector(".delete-from-playlist")
      .addEventListener("click", () => {
        songItem.remove()
        savePlaylistToLocalStorage()
      })
    document.querySelectorAll("#play1img").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault()
        const audioPlayer = document.querySelector("audio")
        const songSrc = button.getAttribute("data-src")
        audioPlayer.src = songSrc
        playMusic()
      })
    })
  }

  function savePlaylistToLocalStorage() {
    const playlist = []
    document.querySelectorAll(".sngctn").forEach((songItem) => {
      playlist.push({
        src: songItem.querySelector("a").href,
        img: songItem.querySelector("img").src,
        title: songItem.querySelector("h2").textContent,
      })
    })
    localStorage.setItem("playlist", JSON.stringify(playlist))
  }

  function loadPlaylistFromLocalStorage() {
    const playlist = JSON.parse(localStorage.getItem("playlist")) || []
    playlist.forEach((song) => {
      addToPlaylist(song)
    })
  }

  loadPlaylistFromLocalStorage()

  // I added the eventlistener for deletbutton
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-ellipsis-vertical")) {
      const card = e.target.closest(".sngctn")
      const deleteButton = card.querySelector(".delete-from-playlist")
      deleteButton.classList.toggle("hidden")
    } else {
      const deleteButtons = document.querySelectorAll(".delete-from-playlist")
      deleteButtons.forEach((button) => button.classList.add("hidden"))
    }
  })
  const icons = document.querySelectorAll("#icon1")
  const buttons = document.querySelectorAll(".add-to-playlist")

  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      buttons[index].classList.toggle("hidden")
      document.addEventListener("click", (e) => {
        if (e.target !== icon && e.target !== buttons[index]) {
          buttons[index].classList.add("hidden")
        }
      })
    })
  })

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("hidden")
    })
  })
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
