async function getDogs() {
    var idTracker = 1;
    const dogUrl = [];
    for (let imageIterator=0; imageIterator < 10; imageIterator++) {
       
       
        const dogData = await fetch('https://dog.ceo/api/breeds/image/random').then(
            (result) => result.json()
          );
         
        dogUrl.push(dogData.message);
        var a1 = dogUrl[imageIterator];
        const image = document.getElementById("image"+idTracker);
        image.src = a1;
        console.log(dogUrl);
        idTracker++;
    }
  
    return dogUrl;
}
async function dogButtons() {
    const dogInfo = await fetch('https://dogapi.dog/api/v2/breeds').then((result) =>
      result.json()
    );
    console.log(dogInfo);
    const dogName = [];
    const dogDescription = [];
    const dogMinLife = [];
    const dogMaxLife = [];
    const productTable = document.getElementById('dogTable');
    for (let detailIterator=0; detailIterator < dogInfo.data.length; detailIterator++) {
         dogName.push(dogInfo.data[detailIterator].attributes.name);
         dogDescription.push(dogInfo.data[detailIterator].attributes.description);
         dogMinLife.push(dogInfo.data[detailIterator].attributes.life["min"]);
         dogMaxLife.push(dogInfo.data[detailIterator].attributes.life["max"]);
         const buttonRow = document.createElement('tr');
         const buttonDetail = document.createElement('td')
         const buttons = document.createElement('button');
         buttons.innerHTML = dogName[detailIterator];
         
         buttons.onclick = function(){
            document.getElementById('infoBox').style.visibility='visible';
            document.getElementById("boxName").insertAdjacentText('beforeend', dogName[detailIterator]);
            document.getElementById("boxDescription").insertAdjacentText('beforeend', dogDescription[detailIterator]);
            document.getElementById("boxMin").insertAdjacentText('beforeend', dogMinLife[detailIterator]);
            document.getElementById("boxMax").insertAdjacentText('beforeend', dogMaxLife[detailIterator]);
         };
         
       
         buttonDetail.appendChild(buttons);
         buttonRow.appendChild(buttonDetail);
         productTable.append(buttonRow)


       
    }
    console.log("hello"+dogName);
    console.log("hello"+dogDescription);
    console.log("hello"+dogMinLife);
    console.log("hello"+dogMaxLife);
    
  
  }
  
  
  
window.addEventListener('load', getDogs);
window.addEventListener('load', dogButtons);