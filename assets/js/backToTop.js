// Get the button:
let _button = document.getElementsByClassName("backToTopButton")[0];

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll' , ()=>{
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {

        _button.classList.add('backToTopButtonClass')
        
    }else{

        _button.classList.remove('backToTopButtonClass')
    }
})

_button.addEventListener("click" , ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})