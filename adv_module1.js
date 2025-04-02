//Module - Commonjs, modulejs 
//Note: Module by default works on common js
var moduleVar = 44;

function moduleFunc(){
    console.log("Hello from module 1");
}

// export{moduleFunc, moduleVar};  //modulejs syntax

module.exports = {moduleFunc, moduleVar};  //commonjs syntax