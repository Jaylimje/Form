var FirstName = document.getElementById("first");
var LastName = document.getElementById("last");
var SurName = document.getElementById("sur");
var UserName = document.getElementById("user");
var MobileNo = document.getElementById("mo.");
var Email = document.getElementById("em");
var DOB = document.getElementById("DOB");
var Age = document.getElementById("age");
var Country = document.getElementById("con");
var State = document.getElementById("state");
var City = document.getElementById("city");
var Skill = document.getElementById("skill");
var List = document.getElementById("list-container");
var Hobby = document.getElementById("hobby");
var Address = document.getElementById("add");
var Password = document.getElementById("pass");
var CPassword = document.getElementById("cp");
var error = document.getElementsByClassName("er");
var Gender = document.querySelectorAll('input[name= "gen"]');
var Reg = document.getElementById("register");
var selectall = document.getElementById("master-check");
var page = document.getElementsByClassName("page-item")

function DisabledFalse() {
  FirstName.removeAttribute("disabled");
  LastName.removeAttribute("disabled");
  SurName.removeAttribute("disabled");
  UserName.removeAttribute("disabled");
  MobileNo.removeAttribute("disabled");
  Email.removeAttribute("disabled");
  DOB.removeAttribute("disabled");
  Skill.removeAttribute("disabled");
  Country.removeAttribute("disabled");
  State.removeAttribute("disabled");
  City.removeAttribute("disabled");
  Address.removeAttribute("disabled");
  for (let i = 0; i < Gender.length; i++) {
    Gender[i].removeAttribute("disabled");
  }
  master.removeAttribute("disabled");
  for (let i = 0; i < v.length; i++) {
    v[i].removeAttribute("disabled");
  }
}

var Entryarray = JSON.parse(localStorage.getItem("data")) || [];

Reg.addEventListener("click", function () {
  DisabledFalse();
  document.getElementById("exampleModalLabel").innerText = "Registration Form";
  for (let i = 0; i < v.length; i++) {
    v[i].checked = false;
  }
  for(let i = 0; i< Gender.length; i++){
    Gender[i].checked = false;
  }
  selectall.checked = false;
  FirstName.value = "";
  LastName.value = "";
  SurName.value = "";
  UserName.value = "";
  MobileNo.value = "";
  Email.value = "";
  Age.value = 0;
  DOB.value = "";
  Gender.value = "";
  Country.value = "";
  State.value = "";
  City.value = "";
  Skill.value = "";
  List.innerText = "";
  Address.value = "";
  Password.value = "";
  CPassword.value = "";
  for (let i = 0; i < error.length; i++) {
    error[i].style.display = "none";
  }
  Password.type = "password";
  eyeclose.style.display = "none";
  eyeopen.style.display = "block";
  CPassword.type = "password";
  Ceyeclose.style.display = "none";
  Ceyeopen.style.display = "block";

  document.getElementById("saveChange").style.display = "block";
  document.getElementById("updateChange").style.display = "none";
  document.getElementsByClassName("PassW")[0].style.display = "block";
  document.getElementsByClassName("PassW")[1].style.display = "block";
});

// ---------------------------------name field---------------
function checkAlpha(e) {
  if (!e.key.match(/^[A-Za-z]+$/)) {
    e.preventDefault();
  }
}

// ------------------------------------username----------------
var isError = false;
function CheckUsername() {
  for (let i = 0; i < Entryarray.length; i++) {
    if (UserName.value == Entryarray[i].username) {
      document.getElementById("un").style.display = "block";
      document.getElementById("un").lastElementChild.innerText = " Username already exists...";
      isError = true;
      break;
    } else {
      document.getElementById("un").style.display = "none";
      isError = false;
    }
  }
}

// ---------------------------------mobile-------------------
function CheckDigit(e) {
  if (!e.key.match(/^[0-9]$/)) {
    e.preventDefault();
  }
}

// ---------------------------Gender--------------------------
function getGender() {
  for (let i = 0; i < Gender.length; i++) {
    if (Gender[i].checked == true) {
      Gender.value = Gender[i].value;
      break;
    }
  }
}

// -----------------------------------Date Of birth-----------
let Today = new Date();
let t = Today.getTime();
let d = t - 568117284026;
let birth = new Date(d).toISOString().split("T")[0];
let x = document.getElementById("DOB");
x.setAttribute("max", birth);
let r = t.toString();

