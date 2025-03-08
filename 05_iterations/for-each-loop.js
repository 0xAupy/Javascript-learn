//simple array
// const coding = ["JavaScript", "Python", "Java", "C#", "Ruby"];

// coding.forEach((language, index) => {
//   console.log(language, index); 
// });

//array of objects
const IZONE = [
    {
        name : "Yujin",
        age : 15
    },
    {
        name : "Wonyoung",
        age : 14
    },
    {
        name: "Chaewon",
        age : 18
    },
    {
        name: "Minju",
        age : 17
    }
]

IZONE.forEach( (member) => {
    console.log(member.name, member.age)
} )