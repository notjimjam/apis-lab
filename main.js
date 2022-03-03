
console.log('hello world')


const residentsBtn = document.querySelector('#residents')

const baseURL = 'https://swapi.dev/api'

function getResidents (event) {
    event.preventDefault()

    axios.get(`${baseURL}/planets/?search=alderaan`)
        .then(res => {
          let resArr = res.data.results[0].residents
          for(let i = 0; i < resArr.length; i++) {
            axios.get(resArr[i])
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



