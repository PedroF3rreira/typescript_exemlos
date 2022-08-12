var n1 = document.querySelector('#number1') as HTMLInputElement;
var n2 = document.querySelector('#number2') as HTMLInputElement;
var button = document.querySelector('#calc') as HTMLElement;
var result = document.querySelector('#result') as HTMLElement;

function calc(n1: number, n2: number) {
    return n1 + n2;
}

button.addEventListener('click', (e) => {
    
    result.innerHTML = calc(+n1.value, +n2.value).toString();
});

function firstLetterUppercase(name: string): string{
    let upper = name.charAt(0).toUpperCase();
    return upper+name.substring(1);
}

firstLetterUppercase('pedro');   
//type personalizado
type User = {
    'name' : string,
    'age' : number | string
};

//interface pode ser modificada em outra parte do codigo
interface UserTwo{
    'name' : string,
    'age' : number | string
}

interface UserTwo{
    'altura' : 1.98
}


function addUser(user: User): boolean {
    if(user.age == null){
        console.log(`Ola ${user.name}`);
    }
    else{
        console.log(`Ola ${user.name} Você têm ${user.age}`);
    }

    return true;
}

let u = {
    'name': 'Pedro Daniel',
    'age' : '38'
}
addUser(u);

//tipos literais nomalmente usado em union types
//so podem ser atribuidos os valores que estão no tipo
//como se fossem um tipo enum em outras linguagens
let order: 'complete' | 'pedding' | 'deleted' = 'pedding';

//types para funçoes
//evita repetição de configuração de tipos nas funçoes
//como se fosse um padão para a função seguuir com uma interface
type Mathcalc = (n1: number, n2: number) => number;

let calcular: Mathcalc = (n1, n2) =>{
    return n1 + n2;
}