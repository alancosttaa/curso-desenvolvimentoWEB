
/* Conceito var em looping. Var não possui escopo de bloco, então uma vez declarada, ela ficará visível a todo o programa, de forma global. 

*/

for(var x = 0; x < 10; x ++) {
    console.log(x);
}

console.log("x = " + x);


const func = [];

for (var i = 0; i < 10; i++){
    func.push(function(){
       console.log(i);
    });

}

func[2]();
func[8]();