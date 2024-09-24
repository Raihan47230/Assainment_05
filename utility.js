function getInputValus(id){
     const inputValue= document.getElementById(id).value
     const inputNumber=parseFloat(inputValue)
     return inputNumber
}
//  }
function amount(id){
    const totalAmountCush= document.getElementById(id).innerText
    const convertNumbers =parseFloat(totalAmountCush)
    return convertNumbers
}
