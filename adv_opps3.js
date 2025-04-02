//Prototype

// behind the scene all are come from '[Prototype]:Object'

Object.prototype.ankit = function(){
    console.log(`ankit is present in all objects`);
}  //-> its provide the power - array,object,strings....

Array.prototype.barik = function(){
    console.log(`barik says hello`);
}  //-> //-> its provide the power only array


let heros = ['spider','thor']
let heroPower = {
    thor: 'hammer',
    spider: 'sling',
    getspiderPower: function(){
        console.log(`Spidy power : ${this.spider}`)
    }
}


heros.ankit()
heroPower.ankit()


heros.barik()
// heroPower.barik()



//

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

let user1 = 'admin1    '
let user2 = 'admin2    '

user1.trueLength()
user2.trueLength()
'admin1'.trueLength()
'admin2'.trueLength()

