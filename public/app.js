var student1 = {
  name: "Usama",
  city: "karachi",
  age: 20,
  result: "Pass",
};

var student2 = {
  name: "Ahmed",
  city: "Lahore",
  age: 21,
  result: "Fail",
};

var student3 = {
  name: "Jawad",
  city: "Hyderabad",
  age: 24,
  result: "Pass",
};

var student4 = {
  name: "Hamza",
  city: "Multan",
  age: 21,
  result: "Fail",
};

var student5 = {
  name: "Haseeb",
  city: "Quetta",
  age: 25,
  result: "Pass",
};

var student6 = {
  name: "sufyan",
  city: "Bhawalpur",
  age: 23,
  result: "Fail",
};
var student7 = {
  name: "Syed Kehan",
  city: "Multan",
  age: 19,
  result: "Pass",
};
var student8 = {
  name: "Sikandar",
  city: "Larkana",
  age: 17,
  result: "Fail",
};
var student9 = {
  name: "Sahil",
  city: "Gawadar",
  age: 22,
  result: "Pass",
};
var student10 = {
  name: "Azmeer",
  city: "Dadu",
  age: 21,
  result: "Fail",
};

var AllStudents = [student1, student2, student3, student4, student5,student6,student7,student8,student9,student10];

for (var i = 0; i < AllStudents.length; i++) {
  AllStudents[i].id = i + 1;
}
var ResultId = document.getElementById("search");
// function searchResult() {

//   for (var i = 0; i < AllStudents.length; i++) {
//     if (ResultId == AllStudents[i].id) {
//       console.log(AllStudents[i].name);
//       console.log(AllStudents[i].city);
//       console.log(AllStudents[i].age);
//       console.log(AllStudents[i].result);
//       break;
//     } else {
//       console.log("Not found");
//     }
//   }
// }

for (var i = 0; i < AllStudents.length; i++) {
   var table = document.getElementById("table");
  table.innerHTML +=
    "<tr><td>" +
    AllStudents[i].id +
    "</td><td>" +
    AllStudents[i].name +
    "</td><td>" +
    AllStudents[i].city+
  "</td><td>" +
    AllStudents[i].age +
    "</td><td>" +
    AllStudents[i].result +
    "</td>" +
    "</tr>";
    
}

function searchresult() {
  var userIdNumber = ResultId.value;
  for (var i = 0; i < AllStudents.length; i++) {
    if (userIdNumber == AllStudents[i].id) {
      console.log(AllStudents[i].name);
      var searchId = document.getElementById("stdid");
      var searchName = document.getElementById("stdname");
      var searchCity = document.getElementById("stdcity");
      var searchAge = document.getElementById("stdage");
      var searchResultf = document.getElementById("stdresult");

      searchId.innerHTML = AllStudents[i].id;
      searchName.innerHTML = AllStudents[i].name;
      searchCity.innerHTML = AllStudents[i].city;
      searchAge.innerHTML = AllStudents[i].age;
      searchResultf.innerHTML = AllStudents[i].result;
   }
   else{
     console.log('Not Found');
   }
  }
  ResultId.value='';
}
