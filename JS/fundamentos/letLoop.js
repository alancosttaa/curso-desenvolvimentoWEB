
/*
 Já o let possui escopo de bloco, ou seja, uma vez declarada dentro de um bloco, ela só ficará visível dentro deste bloco
*/


for(let x = 0; x < 10; x++){
    console.log(x);
}

//console.log("x = " + x); // aqui irá dar erro, pois ele nao reconhecerá este x q foi declarado dentro do bloco


const func = [];

for (let i = 0; i < 10; i++){
    func.push(function(){
       console.log(i);
    });

}

func[2]();
func[8]();