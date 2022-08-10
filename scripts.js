let listGroupContainer = document.querySelector('.list-group')

let nameChar = [];
let allHouse = []
let alias = " "
const gotMain = async () => {
  let htmlFragment = ''

  //fetch...Houses
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

  //fetch...character Names
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

    
    
//DOM Manipulation
    //creating an element
      let ul = document.querySelector('ul')
      const createElementLi = (charName,  nameOfHouse) => {
        if (charName != 0){
        htmlFragment += `
        <li>
        ${charName} of ${nameOfHouse}.
        </li>` 
      } 

      ul.innerHTML = htmlFragment

      }


    // console.log(nameChar)
    // console.log(allHouse)

    nameChar.forEach(object => {
      if (object.allegiances.length == 0) {
        // console.log(`Sorry, ${object.name} does not have a house.`)
      } else if (object.allegiances.length != 0) {
        let houseNumber = object.allegiances[0].slice(45)
        let houseName = allHouse[houseNumber - 1].name
        // console.log(`${object.name}'s house is ${houseName}.`)
        createElementLi(object.name, houseName)
      }
    })
    
    

    nameChar.forEach(object => {
      if (object.aliases == 0) {
        console.log(`${object.name} does not have an alias.`)
        } else if (object.aliases.length != 0){
            let nameAlias = object.aliases
            // console.log(nameAlias)
            createElementLi(object.name, nameAlias)

        }

    }    )
    // console.log(`${alias[i].aliases} is the alias of ${nameChar[i].name}`)
    // console.log(`${nameChar[i].name}'s alias is ${alias[i].aliases} `)


 


    
    
    


}

gotMain()