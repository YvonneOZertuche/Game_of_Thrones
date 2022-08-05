let nameChar = []
let allHouse = []

const gotMain = async() => {
  let htmlFragment = ""

//Fetching the houses and storing in variable allHouse
  for (let i = 1; i <= 9; i++){
    let fetchHouse = await fetch(`https://www.anapioficeandfire.com/api/houses?page=${i}&pageSize=50`)
    let housesList = await fetchHouse.json()
    let objHouse = housesList
    objHouse.forEach(element => {
      allHouse.push(element)      
    });
  }
 
 //Fetching character names and storing in variable nameChar
 for (let i = 1; i <= 43; i++){
  let fetchName = await fetch(`https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`)
  let namesList = await fetchName.json()
  let objName = namesList
  objName.forEach(element => {
    nameChar.push(element)
  })
 }


//creating an element
let ul = document.querySelector('ul')
const createElementLi = (charName, nameOfHouse) => {
  htmlFragment += `
  <li>${charName}
  of ${nameOfHouse}.</li>
  `
  ul.innerHTML = htmlFragment
} 

nameChar.forEach(object => {
  if (object.allegiances.length == 0){
    // console.log(`Sorry, ${object.name} does not have a house.`)
} else if (object.allegiances.length !=0){
    let houseNumber = object.allegiances[0].slice(45)
    let houseName = allHouse[houseNumber - 1].name
    // console.log(`${object.name}'s house is ${houseName}.`)
    createElementLi(object.name, houseName) 
}


})
  
}











gotMain()


