// Accessing Local storage

// console.log(localStorage);

// Create
// localStorage.setItem("name", "arravind")

// Remove
// localStorage.removeItem("name")

// localStorage.setItem("name", "arravind");
// localStorage.setItem("age", "25");

// console.log(localStorage);

//  Retrive - Read

// console.log(localStorage.getItem("age"));

// console.log(localStorage.key(0));

const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
const lsOutput = document.getElementById('lsOutput');
const btnAllDelete = document.getElementById('btnAllDelete');
const autoFILL = document.getElementById('autoFILL');
const inputDelKey = document.getElementById('inputDelKey');
const btnDelete = document.getElementById('btnDelete');
const inputReadDataKey = document.getElementById('inputReadDataKey');
const btnReadData = document.getElementById('btnReadData');
const readedDataHere = document.getElementById('readedDataHere');

btnReadData.onclick = function(){
    const inputReadDataKeyNew = inputReadDataKey.value;
    const readeddData = localStorage.getItem(inputReadDataKeyNew);

    if (inputReadDataKeyNew){
        readedDataHere.innerHTML += `
        Data Value: ${readeddData}<br /><br />
        `;
    }
};

btnInsert.onclick = function(){
    const key = inputKey.value;
    const value = inputValue.value;

    // console.log(key, value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    } 
    
    else{
        alert("Must Enter Value");
    }
};

for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `<br />
    Key is: ${key} <br /><br />
    Value is: ${value}<br /><br /><br />
    `;
}

if ( localStorage.length == 0) {
    autoFILL.innerHTML += `
        Add some content
    `;
}

btnAllDelete.onclick = function(){
    localStorage.clear();
    location.reload();
};

btnDelete.onclick = function(){
    const inputDelKeyD = inputDelKey.value;

    if(inputDelKey){
        localStorage.removeItem(inputDelKeyD);
        location.reload();
    }
};