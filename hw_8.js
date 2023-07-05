// Part I
window.addEventListener('DOMContentLoaded', () =>{
    const inputPrice = document.createElement('input');

    inputPrice.type = "number";
    inputPrice.placeholder = "Price";

    const divPrice = document.getElementById('price')
    divPrice.append(inputPrice)

    inputPrice.addEventListener("focus", function() {
        this.style.border = '2px solid green';
    });

    inputPrice.addEventListener("blur", function() {
        this.style.border = '';

        const divInfo = document.createElement('div');
        divPrice.append(divInfo)

        if (!document.querySelector('span') && inputPrice.value!==''&& inputPrice.value>0) {
            const span = document.createElement('span');
            const price = inputPrice.value;
            inputPrice.style.backgroundColor = 'green'
            span.textContent = `Текущая цена: ${price}`;
            const clearButton = clearSpan(inputPrice, span, divInfo)
            divInfo.append(span);
            divInfo.append(clearButton);
        }
        if(inputPrice.value<0){
            this.style.border = '2px solid red';
            const span = document.createElement('span');
            span.textContent = `Пожалуйста введите корректную цену`;
            const clearButton = clearSpan(inputPrice, span, divInfo)
            divInfo.append(span);
            divInfo.append(clearButton);
        }

    });
})

const clearSpan = (inputField, elementToRemove, parentElement) =>{
    const clearButton = document.createElement('button');
    clearButton.textContent = 'X';
    clearButton.addEventListener('click', () =>{
        parentElement.remove(elementToRemove);
        parentElement.remove(clearButton)
        inputField.value = ''
        inputField.style.backgroundColor = ''
    });
    return clearButton
}

// Part II