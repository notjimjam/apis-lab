// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const axios = require("axios")

console.log('hello world')


const residentsBtn = document.querySelector('#residents')

// const baseURL = 'https://swapi.dev/api'

function getResidents (event) {
    // event.preventDefault()

    axios.get('https://swapi.dev/api')
        .then(res => {
          console.log(res.data)  
        })
        .catch(error => {
            console.log(error)
        })

    console.log('button clicked')
}

residentsBtn.addEventListener('click', getResidents)

axios.get('https://swapi.dev/api')
    .then(res => {
        console.log(res.data)
    })
