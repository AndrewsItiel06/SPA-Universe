import { Router } from "./router.js";
import { activeMenu } from "./menu.js";


const router = new Router();
const body = document.querySelector('body')
const button = activeMenu(body);


router.add("#home" , "/pages/home.html")
router.add("#universe" , "/pages/universe.html")
router.add("#exploration" , "/pages/exploration.html")

router.handle()

window.location= "#home";
window.onpopstate = () => router.handle()
window.router = () => router.router()
button.active()

window.onhashchange = () =>{button.active()}
body.addEventListener("click" , () => {button.active()})
