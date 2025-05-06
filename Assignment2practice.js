function quoteLoad(){
    const quoteSelect = document.getElementById('quoteInspire');
    const sourceSelect = document.getElementById('sourceInspire');
    fetch('https://zenquotes.io/api/random/')
    .then((result) => result.json())
    .then((resultJson)=>{
    
        console.log(resultJson);
        console.log(resultJson[0].q);
     
        quoteSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].q));
        sourceSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].a));

       
    });
}

window.onload = quoteLoad();