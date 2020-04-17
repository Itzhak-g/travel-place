import '../../assets/styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

if(module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu();
// let revealOnScrol = new RevealOnScroll();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let stickyHeader = new StickyHeader();


