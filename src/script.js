var n1 = document.querySelector('#number1'); //ajuda typescript a dar um tipo
var n2 = document.querySelector('#number2');
var button = document.querySelector('#calc');
var result = document.querySelector('#result');
function calc(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function (e) {
    result.innerHTML = calc(+n1.value, +n2.value).toString();
});
function firstLetterUppercase(name) {
    var upper = name.charAt(0).toUpperCase();
    return upper + name.substring(1);
}
firstLetterUppercase('pedro');
function addUser(user) {
    if (user.age == null) {
        console.log("Ola ".concat(user.name));
    }
    else {
        console.log("Ola ".concat(user.name, " Voc\u00EA t\u00EAm ").concat(user.age));
    }
    return true;
}
var u = {
    'name': 'Pedro Daniel',
    'age': '38'
};
addUser(u);
//tipos literais nomalmente usado em union types
//so podem ser atribuidos os valores que estão no tipo
//como se fossem um tipo enum em outras linguagens
var order = 'pedding';
var calcular = function (n1, n2) {
    return n1 + n2;
};
