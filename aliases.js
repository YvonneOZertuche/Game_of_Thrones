let listGroupContainer = document.querySelector('.list-group')
let liHtmlFragment = ''
let nameChar = []
let allHouse = []
let alias = []

const gotMain = async () => {
  

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
// console.log(allHouse)

  //fetch for character Name
  for (let i = 1; i <= 43; i++) {
    let fetchName = await fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
    )
    let namesList = await fetchName.json()
    let objName = namesList
    objName.forEach(element => {
      if (objName.element != 0){
        nameChar.push(element)
      } else if (objName.element == 0){
        alias.push(element)
      }   
    })
  }
console.log(nameChar)
console.log(alias)









  

  //Create HTML element 'li' within a ul

  nameChar.forEach(charObj => {
    liHtmlFragment += `<a href="${charObj.url}" class = "list-group-item list-group-item-action">${charObj.name}
     <b>Houses: </b> ${charObj.allegiances.length}</a>`
    //  console.log(`${charObj.name}, ${charObj.allegiances.length}`)

     listGroupContainer.innerHTML = liHtmlFragment;
  })
listGroupContainer.addEventListener('click', e =>{
  e.preventDefault();
  console.log(e.target.href)

})
  

  // let ul = document.querySelector('ul')
  // const createElementLi = (charName, nameOfHouse) => {
  //   htmlFragment += `
  //       <li>${charName} of
  //       ${nameOfHouse}.</li>
  //       `
  //   ul.innerHTML = htmlFragment
  // }
 

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
    if(aliases[i].aliases != 0)
      console.log(`${aliases[i].aliases} is the alias for ${nameChar[i].name}`)

    }
   
 
  }














gotMain()
