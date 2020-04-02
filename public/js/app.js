console.log('Client side js loaded')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const locationTitle = document.querySelector('#locationTitle')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    messageTwo.textContent = 'Loading ...'

    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = 'error: ' + data.error
                messageTwo.textContent = ''
                locationTitle.textContent = ''
            } else {
                locationTitle.textContent = data.location
                messageTwo.textContent = data.forecast
                messageOne.textContent = ''
            }
    })
})
})