

/*


Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.


*/

function extractLanguage(code){
    return code.split("_")[0];

}

