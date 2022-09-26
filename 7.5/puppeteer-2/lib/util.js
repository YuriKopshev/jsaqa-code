module.exports = {
  generateName: function (length) {
    let name = ""; //здесь будем хранить результат
    let chars = "abcdefgABCDEFG1234567890"; //возможные символы
    let charLength = chars.length; //определяем длину
    for (let i = 0; i < length; i++) {
      //запускаем цикл для формирования строки
      name += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return name;
  },
  generateRandomInt(from = 1, to = 10) {
    const row = Math.floor(Math.random() * 10 + 1);
    const place = Math.floor(Math.random() * 10 + 1);;
    return {row, place};
}
};
