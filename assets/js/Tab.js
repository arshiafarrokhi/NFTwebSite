let _Fourth100vhCard = document.querySelectorAll('.tabAll')
let _items = document.querySelectorAll('.Fourth100vhTab')

_items.forEach((val) => {
    val.addEventListener('click', () => {
        _Fourth100vhCard.forEach((val) => {
            val.style.display = 'none'
            val.style.opacity = '0'
        })
        _items.forEach((val) => {
            val.style.background = '#120E30'
        })
        val.style.background = '#40AD9B'
        let temp = val.getAttribute('data-tab')
        document.querySelector('div#' + temp).style.display = 'flex'
        setTimeout(() => {
            document.querySelector('div#' + temp).style.opacity = '1'
        }, 10);
    })
})










