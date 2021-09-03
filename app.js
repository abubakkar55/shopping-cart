const caseInput = document.getElementById("case-input");
const caseIncre = document.getElementById("case-increase");
const caseDecre = document.getElementById("case-decrease");
const casePrice = document.getElementById("case-price");
const phoneInput = document.getElementById("phone-input");
const phoneIncre = document.getElementById("phone-increase");
const phoneDecre = document.getElementById("phone-decrease");
const phonePrice = document.getElementById("phone-price");
const totalPrice = document.getElementById("total-price");
const tax = document.getElementById("tax");

const subTotalPrice = document.getElementById("sub-total-price");
const removeItemBtns = document.getElementsByClassName("remove-item");

for(const item of removeItemBtns){
    item.style.cursor = "pointer";
item.addEventListener("click", function () {
   item.parentNode.parentNode.parentNode.remove();
});
}


/* function () {
    const increValue = parseInt(caseInput.value) + 1;
    caseInput.value = increValue;
});

caseIncre.addEventListener("click",
caseDecre.addEventListener("click", function () {
  if (caseInput.value > 0) {
    const increValue = parseInt(caseInput.value) - 1;
    caseInput.value = increValue;
  } else {
      console.log("sorry")
  }
});
*/

function updateProducts(inputBtn, inputField, item, itemPrice, isIncrease) {
    inputBtn.addEventListener("click", function () {
        if (isIncrease == true) {
            // increase the products item
            inputField.value = parseInt(inputField.value) + 1;

        } else if (inputField.value > 0) {
            // decrease the products item
            inputField.value = parseInt(inputField.value) - 1;
        }

        // products price increasing & decreasing according to user quantity
        item.innerText = itemPrice * inputField.value;
        // show the total price by
        getTotal();
    });
};


// sub total calculation

function getTotal() {
    const phoneTotal = parseFloat(phonePrice.innerText);
    const caseTotal = parseFloat(casePrice.innerText);
    const subTotal = phoneTotal + caseTotal;

    // show the total price
    totalPrice.innerText = subTotal;

    // shoe the tax
    const taxes =  subTotal / 15;
    tax.innerText = taxes.toFixed(2); 

    // show the final result
    const finalPrice = subTotal + parseFloat(tax.innerText);
    subTotalPrice.innerText = finalPrice 
}

// call the function on your website products item

updateProducts(caseIncre, caseInput, casePrice, 59, true);
updateProducts(caseDecre, caseInput, casePrice, 59, false);

updateProducts(phoneIncre, phoneInput, phonePrice, 1219, true);
updateProducts(phoneDecre, phoneInput, phonePrice, 1219, false);