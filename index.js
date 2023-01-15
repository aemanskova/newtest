let modal, overlay, errorText

window.addEventListener('load', function () {
    modal = document.getElementById('reg')
    overlay = document.getElementsByClassName('overlay')[0]
    errorText = modal.getElementsByTagName('p')[0]

    let inputs = modal.getElementsByTagName('input')

    console.log(inputs)

    Array.from(inputs).forEach((el) => {
        el.addEventListener('focusout', (event) => {
            if (validate(event.target.value, event.target.type)) {
                event.target.style.background = 'green'
            } else {
                event.target.style.background = 'red'
            }
        })
    })
})

function openModal() {
    event.preventDefault();
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
    overlay.style.display = "block"
}

function closeModal() {
    event.preventDefault();
    modal.style.display = "none"
    document.body.style.overflow = "scroll"
    overlay.style.display = "none"
}

function validate(text, type) {
    switch (type) {
        case 'text':
            if (text) {
                return true
            } else {
                errorText.innerHTML = errorText.innerHTML + '<br>' + 'Field "Name" is empty'
                return false
            }
        case 'password':
            if (text.length > 6) {
                return true
            } else {
                errorText.innerHTML = errorText.innerHTML + '<br>' + 'Password must above 6 symbols'
                return false
            }
        case 'email':
            if (text.indexOf('@') != -1) {
                return true
            } else {
                errorText.innerHTML = errorText.innerHTML + '<br>' + 'Email is not email'
                return false
            }
    }

    return true
}