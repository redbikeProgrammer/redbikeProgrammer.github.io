// window.onscroll = function() {paralax()};
            
function paralax(){
    
    let bodyHeight = document.documentElement.scrollHeight

    // let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    let scrollY = document.documentElement.scrollTop
    scrollY = scrollY/10
    let b = document.body

    b.setAttribute("Style", "background-position-y: " + scrollY.toString() + "%");

}