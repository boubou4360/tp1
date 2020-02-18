export class anim_entete {
    constructor(elmEntete, classAnimation){

       
        this.elmEntete = elmEntete
     
        //sec
        this.classAnimation = classAnimation
       
        
    }

    anim(){
       
        console.log(this.elmEntete)

        let elmTitre = this.elmEntete
        
        this.elmEntete.classList.add(this.classAnimation)
        console.log(this.classAnimation)
        

        
    }
    
//     animSec(){
//         console.log('animationSEC')
//         //sec
//         console.log(this.elmSec.children[2])

//         let elmImg = this.elmSec
//         elmImg.classList.add('animSec')
    
// }
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