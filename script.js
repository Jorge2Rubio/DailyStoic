var nextButton = document.getElementById("nextBtn");

function getData(){
    fetch('https://stoic-quotes.com/api/quotes?num=1')
    .then(res => res.json())
    .then(data => data.forEach(element => {
        const markup = `<div id="quote-container">
                        <q>${element.text}</q>
                        <p><code>&#8212;</code>${element.author}</p>
                        </div>`;

        document.getElementById('output').innerHTML = markup;
    }))
    .catch(error => console.log(error));
}

nextButton.addEventListener('click', function(){
    getData();
})
document.addEventListener("DOMContentLoaded", function(event){
    getData();
})