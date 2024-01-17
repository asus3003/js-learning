// 2-11 задачи по логическим операторам || && ! задача 5

/*
let age = prompt('введите число от 14 до 90 :','14-90');
if (age >= 14 && age <= 90) {
    console.log(age);
} else 
{
console.log("Вы ввели число не из диапазона 14-90");
}
*/

// 2-11 задачи по логическим операторам || && ! задача 6-a
/*
let age = prompt("введите число вне диапазона 14-90");
if(!(age >=14 && age <=90)) 
    {
    console.log(age);
    }
else 
    {
        console.log('ввели число из диапазона 14-90');
    }*/

    // 2-11 задачи по логическим операторам || && ! задача 6-b
    /*
    let age = prompt("Введите число вне диапазона 14-90", '');
    if(age < 14 || age > 90) 
        {
            console.log(age);
        }
    else 
        {
            console.log("Ввели число из диапазона 14-90");
        }
    */
   // 2-11 задачи по логическим операторам || && ! задача 7
        // мой вариант:
   /*
   let login = prompt("Кто там?","");
   if(login == null) {
    alert('Отменено');
   } 
   else 
        if(login !== "Админ") 
        {
            alert("Я Вас не знаю");
        }
    else 
        {
            login = prompt('Пароль?',"");
            if(login == null) 
            {
                alert('Отменено');
            }
             else if(login !== 'Я главный') 
            {
                alert('Неверный пароль');
            }
            else 
            {
                alert('Здравствуйте!');
            }
        }
        */
       //Вариант сайта learnjavascript.ru

       let userName = prompt('Кто там?','');
       if(userName === 'Админ') 
       {
            let pass = prompt('Пароль?','');
            if(pass === 'Я главный')
            {
                alert('Здравствуйте!');
            }
            else if (pass === '' || pass === null) {
                alert('Отменено');
            } else {
                alert('Неверный пароль');
            }
       }else if(userName === '' || userName === null) {
        alert('Отменено');
       } else {
        alert('Я вас не знаю');
       }
