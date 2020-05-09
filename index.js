const songs = [
    "2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3",
    "2019-06-12_-_Homework_-_David_Fesliyan.mp3",
    "2019-06-12_-_I_Got_This_-_www.fesliyanstudios.com_-_David_Renda.mp3",
    "2019-06-21_-_Out_And_About_-_www.fesliyanstudios.com_-_David_Renda.mp3",
    "2019-06-25_-_Bobbin_-_www.fesliyanstudios.com_-_David_Renda.mp3",
    "2019-06-27_-_On_My_Own_-_www.fesliyanstudios.com_-_David_Renda.mp3",
    "2019-07-02_-_Done_With_Work_-_www.fesliyanstudios.com_-_David_Renda.mp3",
    "2019-08-09_-_Vibes_-_www.fesliyanstudios.com_-_David_Renda.mp3",
    "bensound-acousticbreeze.mp3",
    "bensound-adaytoremember.mp3",
    "bensound-allthat(1).mp3",
    "bensound-allthat.mp3",
    "bensound-anewbeginning.mp3",
    "bensound-beyondtheline.mp3",
    "bensound-cute.mp3",
    "bensound-downtown.mp3",
    "bensound-dreams.mp3",
    "bensound-dubstep.mp3",
    "bensound-endlessmotion.mp3",
    "bensound-erf.mp3",
    "bensound-goinghigher.mp3",
    "bensound-groovyhiphop.mp3",
    "bensound-happiness.mp3",
    "bensound-hipjazz.mp3",
    "bensound-house.mp3",
    "bensound-love.mp3",
    "bensound-moose.mp3",
    "bensound-retrosoul.mp3",
    "bensound-romantic.mp3",
    "bensound-rumble.mp3",
    "bensound-smallguitar.mp3",
    "bensound-sweet.mp3",
    "bensound-theelevatorbossanova.mp3",
    "bensound-thejazzpiano.mp3",
    "bensound-thelounge.mp3"
];

const createSongList = () => {
    // creates ordered list to contain list of songs
    const list = document.createElement('ol')
    // loops through each song
    for(let i = 0; i < songs.length; i++) {
        // creates list element for ol
        const item = document.createElement('li')
        // attaches the text from each individual item to list the song names
        item.appendChild(document.createTextNode(songs[i]))
        // adds each item to the ordered list
        list.appendChild(item)
    }
    
    return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText

    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing "
    document.getElementById('currentSong').innerText = clickedItem.innerText

    player.load()
    player.play()
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    } 
}

const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
    const volume = e.target.value
    player.value = volume
}

const updateProgress = () => {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}