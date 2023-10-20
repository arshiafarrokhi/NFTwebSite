let _hamIcon = document.querySelector('.hamIcon')
let _navHamb = document.querySelector('.navHamb')
let _body = document.getElementById('body')
_hamIcon.addEventListener('click', () => {
    _navHamb.classList.toggle('hambmenu')
})

function removeHamb(){
    _navHamb.classList.remove('hambmenu')
}