let gen1 = document.getElementById("gen1")
let gen2 = document.getElementById("gen2")
let gen3 = document.getElementById("gen3")
let gen4 = document.getElementById("gen4")
let pw_len = document.getElementById("pass-len")




function randPass(pass_len){
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (let i = 1; i <= pass_len; i++) {
                var char = Math.floor(Math.random()*str.length);
                  pass += str.charAt(char)
            }
    
        return pass
}

function genPass(){
    
   let len = pw_len.value
    
    gen1.textContent = randPass(len)
    gen2.textContent = randPass(len)
    gen3.textContent = randPass(len)
    gen4.textContent = randPass(len)
    
    
}


