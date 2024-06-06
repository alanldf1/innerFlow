function addClass(element){
    element.classList.add("appear")
}

var triggeronload = function() {
    // console.log('b')

    // findMiddleElement
    var slideRight  = document.querySelectorAll(".slide-right");
    var scale       = document.querySelectorAll(".scale");
    var float       = document.querySelectorAll(".float");
    var floatRight  = document.querySelector(".float-right");


    slideRight.forEach(slide=>{
        if (isVisible(slide)) {

            if (!slide.classList.contains('show')) {

                slide.classList.add("show");
            }
        }
    });

    scale.forEach(slide=>{
        if (isVisible(slide)) {

            if (!slide.classList.contains('show')) {

                slide.classList.add("show");
                counter();
            }
        }
    });


    float.forEach(slide=>{
        if (isVisible(slide)) {

            if (!slide.classList.contains('show')) {

                slide.classList.add("show");
            }
        }
    });

    

    if (!floatRight.classList.contains('show')) {

            floatRight.classList.add("show");
    }
      
    
    // var image = document.querySelector(".who-photo img");
    // if (isVisible(image)) {
    //     if (!image.classList.contains('show')) {

    //         image.classList.add("show");
    //     }

    // }
}

var animations = function() {
    triggeronload()
    document.addEventListener('scroll', function() {
        triggeronload()
    });
}
function isVisible(ele) {
    // console.log('a')
    const {top, bottom} = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return ((top > 0 || bottom > 0) && top <= vHeight);
}


animations();

function counter(){
    var client = 0
    var year   = 0
    
    var intervalYear = setInterval(function(){
        year++
        document.querySelector('.year-count').textContent = year
        if(year == 38) {
            clearInterval(intervalYear)
        }
    }, 70)
    
    var intervalClient = setInterval(function(){
        client++
        document.querySelector('.client-count').textContent = client
        if(client == 75) {
            clearInterval(intervalClient)
        }
    }, 35)    
}

