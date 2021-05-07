/*

Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

*/

function capitalizes(string){
    let wordsArr = string.split(" ");
    let capitalizedSentence = [];
    for (let i=0; i<wordsArr.length; i++){
        let capWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
        capitalizedSentence.push(capWord);
    }
    return capitalizedSentence.join(" ")
}
