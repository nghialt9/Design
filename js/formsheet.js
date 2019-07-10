angular.element(document).ready(function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbypDSTAmbYtigCq11ayd7oK__racFo7tI3bABeLR-fFq4vgtBo/exec'
    const form = document.forms['submit-to-google-sheet']
    form["Link"].value = window.location.href;
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    });
});