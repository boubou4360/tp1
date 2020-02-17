export class anim_entete {
    constructor(elmEntete, elmSec){
        this.elmEntete = elmEntete

        //sec
        this.elmSec = elmSec
        
    }

    anim(){
        console.log('animation/////')
        console.log(this.elmEntete.children[0])
        let elmTitre = this.elmEntete.children[0]
        elmTitre.classList.add('animEntete')


        //sec
        let elmImg = this.elmSec.children[0]
        elmImg.classList.add('animSec')
    }
}


// export class anim_sec {
//     constructor(elmSec){
//         this.elmSec = elmSec
//     }

//     anim(){
//         console.log('anim2')
   
//         let elmImg = this.elmSec.children[0]
//         elmImg.classList.add('animSec')
//     }
// }