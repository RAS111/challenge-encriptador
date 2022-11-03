const textEncryptor = document.querySelector(".text-encryptor");
const message = document.querySelector(".message");
const infoContainer = document.querySelector(".info-container");
const messageContainer = document.querySelector(".message-container");

function btnEncrypt() {
    
    if(!validateInput()) {
        const encryptedText = encrypt(textEncryptor.value);
        message.value = encryptedText;
        textEncryptor.value = "";
        infoContainer.style.display = "none";
        messageContainer.style.display = "flex";
    }

}

function encrypt(encryptedString) {
    
    let encryptionCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < encryptionCode.length; i++){

        if(encryptedString.includes(encryptionCode[i][0])) {
            encryptedString = encryptedString.replaceAll(encryptionCode[i][0], encryptionCode[i][1]);
        }
    }
    return encryptedString;

}

function validateInput() {

    let words = document.querySelector(".text-encryptor").value;
    let validate = words.match(/^[a-z]*$/);

    if(!validate || validate.length === 0) {
        alert("Caracteres no permitidos");
        location.reaload();
        return true;
    }
}

function btnDecrypt() {
    
    if(!validateInput()) {
        const decryptText = decrypt(textEncryptor.value);
        console.log(decryptText);
        message.value = decryptText;
        textEncryptor.value = "";
        infoContainer.style.display = "none";
        messageContainer.style.display = "flex";
    }

}


function decrypt(decryptString) {

    let decryptCode = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    decryptString = decryptString.toLowerCase();

    for (let i = 0; i < decryptCode.length; i++){

        if(decryptString.includes(decryptCode[i][0])) {
            decryptString = decryptString.replaceAll(decryptCode[i][0], decryptCode[i][1]);
        }
    }
    return decryptString;

}

function copy() {

    message.select();
    message.setSelectionRange(0, 99999);
    document.execCommand('copy');
    messageContainer.style.display = "none";
    infoContainer.style.display = "flex";

}   