import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor (els, thresholdPercent) {
        // this.itemsToReveal = document.querySelectorAll(".feature-item");
        this.itemsToReveal = els;
        this.thresholdPercent = thresholdPercent;
        this.browserHeight = window.innerHeight;
        this.hideInitialy();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);   // fires every 200 ms
        this.events();
    }

    events () {
        window.addEventListener("scroll", this.scrollThrottle);    // you should not put prentisis () after the function name.
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran");
            this.browserHeight = window.innerHeight;    // updatingn the already calcalated value of browser height
        }, 333 ))
    }

    calcCaller() {
        console.log("scroll function ran");
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        })
    }

    calculateIfScrolledTo(el) {
        /*  console.log(el.getBoundingClientRect().y);  */
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("Element was calculated");
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
            if (scrollPercent < this.thresholdPercent) {                  // 75
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            } 
        }
    }

    hideInitialy () {
        /* this.itemsToReveal.forEach(function(el) {
            el.classList.add("reveal-item");
        })  */
        this.itemsToReveal.forEach( el => { 
            el.classList.add("reveal-item");
            el.isRevealed = false;
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
    
}


export default RevealOnScroll;