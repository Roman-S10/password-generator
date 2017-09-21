const lowercase = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','r','s',
    't','u','v','x','y','z'];

const uppercase = [
    'A','B','C','D','E','F',
    'G','H','I','J','K','L',
    'M','N','O','P','R','S',
    'T','U','V','X','Y','Z'];

const symbols = [
    '.',',','(',')','[',']',
    '!','?','&','^','%','@',
    '*','$','/','|','+','-',
    '{','}','`','~'];

const nums = ['1','2','3','4','5','6','7','8','9','0'];

let create = document.getElementById('create');

create.onclick = function(e){

    e.preventDefault();

    let password = document.getElementById('password'),
        form = document.forms.pass_options,
        pass_stuff = [];

    let getPussStuff = () =>{

        if(!form.nums.checked &
            !form.lowercase.checked &
            !form.uppercase.checked &
            !form.symbols.checked
        ){
            form.nums.checked = form.lowercase.checked = form.uppercase.checked = true;
        }

        pass_stuff = pass_stuff.concat(
            form.nums.checked ? nums : [],
            form.lowercase.checked ? lowercase : [],
            form.uppercase.checked ? uppercase : [],
            form.symbols.checked ? symbols : []
        );

        for (let i=0; i<=2; i++){
            pass_stuff = pass_stuff.concat(pass_stuff);
        }

        return pass_stuff;
    }

    let pass_lenght = parseInt(form.pass_length.value);

    let getPassword = (pass_lenght, pass_stuff) => {
        let pass = '';

        pass_stuff.sort( () => Math.random() - 0.5 );

        for (let i = 0; i < pass_lenght; i++){
            pass += pass_stuff[i];
        }

        return `<p>${pass}</p>`;
    }

    let getPasswords = (number_of_passwords, pass_lenght, pass_stuff) => {
        let result = '';

        for (let i = 0; i < number_of_passwords; i++){
            result += getPassword(pass_lenght, pass_stuff);
        }

        return result;
    }

    if(form.pass_length.value.length == 0 ){
        result = '<p>Введите длину пароля</p>';

    }else if(pass_lenght == 0){
        result = '<p>Длина пароля должна быть больше нуля</p>';

    }else if(pass_lenght <= 50){
        result = getPasswords(5, pass_lenght, getPussStuff());

    }else{
        result = '<p>Длина пароля должна быть меньше 50 символов</p>';
    }

    password.innerHTML = result;
}