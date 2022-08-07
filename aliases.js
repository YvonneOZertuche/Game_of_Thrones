let listGroupContainer = document.querySelector('.list-group')
let liHtmlFragment = ''
let nameChar = []
let allHouse = []

const gotMain = async () => {
  let htmlFragment = ''

  //fetch for House
  for (let i = 1; i <= 9; i++) {
    let fetchHouse = await fetch(
      `https://www.anapioficeandfire.com/api/houses?page=${i}&pageSize=50`
    )
    let housesList = await fetchHouse.json()
    let objHouse = housesList
    objHouse.forEach(element => {
      allHouse.push(element)
    })
  }
console.log(allHouse)

  //fetch for character Name
  for (let i = 1; i <= 43; i++) {
    let fetchName = await fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
    )
    let namesList = await fetchName.json()
    let objName = namesList
    objName.forEach(element => {
      nameChar.push(element)
    })
  }

  //Create HTML element 'li' within a ul
  let ul = document.querySelector('ul')
  const createElementLi = (charName, nameOfHouse) => {
    htmlFragment += `
        <li>${charName} of
        ${nameOfHouse}.</li>
        `
    ul.innerHTML = htmlFragment
  }
 

  // nameChar.forEach(object => {
  //   if (object.allegiances.length == 0) {
  //     // console.log(`Sorry, ${object.name} does not have a house.`)
  //   } else if (object.allegiances.length != 0) {
  //     let houseNumber = object.allegiances[0].slice(45)
  //     let houseName = allHouse[houseNumber - 1].name
  //     // console.log(`${object.name}'s house is ${houseName}.`)
  //     createElementLi(object.name, houseName)
  //   }
  // })

  let aliases = nameChar
  for (let i = 0; i <= nameChar.length; i++) {  
    // console.log(`${aliases[i].aliases}`)k
 
  }

// console.log(nameChar)










}

gotMain()
