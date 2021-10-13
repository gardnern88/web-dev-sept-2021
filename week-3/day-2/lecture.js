function changeClass() {
    var h1s = document.getElementsByTagName("h1");
    var firstH1 = h1s[0];​
    console.log(firstH1.className); // ['pink', 'header', 'underline']
    ​
    firstH1.className.unshift();​
    firstH1.className.push("blue");​
    console.log(firstH1.className); // ['header', 'underline', 'blue']
}