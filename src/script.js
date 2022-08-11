const infoButton = document.getElementById('info-button')
let info = document.getElementById('info-content')
let showInfo = false;

infoButton.addEventListener('click', toggleInfo)

function toggleInfo() {
    if (showInfo === false) {
        info.style.display = 'block'
        showInfo = true
        console.log('hey I showed the info')
    } else {
        info.style.display = 'none'
        showInfo = false
        console.log('hey I hid the info')
    }

}