// -----------------------------------Country / State / City------------
var b = { India: { Gujarat: ["surat", "Ahmedabad", "Baroda"],
                  Maharastra: ["Mumbai", "Pune", "Nagpur"],
                  Rajasthan: ["Udaipur", "Kota", "Jaipur"],},
          America: { California: ["Los Anageles", "San Diego", "Sacramento"],
                    "New York": ["New York City", "Buffalo", "Rochester"],
                    Texas: ["Houston", "San Antanio", "Austin"],},
          Canada: { Ontario: ["Toronto", "Ottawa", "Hamilton"],
                    Quebec: ["Montreal", "Quebec City", "Laval"],
                    "British Columbia": ["Vancouver", "Victoria", "Surrey"],},
};

window.onload = InitialCSC();
var countries = document.getElementById("con");
var states = document.getElementById("state");
var cities = document.getElementById("city");

function InitialCSC() {
  var countries = document.getElementById("con");
  for (i in b) {
    countries.options[countries.options.length] = new Option(i, i);
  }
}

function stateLoad() {
  countries.onchange = function () {
    states.length = 1;
    cities.length = 1;
    if (this.selectedIndex < 1) {
      return;
    }
    for (var j in b[this.value]) {
      states.options[states.options.length] = new Option(j, j);
    }
  };
  countries.onchange();
}
stateLoad();

function cityload() {
  states.onchange = function () {
    cities.length = 1;
    if (this.selectedIndex < 1) {
      return;
    }
    var l = b[countries.value][this.value];
    for (var k = 0; k < l.length; k++) {
      cities.options[cities.options.length] = new Option(l[k], l[k]);
    }
  };
  states.onchange();
}
cityload();

// -----------------------------------------Age----------------
function getAge() {
  let today = new Date();
  let date = DOB.value;
  let DB = new Date(date);
  let AGE = (today.getTime() - DB.getTime()) / (365 * 24 * 60 * 60 * 1000);
  let f = Math.floor(AGE);
  Age.value = f;
}

// ----------------------------------------Hobby Checkbox-------------
let select = document.querySelectorAll('input[type="checkbox"]');
let v = document.getElementsByClassName("box");
let master = document.querySelector("#master-check");
master.addEventListener("click", function () {
  for (let i = 0; i < select.length; i++) {
    select[i].checked = this.checked;
  }
});

function isChecked() {
  let isAllChecked = true;
  for (let i = 0; i < v.length; i++) {
    if (v[i].checked == false) {
      isAllChecked = false;
    }
  }
  if (isAllChecked == true) {
    master.checked = true;
  }
  if (isAllChecked == false) {
    master.checked = false;
  }
}

// --------------------------------------------Skill Task----------------
Skill.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    addTask();
    Skill.value = ""
  }
})

function addTask() {
  if (List.children.length == 0 && Skill.value.trim() != "") {
    let p = document.createElement("p");
    p.innerHTML = Skill.value.trim(); 
    List.appendChild(p);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    p.appendChild(span);
    span.addEventListener("click", function (e) {
        p.remove();
    },false);
    document.getElementById("ski").style.display = "none";
    Skill.value = "";
  }

  let isDuplicate = true;
  for (let i = 0; i < List.children.length; i++) {
    if (Skill.value.trim() == List.children[i].innerText) {
      isDuplicate = false;
      document.getElementById("ski").style.display = "block";
      document.getElementById("ski").lastElementChild.innerText =" Skills are not same...";
      Skill.value = "";
    }
  }

  if (isDuplicate == true) {
    let p = document.createElement("p");
    p.innerHTML = Skill.value.trim();
    if (Skill.value.trim() != "") {
      List.appendChild(p);
      let span = document.createElement("span");
      span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      p.appendChild(span);
      span.addEventListener("click", function () {
        p.remove();
      },false);
      document.getElementById("ski").style.display = "none";
      Skill.value = "";
    }
  } 
}

// --------------------------------------------Password field----------
let eyeicon = document.getElementById("eye-icon");
let eyeopen = document.getElementById("eye-open");
let eyeclose = document.getElementById("eye-close");
eyeicon.onclick = function () {
  if (Password.type == "password") {
    Password.type = "text";
    eyeopen.style.display = "none";
    eyeclose.style.display = "block";
  } else {
    Password.type = "password";
    eyeclose.style.display = "none";
    eyeopen.style.display = "block";
  }
};

