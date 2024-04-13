export function executeCallback(callback: (text: string) => void, taskText: string) {
  callback(taskText);
}

function myCallback(taskText: string) {
  console.log(`Task: ${taskText}`);
}

// Call executeCallback with a callback function and a task text

executeCallback(myCallback, "Buy groceries");
