import{anim_entete} from "./anim_entete.mjs";

let elmSec = document.getElementById('menu');

const animSec = new anim_entete(elmSec, "animNav");

animSec.anim();


let elmEntete = document.querySelector('img');
const animEntete = new anim_entete(elmEntete, "animationSection");
animEntete.anim();



//new anim
// import{anim_sec} from "./anim_entete.mjs";





