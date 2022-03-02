
console.log('hello world')


const residentsBtn = document.querySelector('#residents')

const baseURL = 'https://swapi.dev/api'

function getResidents (event) {
    event.preventDefault()

    axios.get(`${baseURL}/planets/2`)
        .then(res => {
          for(let i = 0; i < res.data.residents.length; i++) {
            axios.get(`${res.data.residents[i]}`)
            .then(res => {
                const header = document.createElement('h2')
                header.textContent = res.data.name
                document.querySelector('body').appendChild(header)
            })
          }
        })
        .catch(error => {
            console.log(error)
        })

    console.log('button clicked')
}

residentsBtn.addEventListener('click', getResidents)

