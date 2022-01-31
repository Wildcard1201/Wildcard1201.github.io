const btnRotate = document.getElementById('btn-rotate')
const rotate = () => {
    btnRotate.style.transform = 'rotate(90deg)';
}

btnRotate.addEventListener('click', rotate())