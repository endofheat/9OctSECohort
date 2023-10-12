// ++ For understanding more about arrays, try creating an array that has 5 elements.
let videoGames = ['Overwatch', 'APEX Legends', 'Baldur\'s Gate 3', 'League of Legends', 'Detroit: Become Human'];


// ++ access the first item in the array, store it in a variable, and print it to the console
let firstVideoGame = videoGames[0]
console.log(firstVideoGame)

// ++ Replace the value of the element at position 1 and 4.
videoGames[0] = 'Devil May Cry'
videoGames[3] = 'Overwatch'

// ++ Add a new element to the beginning of the array
videoGames.unshift('It Takes Two')

// ++ Remove the element at the end of the array
videoGames.pop()

// ++ Print the array to the console.
console.log(videoGames)