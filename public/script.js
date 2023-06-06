

function addRecoard(){
    //Get DOM Element
    const exerciseName = document.getElementById('exercise-name').value;
    const bodyPart = document.getElementById('body-part').value;
    const weight = document.getElementById('weight').value;
    const repetition = document.getElementById('repetition').value;
    const feeling = document.getElementById('feeling').value;
    const cardContainer = document.getElementById('card-container');
    //Begin to create card in html
    const card = document.createElement('div');
    card.classList.add('card');
    //Define what will be in the card
    card.innerHTML = `
      <h1>${exerciseName}</h1>
      <p>weight:${weight}kg</p>
      <p>repetition:${repetition}</p>
      <p>feeling:${feeling}</p>
    `; 
    
    cardContainer.appendChild(card);
}