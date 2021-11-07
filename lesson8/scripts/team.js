let nextBTN = document.querySelector('#nextBTN');
let prevBTN = document.querySelector('#prevBTN');
nextBTN.addEventListener('click', navigation);
prevBTN.addEventListener('click', navigation);
let next, previous;


fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(pokeDex => {
        let createListItems =  document.querySelector("#newList");
        createListItems.innerHTML = '';
        pokeDex.results.forEach(result => {
           createListItems.innerHTML += `<li class="pokeAbilities">${result.name}</li>`; 
           
        });
        next = pokeDex.next;
        previous = pokeDex.previous;
  });

  function navigation() {
    if(next){
        fetch(next)
            .then(respond => respond.json())
            .then(pokeDex => {
                let createListItems =  document.querySelector("#newList");
                createListItems.innerHTML = '';
                pokeDex.results.forEach(result => {
                   createListItems.innerHTML += `<li class="pokeAbilities">${result.name}</li>`; 
                });
                next = pokeDex.next;
                
            })
        };
    if(previous){
        fetch(previous)
            .then(respond => respond.json())
            .then(pokeDex => {
                let createListItems =  document.querySelector("#newList");
                createListItems.innerHTML = '';
                pokeDex.results.forEach(result => {
                   createListItems.innerHTML += `<li class="pokeAbilities">${result.name}</li>`; 
                });
                previous = pokeDex.previous;
            })
        };
    }