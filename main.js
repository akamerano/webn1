class animal{
    constructor(rasa, culoare, virsta, ener, foame){
    this.rasa = rasa;
    this.culoare = culoare;
    this.virsta = virsta;
    this.ener=ener;
    this.foame = foame;
    }
    maninca(){
       this.foame = 0;
       console.log("Buldogul e satul")
       this.misca();
    }
    misca(){
        if(this.foame >= 3){
            console.log("Buldog nu vrea sa se miste")
            this.maninca();
        }else{
            console.log("Buldog se misca")
            this.ener = 0;
        }
    }
    doarme(){
        console.log("Buldog doarme")
    }
}
window.onload = function(){

    let dog = new animal('Buldog', 'alb', '7', 5, 10)
    dog.maninca();
    dog.misca();
    dog.doarme();
}