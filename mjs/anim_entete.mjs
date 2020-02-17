export class anim_entete {
    constructor(elmEntete){
        this.elmEntete = elmEntete
    }

    anim(){
        console.log('animation/////')
        console.log(this.elmEntete.children[0])
        let elmTitre = this.elmEntete.children[0]
        elmTitre.classList.add('animEntete')
    }
}



// export class anim_entete {
//     constructor(elmSection){
//         this.elmSection = elmSection
//     }

//     anim(){
       
//         let elmImg = this.elmSection.children[0]
//         elmImg.classList.add('animSection')
//     }
// }