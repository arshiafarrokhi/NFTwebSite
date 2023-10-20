let _navbar = document.getElementsByClassName('_navbar')[0]

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 400) {
        _navbar.classList.add('fixed-top');
        navbar_height = document.getElementsByClassName('_navbar')[0].offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        _navbar.classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
    }
});