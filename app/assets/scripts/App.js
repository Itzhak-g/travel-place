import '../../assets/styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
//   import Modal from './modules/Modal'

if(module.hot) {
    module.hot.accept();
}

new MobileMenu();
// let revealOnScrol = new RevealOnScroll();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new StickyHeader();
//   new Modal();
let modal;

document.querySelectorAll(".open-modal").forEach( el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal =="undefined") {
            import (/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default;
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was aproblem"));    
        } else {
            modal.openTheModal();
        }
    })
})


