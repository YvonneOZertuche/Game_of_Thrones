let nameChar = []
let allHouse = []

const gotMain = async() => {
  let htmlFragment = ""


  for (let i = 1; i <= 9; i++){
    let fetchHouse = await fetch(`https://www.anapioficeandfire.com/api/houses?pages=${i}&pageSize=50`)
    let housesList = await fetchHouse.json()
    let objHouse = housesList
    objHouse.forEach(element => {
      allHouse.push(element)      
    });
  }
 
 for (let i = 1; i <= 43; i++){
  let fetchName = await fetch(`https://www.anapioficeandfire.com/api/characters?pages=${i}&pageSize=50`)
  let namesList = await fetchName.json()
  let objName = namesList
  objName.forEach(element => {
    nameChar.push(element)
  })

 }
// console.log(allHouse)
// console.log(nameChar)

nameChar.forEach(element => {
  console.log(element.name) 
  htmlFragment += `<li>${element.name}</li>`
  
})

let ul = document.querySelector('ul')
ul.innerHTML = htmlFragment





}
// gotMain();


