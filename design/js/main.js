let id = document.querySelector('.id');
let advice = document.querySelector('q');
let button = document.querySelector('button');



button.onclick = function () {


    fetch('https://api.adviceslip.com/advice').then(res => {
        let data = res.json();
        return data;
    }).then (data => {
        console.log(data.slip.id);
        console.log(data.slip.advice);
    
        advice.textContent = data.slip.advice;
        id.textContent = `Advice #${data.slip.id}`;
    })

    
}