// -----------------------------------------------Confirm Password---------
let Ceyeicon = document.getElementById("confirm-eye-icon");
let Ceyeopen = document.getElementById("eye-open-confirm");
let Ceyeclose = document.getElementById("eye-close-confirm");
Ceyeicon.onclick = function () {
  if (CPassword.type == "password") {
    CPassword.type = "text";
    Ceyeopen.style.display = "none";
    Ceyeclose.style.display = "block";
  } else {
    CPassword.type = "password";
    Ceyeclose.style.display = "none";
    Ceyeopen.style.display = "block";
  }
};

// ----------------------------validate functions--------------------------
function Validate(){
  let fname = FirstName.value.trim();
  let FN = document.getElementById("fn");
  if (fname == "") {
    FN.style.display = "block";
    FN.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (!fname.match(/^[A-Za-z]+$/)) {
    FN.style.display = "block";
    FN.lastElementChild.innerText = " Please enter only Alphabet.";
    isError = true;
  } else {
    FN.style.display = "none";
  }

  let lname = LastName.value.trim();
  let LN = document.getElementById("ln");
  if (lname == "") {
    LN.style.display = "block";
    LN.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (!lname.match(/^[A-Za-z]+$/)) {
    LN.style.display = "block";
    LN.lastElementChild.innerText = " Please enter only Alphabet.";
    isError = true;
  } else {
    LN.style.display = "none";
  }

  let sn = SurName.value.trim();
  let SN = document.getElementById("sn");
  if (sn == !isNaN) {
    SN.style.display = "block";
    SN.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (!sn.match(/^[A-Za-z]+$/)) {
    SN.style.display = "block";
    SN.lastElementChild.innerText = "Please enter only Alphabet.";
    isError = true;
  } else {
    SN.style.display = "none";
  }

  let un = UserName.value.trim();
  let UN = document.getElementById("un");
  if (un == "") {
    UN.style.display = "block";
    UN.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    UN.style.display = "none";
  }

  let mb = MobileNo.value.trim();
  let MO = document.getElementById("mo");
  if (mb == "") {
    MO.style.display = "block";
    MO.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (mb.length != 10) {
    MO.style.display = "block";
    MO.lastElementChild.innerText = " Mobile no. should be 10 digits.";
    isError = true;
  } else if (!mb.match(/^[0-9]{10}$/)) {
    MO.style.display = "block";
    MO.lastElementChild.innerText = " Please enter only digit.";
    isError = true;
  } else {
    MO.style.display = "none";
  }

  let email = Email.value.trim();
  let EM = document.getElementById("ema");
  if (email == "") {
    EM.style.display = "block";
    EM.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    EM.style.display = "block";
    EM.lastElementChild.innerText = " Please enter valid email.";
    isError = true;
  } else {
    EM.style.display = "none";
  }

  let country = Country.value;
  let COUNTRY = document.getElementById("co");
  if (country == "") {
    COUNTRY.style.display = "block";
    COUNTRY.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    COUNTRY.style.display = "none";
  }

  let state = State.value;
  let STATE = document.getElementById("sta");
  if (state == "") {
    STATE.style.display = "block";
    STATE.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    STATE.style.display = "none";
  }

  let city = City.value;
  let CITY = document.getElementById("ci");
  if (city == "") {
    CITY.style.display = "block";
    CITY.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    CITY.style.display = "none";
  }

  let add = Address.value;
  let ADD = document.getElementById("ad");
  if (add == "") {
    ADD.style.display = "block";
    ADD.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    ADD.style.display = "none";
  }
}

function DAte(){
  let date = DOB.value;
  let DATE = document.getElementById("dob");
  if (date == "") {
    DATE.style.display = "block";
    DATE.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    DATE.style.display = "none";
  }
}

function SKill(){
  let SKILL = document.getElementById("ski");
  let li= document.getElementsByTagName("p");
  if (li.length == 0) {
    SKILL.style.display = "block";
    SKILL.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else {
    SKILL.style.display = "none";
  }
}

function PAss(){
  let pass = Password.value;
  let PASS = document.getElementById("pw");
  if (pass == "") {
    PASS.style.display = "block";
    PASS.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (!pass.match(/(?=.*\d)/)) {
    PASS.style.display = "block";
    PASS.lastElementChild.innerText = " Please enter atleast one digit.";
    isError = true;
  } else if (!pass.match(/(?=.*[a-z])/)) {
    PASS.style.display = "block";
    PASS.lastElementChild.innerText = " Please enter atleast one lowecase.";
    isError = true;
  } else if (!pass.match(/(?=.*[A-Z])/)) {
    PASS.style.display = "block";
    PASS.lastElementChild.innerText = " Please enter atleast one uppercase.";
    isError = true;
  } else if (!pass.match(/(?=.*[!@#$%^&*()\-+.])/)) {
    PASS.style.display = "block";
    PASS.lastElementChild.innerText = " Please enter atleast one symbol.";
    isError = true;
  } else if (!pass.match(/.{8,12}$/)) {
    PASS.style.display = "block";
    PASS.lastElementChild.innerText = " The password length should be 8 digit.";
    isError = true;
  } else {
    PASS.style.display = "none";
  }
}

function CPAss(){
  let cpass = CPassword.value;
  let pass = Password.value;
  let CPW = document.getElementById("cpw");
  if (cpass == "") {
    CPW.style.display = "block";
    CPW.lastElementChild.innerText = " Required this field...";
    isError = true;
  } else if (cpass != pass) {
    CPW.style.display = "block";
    CPW.lastElementChild.innerText = " Password does not matched.";
    isError = true;
  } else {
    CPW.style.display = "none";
  }
}

// ---------------------------------------------save Changes(submit button)----------------
function refreshData() {
  Validate();
  let GENDER = document.getElementById("ge");
  for (let i = 0; i < Gender.length; i++) {
    if (Gender[i].checked == true) {
      GENDER.style.display = "none";
      isError = false;
      break;
    } else {
      GENDER.style.display = "block";
      GENDER.lastElementChild.innerText = " Required this field...";
      isError = true;
    }
  }
  DAte();
  SKill();
  let skillarray = [];
  let list = document.getElementsByTagName("p");
  for (let i = 0; i < list.length; i++) {
    skillarray.push(list[i].innerText);
  }

  let hobbyarray = [];
  for (let i = 0; i < v.length; i++) {
    if (v[i].checked == true) {
      hobbyarray.push(v[i].value);
    }
  }
  PAss();
  CPAss();
  var UserList = {
    UserID: r,
    firstname: FirstName.value,
    lastname: LastName.value,
    surname: SurName.value,
    username: UserName.value,
    mobileno: Number(MobileNo.value),
    email: Email.value,
    gender: Gender.value,
    dob: DOB.value,
    age: Age.value,
    country: Country.value,
    state: State.value,
    city: City.value,
    skill: skillarray,
    hobby: hobbyarray,
    address: Address.value,
    password: Password.value,
    "confirm password": CPassword.value,
  };

  if (isError == false) {
    document.getElementById("R").click();
    Entryarray.push(UserList);
    for (let i = 0; i < v.length; i++) {
      v[i].checked = false;
    }
  }
  localStorage.setItem("data", JSON.stringify(Entryarray));
  Entryarray = JSON.parse(localStorage.getItem("data"));
  CreateTable();
  DisplayData();
  CreatePagination();
}

// -------------------------------------------Table-----------------------
function CreateTable(){
  let finalData = [];
  Entryarray.forEach((item, index) => {
    finalData += `
      <tr>
          <td>${item.UserID}</td>               
          <td>${item.firstname}</td>               
          <td>${item.username}</td>               
          <td>${item.mobileno}</td>    
          <td>${item.email}</td>        
          <td>${item.gender}</td>               
          <td>${item.age}</td>    
          <td><i class="fa-solid fa-user-pen" style="Color:green;margin:0px 10px" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="OpenModel(${index})"></i>
          <i class="fa-solid fa-eye" style="Color:blue; margin:0px 10px" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="ViewModel(${index})"></i>
          <i class="fa-solid fa-trash" style="Color:red; margin:0px 10px" onclick="DeleteData(${item.UserID})"></i></td>   
      </tr>`;
  });
  document.getElementById("entry").innerHTML = finalData;
}
CreateTable();

// -------------------------------------------------pagination------------------
let totalItem = Entryarray.length;
let f = document.getElementById("pagi")
let Rows = document.getElementById("RowsPage");
let rowPerPages = Rows.value;
function Items(){
  rowPerPages = parseInt(Rows.value);
  currentPage = 1;
  DisplayData();
  CreatePagination();
}

let totalNoOfPages = Math.ceil(totalItem / rowPerPages);
let currentPage = 1;

function DisplayData(){
  let startIndex = (currentPage-1) * rowPerPages;
  let endIndex = startIndex + parseInt(rowPerPages);

  const pageData = Entryarray.slice(startIndex, endIndex)
  let finalData = []
  pageData.map((item) => {
    finalData += `<tr>
    <td>${item.UserID}</td>
    <td>${item.firstname}</td>
    <td>${item.username}</td>
    <td>${item.mobileno}</td>
    <td>${item.email}</td>
    <td>${item.gender}</td>
    <td>${item.age}</td>
    <td style="text-align:center"><i class="fa-solid fa-user-pen" style="Color:green;margin:0px 0px" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="OpenModel(${item.UserID})"></i>
          <i class="fa-solid fa-eye" style="Color:blue; margin:0px 10px" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="ViewModel(${item.UserID})"></i>
          <i class="fa-solid fa-trash" style="Color:red; margin:0px 0px" onclick="DeleteData(${item.UserID})"></i></td>  
    </tr>`
  })
  document.getElementById("entry").innerHTML = finalData;
}

function CreatePagination(){
  let totalItem = Entryarray.length;
  let totalNoOfPages = Math.ceil(totalItem / rowPerPages);
  let Buttons = "";
  Buttons += `<button onclick="previosButton()" class="Pages btn btn-primary" style="padding:5px 10px;margin:10px" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>`;
  for(let i = 1; i<=totalNoOfPages; i++){
    Buttons += `<button onclick="GotoPage(${i})" class="btn btn-light border-dark pages" style="margin:10px 0px">${i}</button>`;
  }
  Buttons += `<button onclick="NextButton()" class="btn Pages btn-primary" style="padding:5px 10px;margin:10px" ${currentPage === totalNoOfPages ? 'disabled' : ''}>Next</button>`;
  document.getElementById("pagi").innerHTML = Buttons; 
  for(let i = 0; i<f.children.length; i++){
    if(f.children[i] == f.children[currentPage]){
      f.children[i].classList.add("active");
    }
  }
}

function previosButton(){
  if(currentPage > 1){
    currentPage--;
    DisplayData();
    CreatePagination();
  }
}

function NextButton(){
  if(currentPage <= totalNoOfPages){
    currentPage++;
    DisplayData();
    CreatePagination();
  }
}

function GotoPage(page){
  currentPage = page;
  var Search = document.getElementById("search").value.toLowerCase();
  if(Search != ""){
    Entryarray = JSON.parse(localStorage.getItem("searching-data"));
    currentPage = page;
    DisplayData();
    CreatePagination();
  }
  DisplayData();
  CreatePagination();
}

DisplayData();
CreatePagination();

// -------------------------------------Edit Button----------------
var userid;
function OpenModel(UserID) {
  DisabledFalse();
  Password.value = "";
  for (let i = 0; i < error.length; i++) {
    error[i].style.display = "none";
  }
  document.getElementById("saveChange").style.display = "none";
  document.getElementById("updateChange").style.display = "block";
  document.getElementById("exampleModalLabel").innerText = "Update Registration Form";
  let Edit = Entryarray.filter((user) => {
    return user.UserID == UserID
  })
  userid = Edit[0].UserID
  FirstName.value = Edit[0].firstname;
  LastName.value = Edit[0].lastname;
  SurName.value = Edit[0].surname;
  UserName.value = Edit[0].username;
  MobileNo.value = Edit[0].mobileno;
  Email.value = Edit[0].email;
  DOB.value = Edit[0].dob;
  Age.value = Edit[0].age;
  Country.value = Edit[0].country;
  stateLoad();
  State.value = Edit[0].state;
  cityload();
  City.value = Edit[0].city;
  Address.value = Edit[0].address;

  for (let i = 0; i < Gender.length; i++) {
    if (Gender[i].value == Edit[0].gender) {
      Gender[i].checked = true;
    }
  }

  for (let i = 0; i < v.length; i++) {
    v[i].checked = false;
    master.checked = false;
  }
  for (let i = 0; i < v.length; i++) {
    if (Edit[0].hobby.includes(v[i].value)) {
      v[i].checked = true;
    }
  }

  let isallChecked = true;
  for (let i = 0; i < v.length; i++) {
    if (v[i].checked == false) {
      isallChecked = false;
    }
    if (isallChecked == true) {
      master.checked = true;
    }
    if (isallChecked == false) {
      master.checked = false;
    }
  }

  List.innerText = "";
  for (let i = 0; i < Edit[0].skill.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = Edit[0].skill[i];
    List.appendChild(p);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    p.appendChild(span);
    span.addEventListener("click", function (e) {
      p.remove();
    },false);
  }
  document.getElementsByClassName("PassW")[0].style.display = "block";
  document.getElementsByClassName("PassW")[1].style.display = "none";
}

// ------------------------------View Button-----------------------------
function ViewModel(UserID) {
  OpenModel(UserID);
  document.getElementById("exampleModalLabel").innerText = "User Details";
  FirstName.setAttribute("disabled", "true");
  LastName.setAttribute("disabled", "true");
  SurName.setAttribute("disabled", "true");
  UserName.setAttribute("disabled", "true");
  MobileNo.setAttribute("disabled", "true");
  Email.setAttribute("disabled", "true");
  DOB.setAttribute("disabled", "true");
  Skill.setAttribute("disabled", "true");
  Country.setAttribute("disabled", "true");
  State.setAttribute("disabled", "true");
  City.setAttribute("disabled", "true");
  Address.setAttribute("disabled", "true");
  for (let i = 0; i < Gender.length; i++) {
    Gender[i].setAttribute("disabled", "true");
  }
  List.innerText = "";
  console.log(Entryarray)
  let Edit = Entryarray.filter((x) => {
    return x.UserID == UserID
  })
  console.log(Edit)
  for (let i = 0; i < Edit[0].skill.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = Edit[0].skill[i];
    List.appendChild(p);
  }
  master.setAttribute("disabled", "true");
  for (let i = 0; i < v.length; i++) {
    v[i].setAttribute("disabled", "true");
  }
  document.getElementById("updateChange").style.display = "none";
  document.getElementsByClassName("PassW")[0].style.display = "none";
  document.getElementsByClassName("PassW")[1].style.display = "none";
}

// ---------------------------------Delete Button----------------
function DeleteData(userID) {
  Entryarray = JSON.parse(localStorage.getItem("data"));
  if(confirm("Do you want to delete this entry?")){
    let DELETE = Entryarray.filter((x) => {
      return x.UserID != userID;
    });
    localStorage.setItem("data", JSON.stringify(DELETE));
    Entryarray = JSON.parse(localStorage.getItem("data"));
    CreateTable();
    DisplayData();
    CreatePagination();
    SearchEntry();
  }
}

// -------------------------------Update Button-----------------
function UpdateData(userid) {
  Entryarray = JSON.parse(localStorage.getItem('data'))
  for (let i in Entryarray) {
    if (userid == Entryarray[i].UserID) {
      isError = false;
      Validate();
      let Edit = Entryarray.filter((x) => {
        return x.UserID != userid;
      })
      for(let i = 0; i<Edit.length; i++){
        if(UserName.value == Edit[i].username){
          document.getElementById("un").style.display = "block";
          document.getElementById("un").lastElementChild.innerText = " Username already exists...";
          isError = true;
          break;
        }
        else{
          document.getElementById("un").style.display = "none";
        }
      }
      SKill();

      if(Password.value == ""){
        document.getElementById("pw").style.display = "block";
        document.getElementById("pw").lastElementChild.innerText = " Required this field...";
      }
      else if(Password.value != Entryarray[i].password){
        document.getElementById("pw").style.display = "block";
        document.getElementById("pw").lastElementChild.innerText = " Sorry. Password does not match.";
      }
      else if(Password.value == Entryarray[i].password){
        document.getElementById("pw").style.display = "none";
        if (isError == false) {
          document.getElementById("R").click();
          Entryarray[i].firstname = FirstName.value;
          Entryarray[i].lastname = LastName.value;
          Entryarray[i].surname = SurName.value;
          Entryarray[i].username = UserName.value;
          Entryarray[i].mobileno = MobileNo.value;
          Entryarray[i].email = Email.value;
          Entryarray[i].dob = DOB.value;
          Entryarray[i].age = Age.value;
          Entryarray[i].country = Country.value;
          Entryarray[i].state = State.value;
          Entryarray[i].city = City.value;
          Entryarray[i].address = Address.value;
          for (let i = 0; i < Gender.length; i++) {
            if (Gender[i].checked == true) {
              Gender.value = Gender[i].value;
            }
          }
          Entryarray[i].gender = Gender.value;
          hobbyarray = [];
          for (let i = 0; i < v.length; i++) {
            if (v[i].checked == true) {
              hobbyarray.push(v[i].value);
            }
          }
          Entryarray[i].hobby = hobbyarray;
          skillarray = [];
          for (let i = 0; i < List.children.length; i++) {
            skillarray.push(List.children[i].innerText);
          }
          Entryarray[i].skill = skillarray;
          break;
        }
      }
    }
  }
  localStorage.setItem("data", JSON.stringify(Entryarray));
  Entryarray = JSON.parse(localStorage.getItem("data"));
  CreateTable();
  DisplayData();
  CreatePagination();
  SearchEntry();
}

// -------------------------------sorting username-----------------
var IsSorted = false
function UsersortedData(){
  var Search = document.getElementById("search").value.toLowerCase();
  if(Search != ""){
    let searching = Entryarray.filter((x) => {
      return x.firstname.toLowerCase().includes(Search);
    })
    localStorage.setItem("searching-data", JSON.stringify(searching))
    Entryarray = JSON.parse(localStorage.getItem("searching-data"));
    Entryarray.sort((a, b) => {
      if (IsSorted == true) {
        return a.username.localeCompare(b.username); 
      }
      else {
        return b.username.localeCompare(a.username); 
      }
    });
    CreateTable();
    DisplayData();
    CreatePagination();
  }else{
    Entryarray.sort((a, b) => {
      if (IsSorted == true) {
        return a.username.localeCompare(b.username); 
      }
      else {
        return b.username.localeCompare(a.username); 
      }
    });
    CreateTable();
    DisplayData();
    CreatePagination();  
  }
  IsSorted = !IsSorted 
}

// -------------------------sorting email---------------------
function EmailsortedData(){
  var Search = document.getElementById("search").value.toLowerCase();
  if(Search != ""){
    let searching = Entryarray.filter((x) => {
      return x.firstname.toLowerCase().includes(Search);
    })
    localStorage.setItem("searching-data", JSON.stringify(searching))
    Entryarray = JSON.parse(localStorage.getItem("searching-data"));
    Entryarray.sort((a, b) => {
      if (IsSorted == true) {
        return a.email.localeCompare(b.email); 
      }
      else {
        return b.email.localeCompare(a.email); 
      }
    });
    CreateTable();
    DisplayData();
    CreatePagination();
  }else{
    Entryarray.sort((a, b) => {
      if (IsSorted == true) {
        return a.email.localeCompare(b.email); 
      }
      else {
        return b.email.localeCompare(a.email); 
      }
    });
    CreateTable();
    DisplayData();
    CreatePagination();
  }
  IsSorted = !IsSorted 
}

// --------------------------searching----------------------------
function SearchEntry(){
  var Search = document.getElementById("search").value.toLowerCase();
  if(Search != ""){
    Entryarray = JSON.parse(localStorage.getItem('data')); 
    var searching = Entryarray.filter((x) => {
      return x.firstname.toLowerCase().includes(Search);
    })
    localStorage.setItem("searching-data", JSON.stringify(searching))
    Entryarray = JSON.parse(localStorage.getItem("searching-data"));
    currentPage = 1;
    DisplayData();
    CreatePagination();
    if(Entryarray.length == 0){
      document.getElementById("entry").innerHTML = `<td colspan='8' style="text-align:center">No Record Found</td>`
      f.children[0].remove();
      f.children[0].remove(); 
    }
    Rows.style.display = "none";
    document.getElementById("fed").style.display = "none";
  }
  else{
    Rows.style.display = "block";
    document.getElementById("fed").style.display = "block";
    Entryarray = JSON.parse(localStorage.getItem('data'));  
    currentPage = 1;
    DisplayData();
    CreatePagination();
  }
}
document.getElementById("search").addEventListener("keypress", function(event){
  if(event.key == "Enter"){
    event.preventDefault();
    SearchEntry();
  }
})