const deleteBtn = document.querySelector('button.delete');

deleteBtn.addEventListener('click', e => {
   
    const endpoint = `/recipes/${deleteBtn.dataset.doc}`;
    console.log(endpoint);

    fetch(endpoint, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((data) => window.location.href = data.redirect)
        .catch(err => console.log(err));
});