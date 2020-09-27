let name = document.getElementById('myInput');
let para = document.createElement('p');
  let phonebook = [
      { name : 'CHRIS', number : '1549' },
      { name : 'LI KING', number : '9634' },
      { name : 'ANNE', number : '9065' },
      { name : 'FRANCESCA', number : '3001' },
      { name : 'MUSTAFA', number : '6888' },
      { name : 'TINA', number : '4312' },
      { name : 'BERT', number : '7780' },
      { name : 'JADA', number : '2282' },
    ]
    let SelectedName = phonebook.map(x =>x.name);
    let SelectedNumber = phonebook.map(x => x.number);
 function myFunction(event){
for(i=0; i<phonebook.length; i++){
  const ChooseName = SelectedName[i];
  const ChooseNumber = SelectedNumber[i];
  if(name.value.toUpperCase() === SelectedName[i]){
    para.textContent = SelectedName[i] + ' : ' + SelectedNumber[i];
  }
}
 }
  let section = document.querySelector('section');
section.appendChild(para); 