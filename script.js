console.log("Testing...")
// to control sidebar
document.querySelector(".inout").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");

})

// to get the response of contact form in google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwNYe6_aozIExS3YFhzrcBiacHhEsgkQqxQV8Nu2lJ38_XAURZblGfi0Y_bok6rdRRs_w/exec'
const form = document.forms['submit-to-google-sheet']
const messageResponse = document.getElementById("respo")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            messageResponse.innerHTML = "Message sent sucessfully"
            setTimeout(function () {
                messageResponse.innerHTML = ""
            }, 2000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
