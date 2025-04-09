// Solution

function stockList(books, categories) {
    // Проверка на присутствие книг
     if (books.length === 0 || categories === 0) {
        return '';
     }
    // Создание обьекта совпадений
    let res = {};
    
    categories.forEach((elem) => res[elem] = 0);
    let list = Object.keys(res);
    books.forEach((elem) => {
        let [code, count] = elem.split(" ");
        list.forEach((e) => {if (code.startsWith(e) !== false) {res[e] += parseInt(count)}});
    });

    // Вывод обьекта в строку
    const catDescr = categories.map(category => {
        return `(${category} : ${res[category]})` ;
    });
      
    return catDescr.join(' - ');
}
// or

// function stockList(books, categories) {
//     // Создание обьекта совпадений
//     let res = {};
//     categories.forEach((elem) => res[elem] = 0);
//     let list = Object.keys(res);
//     books.forEach((elem) => {
//         let letters = elem.split(" ");
//         list.forEach((e) => {if (letters[0].startsWith(e) !== false) {res[e] += parseInt(letters[1])}});
//     });
//     // Проверка на присутствие книг
//     count = 0;
//     for(let i = 0; i < categories.length; i++){
//         if (res[list[i]] !== 0) {
//             count++;
//             break
//         }
//     }
//     if (count === 0) {
//         return '';
//     }
//     // Вывод обьекта в строку
//     return JSON.stringify(res)
//         .replaceAll("\,", "\) \- \(")
//         .replaceAll("\"", "")
//         .replaceAll("\:", " \: ")
//         .replaceAll("\{", "\(")
//         .replaceAll("\}", "\)");
// }