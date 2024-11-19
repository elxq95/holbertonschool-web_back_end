export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true; // This `task` is block-scoped to the `if` statement
      const task2 = false; // This `task2` is also block-scoped to the `if` statement
    }
  
    return [task, task2];
  }