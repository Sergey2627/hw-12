function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/g, '').toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

const inputString = prompt("Введіть слово або фразу для перевірки на паліндром:");
if (inputString) {
  if (isPalindrome(inputString)) {
    alert(`Рядок "${inputString}" є паліндромом.`);
  } else {
    alert(`Рядок "${inputString}" не є паліндромом.`);
  }
} else {
  alert("Ви не ввели рядок для перевірки.");
}