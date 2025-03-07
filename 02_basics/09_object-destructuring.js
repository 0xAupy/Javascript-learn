const course = {
  name: "JavaScript",
  duration: "3 months",
  teacher: "chatGPT",
  isFree: true,
};

//to get teacher name of the course
// console.log(course.teacher);

//another way to get teacher name of the course
const { teacher } = course;
console.log(teacher);


//json
// {
//     "name": "JavaScript",
//     "duration": "3 months",
//     "teacher": "chatGPT",
//     "isFree": true
// }