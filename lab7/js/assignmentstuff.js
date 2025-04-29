// Functions, arrays, sorting
// April 2025

// sort name
function getName(userName) {
    // turn name into array
    let nameArray = userName.toLowerCase().split("");
    console.log(nameArray);

    // sort array
    let sortedArray = nameArray.sort();
    console.log(sortedArray);

    // return
    return sortedArray.join("");
};


// get name, sort name, output (attached to button)
function outputStuff() {
    let userName = window.prompt("Enter name", "Blurgle");

    // console prints
    console.log(userName);
    console.log(getName(userName));
    
    // html print
    document.getElementById("output").innerHTML = `
    <p>Input: ${userName}</p>
    <p>Output: ${getName(userName)}</p>`;
};

