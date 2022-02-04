let musicDB = [
    {title: 'A horse with no name', author: 'America', src:'musicas/America - A horse with no name _clip HQ_.mp3'},
    {title: 'Mrs Robinson', author: 'Simon & Garfunkel', src:'musicas/Simon & Garfunkel - Mrs_ Robinson _Audio_.mp3'},
    {title: 'The sound of silence', author: 'Simon & Garfunkel', src:'musicas/Simon & Garfunkel - The Sound of Silence - Madison Square Garden_ NYC - 2009_10_29&30.mp3'},
    {title: 'Simple man', author: 'Lynyrd Skynyrd', src:'musicas/Simple Man - Lynyrd Skynyrd - Lyrics HD.mp3'}
]

function playSong() {
    music.play()
}

function pauseSong(){
    music.pause()
}

function songAtributes(indexMusicDB){
    music.setAttribute('src', musicDB[indexMusicDB].src)
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musicDB[indexMusicDB].title
        authorName.textContent = musicDB[indexMusicDB].author
        musicTime.textContent = secondsOfMinutes(Math.floor(music.duration))
    })
}

function timeProgress(){
    let songProgress = document.querySelector('progress')
    songProgress.style.width = Math.floor((music.currentTime / music.duration)*100) + '%'
    let elapseTime = document.querySelector('.start')
    elapseTime.textContent = secondsOfMinutes(Math.floor(music.currentTime))
}

function secondsOfMinutes(seconds){
    let minutesPlace = Math.floor(seconds/60)
    let secondsPlace = seconds % 60
    if(secondsPlace < 10) {
        secondsPlace = '0' + secondsPlace
    }
    return minutesPlace + ':' + secondsPlace
}

let music = document.querySelector('audio')
let musicTime = document.querySelector('.end')
let musicName = document.querySelector('.song-author h2')
let authorName = document.querySelector('.song-author i')
let indexSong = 0

document.querySelector('.play').addEventListener('click', playSong)

document.querySelector('.pause').addEventListener('click', pauseSong)

document.querySelector('.previous').addEventListener('click', () => {
    indexSong--
    if(indexSong < 0){
        indexSong = 3
    }
    songAtributes(indexSong)
})

document.querySelector('.next').addEventListener('click', () => {
    indexSong++
    if(indexSong > 3) {
        indexSong = 0
    }
    songAtributes(indexSong)
})

music.addEventListener('timeupdate', timeProgress)
songAtributes(indexSong)