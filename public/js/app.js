const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault()
    messageOne.textContent = 'Thinking..'
    messageTwo.textContent = ''

    fetch(`/weather?address=${search.value}`).then((response) => {
    response.json().then((data)=> {
        if (data.error) {
            messageTwo.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
             
     })
    })
    
})