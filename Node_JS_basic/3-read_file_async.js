// const fs = require('fs').promises;

// async function countStudents(filePath) {
//   try {
//     const data = await fs.readFile(filePath, 'utf8');
//     const lines = data.trim().split('\n');
//     const studentsCS = [];
//     const studentsSWE = [];

//     // Iterate through the lines and process student data
//     lines.forEach((line) => {
//       const [firstname, lastname, age, field] = line.split(',');

//       if (field === 'CS') {
//         studentsCS.push(firstname);
//       } else if (field === 'SWE') {
//         studentsSWE.push(firstname);
//       }
//     });

//     // Return the final list of students
//     return [...studentsCS, ...studentsSWE];
//   } catch (error) {
//     throw new Error('Cannot load the database');
//   }
// }

// module.exports = countStudents;
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const rows = lines.slice(1); // Exclude the header

    const totalStudents = rows.length;
    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const columns = row.split(',');
      const studentName = columns[0];
      const field = columns[3];

      if (field === 'CS') studentsCS.push(studentName);
      if (field === 'SWE') studentsSWE.push(studentName);
    }

    // Construct array with formatted lines
    const output = [
      `Number of students: ${totalStudents}`,
      `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`,
      `Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`,
    ];

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;