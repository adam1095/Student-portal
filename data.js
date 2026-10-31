var defaultStudents = {
  "student1": {
    password: "1234",
    name: "Chikondi Banda",
    program: "BSc Communication and Journalism",
    year: "Year 4",
    results: [["Communication Skills","A"],["Media Ethics","B+"],["News Writing","A-"]]
  },
  "student2": {
    password: "5678",
    name: "Mercy Phiri",
    program: "BSc Agricultural Economics",
    year: "Year 2",
    results: [["Communication Skills","B"],["Media Ethics","A"],["News Writing","B+"]]
  }
};

var announcements = [
  ["2 Nov 2026", "Exam timetable is now on the notice board."],
  ["5 Nov 2026", "Library will close at 4pm on Friday."],
  ["10 Nov 2026", "Registration for next semester opens."]
];

function getStudents() {
  var saved = localStorage.getItem("students");
  if (saved) { return JSON.parse(saved); }
  return defaultStudents;
}

function saveStudents(s) {
  localStorage.setItem("students", JSON.stringify(s));
}

function getLoggedIn() {
  var id = localStorage.getItem("student");
  if (id && getStudents()[id]) { return id; }
  return null;
}