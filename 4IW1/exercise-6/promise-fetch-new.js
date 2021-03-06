function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getStudents = async function () {
  const response = await fetch("http://localhost:3000/students");
  const data = await response.json();
  return data;
};

const getCourses = async function () {
  const response = await fetch("http://localhost:3000/courses");
  const data = await response.json();
  return data;
};

const mapping = async function () {
  const results = await Promise.all([getStudents(), getCourses()]);
  const students = results[0];
  const courses = results[1];
  return students.map((student) => {
    student.cours = student.cours.map((id) =>
      courses.find((cours) => cours.id === id)
    );
    return student;
  });
};

const timer = async function () {
  setTimeout(() => {
    throw "Timeout";
  }, 20000);
};

Promise.race([mapping(), timer()])
  .then((results) => console.log(results) || console.log("Merge OK"))
  .catch((error) => console.error(error));

/**
 * Uniquement sous NodeJS 14
 *
  try {
    await Promise.race([mapping(), timer()])
    console.log(results);
    console.log("Merge OK");
    } catch(e) {
      console.error(e);
    }
*/
