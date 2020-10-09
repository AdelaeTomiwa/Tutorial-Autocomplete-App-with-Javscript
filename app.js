// List of Colours
const colours = [
   {
      name:"AliceBlue",
   },
   {
      name:"AntiqueWhite",
   },
   {
      name:"Aqua",
   },
   {
      name:"Black",
   },
   {
      name:"Blue",
   },
   {
      name:"Brown",
   },
   {
      name:"Cyan",
   },
   {
      name:"Gold",
   },
   {
      name:"Gray",
   },
   
   {
      name:"Green",
   },
   {
      name:"Lime",
   },
   {
      name:"NavajoWhite",
   },
   {
      name:"Silver",
   },
   {
      name:"SkyBlue",
   },
   
   {
      name:"Teal",
   },
   {
      name:"Tomato",
   },
   {
      name:"Violet",
   },
   {
      name:"White",
   },
]

const input = document.querySelector('.input')
const autoCompleteSection = document.querySelector('.autocomplete-section')

input.addEventListener('keyup', ()=>{
   // Grab what is being typed in
   const inputText = input.value;

   // Narrow Down
   autoCompleteSection.innerHTML = '';
   
   // Grab the Colours and Loop through them all
   const suggestedColours = colours.filter((suggestedColour) =>{
      return suggestedColour.name.toLowerCase().startsWith(inputText)

   })

   // Loop through this again
   suggestedColours.forEach((colour)=>{
      // Create a new Div
      const colourDiv = document.createElement('div');
      colourDiv.innerHTML = colour.name;

      // Append the Colour Div to the Autocomplete Section
      autoCompleteSection.appendChild(colourDiv);
   })

   if(inputText === ''){
      autoCompleteSection.innerHTML = '';
   }


})
