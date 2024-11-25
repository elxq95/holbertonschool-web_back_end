export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students)) {
      return [];
    }
  
    return students
      .filter((student) => student.location === city) // Filter students by city
      .map((student) => {
        // Find the grade for the current student
        const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
  
        // Return the updated student object with the grade
        return {
          ...student,
          grade: gradeInfo ? gradeInfo.grade : 'N/A', // Assign grade or 'N/A'
        };
      });
  }