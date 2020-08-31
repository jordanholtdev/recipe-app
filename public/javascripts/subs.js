const form = document.querySelector('form');
const alertDiv = document.querySelector('.alert');
const API_URL = 'http://localhost:3000/subscribe'

alertDiv.style.display = 'none';

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    const name = formData.get('inputName');
    const email = formData.get('inputEmail');

    const sub = {
        name,
        email
    };

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(sub),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
       if(data.error) {
           alertDiv.style.display = '';
           alertDiv.innerText = `${data.error[0].param}: ${data.error[0].msg}`
       } else {
           window.location.href = data.redirect;
       }
    })
    .catch(err => console.log(err))

    form.reset();
});