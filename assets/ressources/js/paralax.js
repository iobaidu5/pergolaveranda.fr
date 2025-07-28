/* 
    Paralax, overwrites current 'transform' value, make sure to position the element using margin / absolute position
    If you want to use transform, be sure to also add the 'data-paralax-args' attribute, with all your arguments inside, so that they ain't overwritten.
*/

let items = document.getElementsByClassName('paralax');

(function createParalax(){
    determineDirection();
    document.addEventListener("scroll", () => {
        movePics();
    })
})()

function movePics(){
    for(let i = 0; i < items.length; i++){
        let offsetTop = items[i].getBoundingClientRect().y;
        if(offsetTop > 0 && offsetTop < innerHeight * 1.1){
            offsetTop -= 200;
            let args = items[i].getAttribute('data-paralax-args') || '';
            if((offsetTop / 5) > 0){
                switch(items[i].direction){
                    case 'left':
                        items[i].style.transform = args + 'translateX(' + (offsetTop / 5) + 'px)';
                        break;
                    case 'right':
                        items[i].style.transform = args + 'translateX(' + (-offsetTop / 5) + 'px)';
                        break;
                }
            }
        }
    };
}

function determineDirection(){
    for(let i = 0; i < items.length; i++){
        items[i].direction = (items[i].getBoundingClientRect().x > innerWidth / 2) ? "left" : "right";
    }
}