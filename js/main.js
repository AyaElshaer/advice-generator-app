const advice = document.querySelector('.advice');
const adviceId = document.querySelector('#advice-id');
const button = document.querySelector('.btn')


function handleAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        advice.innerHTML =  ' " ' +  data.slip.advice + ' " ' ;
        adviceId.innerHTML =  data.slip.id;

    })
}

button.addEventListener('click' , handleAdvice)

handleAdvice()