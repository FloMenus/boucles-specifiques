// 1 - Map Double

// let array = [1, 2, 3, 4, 5]

// let doubles = array.map((number, i) => {
//     return number*2
// })

// console.log (doubles)

//////////////////////////////////////////////////////////////

// 2 - Map Names

// let longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     }
//     ,
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]

// console.table(longNames)



// let shortNames = longNames.map((name, i) => {
//     return  name = longNames.firstName + longNames.lastName
    
// })

// console.log (shortNames)

//////////////////////////////////////////////////////////////

// 3 - Filter Numbers

// let array = [1, "Toto", 34, "JavaScript", 8]

// let number = array.filter((element, i) => {
//     return parseInt(element)
// })

// console.log (number)

//////////////////////////////////////////////////////////////

// 4 - Filter Even

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// let even = numbers.filter((number, i) => {
//     return number%2 === 0
// })

// console.log (even)

//////////////////////////////////////////////////////////////

//  5 - Cakes

// let cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// let chocolateCakes = cakes.filter((cake, i) => {
//     return cake.flavor === "chocolate"
// })

// console.log (chocolateCakes)


// let chocolateCakesSoldOut = chocolateCakes.map((chocoCake) => {
//     return chocoCake.status = 'Sold out !'
// })

// console.log (chocolateCakes)

//////////////////////////////////////////////////////////////

// 6- Cake v2 

// let cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]

// let pieCake = cakes.find((cake, i) => {
//     return cake.name = "pie"
// })

// console.log (pieCake)

////////////////////////////////////////////////////////

// 7 - Factorielle ForEach (PAS FINI)

// let factorielle = [0, 1, 2, 3, 4, 5, 6, 7]

// let factorisation = factorielle.forEach ((num, i) => {
//     num*=i
//     return num
// })

// // console.log (factorisation)

//////////////////////////////////////////////////////////////

// 8 - Chess board (PAS FAIT)

//////////////////////////////////////////////////////

// 9 - Filter

// let array = [12, 55, "hello", true, { isStudent: false }, 3]

// let filteredArray = array.filter(element =>{
//     return parseInt(element)
// })

// console.log (filteredArray)