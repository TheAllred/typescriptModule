let message: string = "Hello, World!";

function greeting() {
  console.log(message);
}

greeting();

class Student {
  studentName: string;
  studentId: string;

  constructor(name: string, id: string) {
    this.studentName = name;
    this.studentId = id;
  }
  getId() {
    return 086142475;
  }
}

let classes: string[] = ["math", "art", "science", "history", "english"];
for (const subject of classes) {
  console.log(subject);
}
