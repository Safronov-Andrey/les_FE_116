//first task for lms
let money = Number(prompt ('Введіть суму вкладу:'));
if (typeof(money) == 'number') {
  let percent = (5 / 100) * money * 2;
  alert('Нараховані відсотки за вкладом:' + ' ' + percent);
} else {
  alert('Введіть корректну сумму');
}

/*second task for lms
answer in the comments*/
console.log(2 && 0 && 3); // 0 якщо хоч один false то видасть значення false

console.log(2 || 0 || 3); // 2 виведе перше значення true, інші умови не перевіряються

console.log(2 && 0 || 3); // 3 виведе true якщо хоч одна умова верне true

//console.log("test") console.log(123) тут буде помилка

function click(){
  var element = document.getElementsByClassName('className').innerHTML="<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>";
}
click();

