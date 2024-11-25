// array.reduce((accumulator, currentValue, index, array) => {}, initialValue);
export default function getStudentIdsSum(students) {
    if (!Array.isArray(students)) {
      return 0;
    }
    return students.reduce((sum, student) => sum + student.id, 0);
  }