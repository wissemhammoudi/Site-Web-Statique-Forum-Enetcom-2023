const scriptURL = "https://script.google.com/macros/s/AKfycbwVCu9YKT1zMjD3LDLWPsLOoxSBfdkAhws0FHfl62kdEe3zgRvRjchU0M1mr-LCVU2J/exec"
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => { window.location.href = "./succes-register.html";})
        .catch(error => console.error('ERROR!', error.message))
})