// .splice()

const phrase1 = "I really need to go to "

const phrase2 = "The place my family needs me"

const phraseComplete = phrase1.toUpperCase().concat(phrase2.toLowerCase().replace('place', 'house, '));
console.log(phraseComplete); 

const phraseCompleteIndex = phrase1.indexOf('really') + "  " + phrase2.lastIndexOf('family')
console.log(phraseCompleteIndex);

const phraseMatch = phrase1.match("ee") + " " + phrase2.split(" ") + " " + phrase1.substr(1, 4);
console.log(phraseMatch);

const list = ["one", "two", "three", "four"]

list.splice(2, 0 ,"five", "Six")
console.log(list)
