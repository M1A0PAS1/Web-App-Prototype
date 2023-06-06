

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
      <p>Weight: ${weight}kg</p>
      <p>Repetition:${repetition}</p>
      <p>Feeling:${feeling}</p>
    `; 
    
   
    cardContainer.appendChild(card);

    //For the print card detail & summary
    card.setAttribute('data-exercise-name', exerciseName);
    card.setAttribute('data-body-part', bodyPart);
    card.setAttribute('data-weight', weight);
    card.setAttribute('data-repetition', repetition);
    card.setAttribute('data-feeling', feeling);

    //Call the save data to local function
    saveData();
}

function saveData(){
    //Select all card
    const cards = document.querySelectorAll('.card');
    const dataSet = [];
    cards.forEach((card) => {
        const exerciseName = card.getAttribute('data-exercise-name');
        const bodyPart = card.getAttribute('data-body-part');
        const weight = card.getAttribute('data-weight');
        const repetition = card.getAttribute('data-repetition');
        const feeling = card.getAttribute('data-feeling');
         //add data to the list
        dataSet.push({
            exerciseName,
            bodyPart,
            weight,
            repetition,
            feeling,})});
    //Save to local storage
    localStorage.setItem('exerciseData', JSON.stringify(dataSet));
}

function showSummary(){
    const summarycontainer = document.getElementById('summary');
    //get exerciseData from localStorage
    const data = JSON.parse(localStorage.getItem('exerciseData'));
    if (data){
        let summary = ' ';
        //add every exerciseName,bodyPart ect. to the summary variable
        data.forEach(function(recoard){
            summary += '<div>';
            summary += '<h1>' + recoard.exerciseName + '</h1>';
            summary += '<p>' + recoard.bodyPart + '</p>';
            summary += '<p>' + recoard.weight + '</p>';
            summary += '<p>' + recoard.repetition + '</p>';
            summary += '<p>' + recoard.feeling + '</p>';
            summary += '</div>';
        })
        summarycontainer.innerHTML = summary;
    }

}