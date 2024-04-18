const scriptURL = 'https://script.google.com/macros/s/AKfycbzD1cQX0yFmctYniWpipGbG-3UeRSudmSCaHmwuU5IWSNOaBVE9z3EgoeKBu-qzE5qurw/exec'

const form = document.forms['sastha_page1']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})