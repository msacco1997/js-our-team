const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImage = document.getElementById('image');
const addButton = document.getElementById('addMemberButton');

// Array di oggetti
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'img/angela-caroll-chief-editor.jpg',
    },

    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'img/walter-gordon-office-manager.jpg',
    },

    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'img/scott-estrada-developer.jpg',
    },

    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'img/barbara-ramos-graphic-designer.jpg',
    },
    
];
console.log(team);

// pusho il nuovo oggetto dentro all'array team usando la funzione per generare nuovi oggetti
team.push(newMember('New Member', 'Marketing Manager', 'img/new-team-member-01.jpg'));
team.push(newMember('New Member', 'Project Manager', 'img/new-team-member-02.jpg'));
team.push(newMember('New Member', 'Data Analyst', 'img/new-team-member-03.jpg'));
team.push(newMember('New Member', 'Chief Financial Officer', 'img/new-team-member-04.jpg'));
console.log(team);

// ciclo per inserire i membri nell'html in cui ad ogni giro:
  //- salvo in una variabile gli oggetti in posizione i 
  //- uso la funzione che inserisce nell'html i membri del team
for(let i = 0; i < team.length; i++){ 
  const teamMember = team[i]; 

  printMember (teamMember);
}

// quando clicco sul bottone add inserisco una nuova persona usando la funzione che ho creato apposta
addButton.addEventListener('click', function(){
  addNewMember ();
})


//funzione che crea un nuovo oggetto e mi ritorna il nuovo oggetto ------------
function newMember(nome, ruolo, foto) {
  // creo un nuovo oggetto
  const teamMember = {
      name: nome,
      role: ruolo,
      image: foto,
  }

  return teamMember;
}

// funzione per inserire gli ogetti nell'html ------------
function newCard(teamMember) {
    const name = teamMember.name; 
    const role = teamMember.role;
    const image = teamMember.image;

    return `<div class="team-card">
                <div class="card-image">
                    <img
                        src="${image}" 
                    />
                </div>
                <div class="card-text">
                    <h3>${name}</h3>
                    <p>${role}</p>
                </div>
            </div>`;   
}

//funzione che inserisce nell'html i membri del team ------------
function printMember (teamMember) {
  //creo una card usando la funzione apposita e passandole la costante teamMember
  const teamCard = newCard(teamMember); 

  //inserisco la teamCard nel teamContainer in HTML
  teamContainer.innerHTML += `${teamCard}`;
  console.log(teamContainer);
}

//funzione che legge gli input dal form e aggiunge un nuovo membro ------------
function addNewMember () { 
  const name = inputName.value;
  const role = inputRole.value;
  const image = inputImage.value;

  //controllo se il form è stato compilato correttamente, quindi se anche solo uno dei campi è vuoto allora compare un alert per avvisare l'utente
  if ( !name || !role || !image){
    alert('Attention! The form was not filled in corretly... Try Again!');
    return;
  }

  // creo un nuovo oggetto inserendo i nuovi dati nell'array di oggetti usado la funzione apposita
  const newTeamMember = newMember(name, role, image);

  // creo una nuova card con i dati del nuovo membro
  newCard(newTeamMember);

  // stampo nell'html
  printMember (newTeamMember);
}