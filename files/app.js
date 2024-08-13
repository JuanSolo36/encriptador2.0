function encryption(word) {
  const conversions = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  let convertedWord = "";
  for (let char of word) {
    if (conversions[char]) {
      convertedWord += conversions[char];
    } else {
      convertedWord += char;
    }
  }
  return convertedWord;
}

function decryption(encryptedWord) {
  const conversions = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let decryptedWord = encryptedWord;
  for (let key in conversions) {
    decryptedWord = decryptedWord.split(key).join(conversions[key]);
  }
  return decryptedWord;
}

function display() {
  const text = document.getElementById("text-input-left");
  const encryptButton = document.getElementById("encrypt-button");
  const textRight = document.getElementById("text-input-right-two");
  const contRightOne = document.querySelector(".cont-right-one");
  const contRightTwo = document.querySelector(".cont-right-two");

  encryptButton.addEventListener("click", function () {
    if (text.value.length > 0) {
      textRight.value = text.value;
      contRightOne.style.display = "none";
      contRightTwo.style.display = "";
    } else {
      contRightOne.style.display = "block";
      contRightTwo.style.display = "none";
    }
  });
}

function copy() {
  const textToCopy = document.getElementById("text-input-right-two").value;

  navigator.clipboard.writeText(textToCopy);
}

// Inicializar la funcionalidad
document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función display para manejar la visibilidad del elemento
  display();

  // Añadir event listeners para los botones de encriptar y desencriptar
  document.getElementById("encrypt-button").addEventListener("click", () => {
    const inputText = document.getElementById("text-input-left").value;
    const encryptedText = encryption(inputText);
    document.getElementById("text-input-right-two").value = encryptedText;
  });

  document.getElementById("decrypt-button").addEventListener("click", () => {
    const inputText = document.getElementById("text-input-left").value;
    const decryptedText = decryption(inputText);
    document.getElementById("text-input-right-two").value = decryptedText;
  });
  // Añadir event listener para el botón de copiar
  document.getElementById("copy-button").addEventListener("click", () => {
    copy();
  });
});
