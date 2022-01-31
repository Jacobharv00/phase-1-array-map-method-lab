const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]

// Notes
// First: map() over the tutorials array and to look at each tutorial
// Second: split(' ') on a space to make an array of strings of each word from each tutorial
// Third: make a nested map() method to iterate over each word so that we can modify each word to be correctly titleCased. 
// Fourth: How can we get the first character of each word? => word.charAt(0)
// Fifth: How can we capitalize that first letter? Can we chain onto the last method? 
// => .toUpperCase(), YES!
// Sixth: How can we get the rest of the word after capitalizing the first letter.
// concat word.slice(1) => get remainder of string (from the second character to the end of the string)
// Seventh: How can we now take these words and put them back into an array of strings?
// using .join(' ') method to join on a space
// what you pass .join('') will determine the format returned


const titleCased = () => {

  return tutorials.map( tutorial => {
    // Turns into array of strings
    const wordsArr = tutorial.split( ' ' )

    const capitalized = wordsArr.map( word => {
      return word.charAt( 0 ).toUpperCase() + word.slice( 1 )
    } )


    // const capitalizedStrings = capitalized.join( ' ' )
    // return capitalizedStrings

    // Turns back into individual strings inside array
    return capitalized.join( ' ' )

  } )
}

titleCased()



const people = [ 'Justin', 'jACob', 'grAcIe', 'natasha', 'emiLY' ]

// First Way
const titleCased = () => {
  return people.map( person => {
    return person.charAt( 0 ).toUpperCase() + person.slice( 1 ).toLowerCase()
  } )
}

titleCased()


// Second Way
const titleCased = () => {
  const capitalizedPeople = people.map( person => {
    return person.charAt( 0 ).toUpperCase() + person.slice( 1 ).toLowerCase()
  } )
  console.log( capitalizedPeople )
  //return capitalizedPeople
}

titleCased()