var FirstName = document.getElementById("first");
var LastName = document.getElementById("last");
var SurName = document.getElementById("sur");
var UserName = document.getElementById("user");
var MobileNo = document.getElementById("mo.");
var Email = document.getElementById("em");
var Age = document.getElementById("age");
var DOB = document.getElementById("DOB");
var Country = document.getElementById("con"); 
var State = document.getElementById("state");
var City = document.getElementById("city");
var Skill = document.getElementById("skill");
var List = document.getElementById("list-container");
var Hoby = document.getElementById("hoby");
var Address = document.getElementById("add");
var Password = document.getElementById("pass");
var CPassword = document.getElementById("cp");
var error = document.getElementsByClassName("er")

document.getElementById("fn").style.display = "none";
document.getElementById("ln").style.display = "none";
document.getElementById("sn").style.display = "none";
document.getElementById("un").style.display = "none";
document.getElementById("mo").style.display = "none";
document.getElementById("ema").style.display = "none";
document.getElementById("dob").style.display = "none";
document.getElementById("co").style.display = "none";
document.getElementById("sta").style.display = "none";
document.getElementById("ci").style.display = "none";
document.getElementById("ski").style.display = "none";
document.getElementById("ad").style.display = "none";
document.getElementById("pw").style.display = "none";
document.getElementById("cpw").style.display = "none";

let Today = new Date();
let t = Today.getTime();
let d = t - 568117284026;
let birth = new Date(d).toISOString().split("T")[0];
let x = document.getElementById("DOB")
x.setAttribute("max", birth);

let b = { "India" : {"Gujarat" : ["surat", "Ahmedabad", "Baroda"], 
                    "Maharastra" : ["Mumbai", "Pune", "Nagpur"], 
                    "Rajasthan" : ["Udaipur", "Kota", "Jaipur"]} , 
        "America" : {"California" : ["Los Anageles", "San Diego", "Sacramento"],
                    "New York" : ["New York City", "Buffalo", "Rochester"],
                    "Texas" : ["Houston", "San Antanio", "Austin"]},
        "Canada" :{"Ontario" : ["Toronto", "Ottawa", "Hamilton"],
                    "Quebec" : ["Montreal", "Quebec City", "Laval"],
                    "British Columbia" : ["Vancouver", "Victoria", "Surrey"]},
        }

window.onload = function(){
    var countries = document.getElementById("con");
    var states = document.getElementById("state");
    var cities = document.getElementById("city")

    for(i in b){
        countries.options[countries.options.length] = new Option(i, i)
    }

    countries.onchange = function(){
        states.length = 1;
        cities.length = 1;
        if(this.selectedIndex < 1){
            return;
        }
        for(var j in b[this.value]){
            states.options[states.options.length] = new Option(j, j);
        }
    }
    countries.onchange();

    states.onchange = function(){
        cities.length = 1;
        if(this.selectedIndex < 1){
            return;
        }
        var l = b[countries.value][this.value];
        for(var k = 0; k < l.length; k++){
            cities.options[cities.options.length] = new Option(l[k], l[k])
        }
    }
}

function getAge(){
    let today = new Date();
    let date = DOB.value;
    let DB = new Date(date);
    let age = (today.getTime()- DB.getTime()) / (365*24*60*60*1000)
    let f = Math.floor(age)
    document.getElementById("age").setAttribute("value", f);
}

let select = document.querySelectorAll('input[type="checkbox"]');
let v = document.getElementsByClassName("box")
let master = document.querySelector("#master-check");
master.addEventListener('click', function(){
    for(let i = 0; i<select.length; i++){
        select[i].checked = this.checked;
    }
})

function isChecked(){
    let isAllChecked = true;
    for(let i = 0; i<v.length; i++){
        if(v[i].checked == false){
            isAllChecked = false;
        }
    }
    if(isAllChecked == true){
        master.checked = true
    }
    
    if(isAllChecked==false){
        master.checked = false
    }
}

function addTask(){
    let li = document.createElement("li");
    li.innerHTML = Skill.value;
    if(Skill.value.trim() != ""){
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        li.appendChild(span)
        span.addEventListener("click", function(e){
            e.target.parentElement.parentElement.remove()
        }, false)
    }
    Skill.value = "";
}

let eyeicon = document.getElementById("eye-icon");
let eyeopen = document.getElementById("eye-open");
let eyeclose = document.getElementById("eye-close");
eyeicon.onclick = function(){
    if(Password.type == "password"){
        Password.type = "text";
        eyeopen.style.display = "none";
        eyeclose.style.display = "block";
    }
    else{
        Password.type = "password";
        eyeclose.style.display = "none";
        eyeopen.style.display = "block";
    }
}

let Ceyeicon = document.getElementById("confirm-eye-icon");
let Ceyeopen = document.getElementById("eye-open-confirm");
let Ceyeclose = document.getElementById("eye-close-confirm");
Ceyeicon.onclick = function(){
    if(CPassword.type == "password"){
        CPassword.type = "text";
        Ceyeopen.style.display = "none";
        Ceyeclose.style.display = "block";
    }
    else{
        CPassword.type = "password";
        Ceyeclose.style.display = "none";
        Ceyeopen.style.display = "block";
    }
}

function refreshData() {
    let isError = false
    {
        let fname = FirstName.value;
        let FN = document.getElementById("fn");
        if(fname == ""){
            FN.style.display = "block";
            FN.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(!fname.match(/^[A-Za-z]+$/)){
            FN.style.display = "block";
            FN.lastElementChild.innerText = " Please enter only Alphabet."
            isError = true
        }
        else{
            FN.style.display = "none";
        }
    }
    
    {
        let lname = LastName.value;
        let LN = document.getElementById("ln");
        if(lname == ""){
            LN.style.display = "block";
            LN.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(!lname.match(/^[A-Za-z]+$/)){
            LN.style.display = "block";
            LN.lastElementChild.innerText = " Please enter only Alphabet."
            isError = true
        }
        else{
            LN.style.display = "none";
        }
    }

    {
        let sn = SurName.value;
        let SN = document.getElementById("sn")
        if(sn == !isNaN){
            SN.style.display = "block";
            SN.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(!sn.match(/^[A-Za-z]+$/)){
            SN.style.display = "block";
            SN.lastElementChild.innerText = "Please enter only Alphabet."
            isError = true
        }
        else{
            SN.style.display = "none";
        }
    }
   
    {
        let un = UserName.value;
        let UN = document.getElementById("un");
        if(un == ""){
            UN.style.display = "block";
            UN.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            UN.style.display = "none";
        }
    }
   
    {
        let mb = MobileNo.value;
        let MO = document.getElementById("mo");
        if(mb == ""){
            MO.style.display = "block";
            MO.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(mb.length != 10){
            MO.style.display = "block";
            MO.lastElementChild.innerText = " Mobile no. should be 10 digits."
            isError = true
        }
        else if(!mb.match(/^[0-9]{10}$/)){
            MO.style.display = "block";
            MO.lastElementChild.innerText = " Please enter only digit."
            isError = true
        }
        else{
            MO.style.display = "none";
        }
    }
    
    {
        let email = Email.value;
        let EM = document.getElementById("ema");
        if(email == ""){
            EM.style.display = "block";
            EM.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            EM.style.display = "block";
            EM.lastElementChild.innerText = " Please enter valid email."
            isError = true
        }
        else{
            EM.style.display = "none";
        }
    }
   
    {
        let date = DOB.value;
        let DATE = document.getElementById("dob")
        if(date == ""){
            DATE.style.display = "block";
            DATE.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            DATE.style.display = "none";
        }
    }
    
    {
        let country = Country.value;
        let COUNTRY = document.getElementById("co")
        if(country == ""){
            COUNTRY.style.display = "block";
            COUNTRY.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            COUNTRY.style.display = "none";
        }
    }
    {
        let state = State.value;
        let STATE = document.getElementById("sta")
        if(state == ""){
            STATE.style.display = "block";
            STATE.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            STATE.style.display = "none";
        }
    }
   
    {
        let city = City.value;
        let CITY = document.getElementById("ci");
        if(city == ""){
            CITY.style.display = "block";
            CITY.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            CITY.style.display = "none";
        }
    }

    {
        let SKILL = document.getElementById("ski");
        let li = document.getElementsByTagName("li");
        if(li.length == 0){
            SKILL.style.display = "block";
            SKILL.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            SKILL.style.display = "none";
        }
    }
   
    {
        let add = Address.value;
        let ADD = document.getElementById("ad");
        if(add == ""){
            ADD.style.display = "block";
            ADD.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else{
            ADD.style.display = "none";
        }
    }
   
    {
        var pass = Password.value;
        let PASS = document.getElementById("pw")
        if(pass == ""){
            PASS.style.display = "block";
            PASS.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(!pass.match(/(?=.*\d)/)){
            PASS.style.display = "block";
            PASS.lastElementChild.innerText = " Please enter atleast one digit.";
            isError = true
        }
        else if(!pass.match(/(?=.*[a-z])/)){
            PASS.style.display = "block";
            PASS.lastElementChild.innerText = " Please enter atleast one lowecase.";
            isError = true
        }
        else if(!pass.match(/(?=.*[A-Z])/)){
            PASS.style.display = "block";
            PASS.lastElementChild.innerText = " Please enter atleast one uppercase.";
            isError = true
        }
        else if(!pass.match(/(?=.*[!@#$%^&*()\-+.])/)){
            PASS.style.display = "block";
            PASS.lastElementChild.innerText = " Please enter atleast one symbol.";
            isError = true
        }
        else if(!pass.match(/.{8,12}$/)){
            PASS.style.display = "block";
            PASS.lastElementChild.innerText = " The password length should be 8 digit.";
            isError = true
        }
        else{
            PASS.style.display = "none";
        }
    }
  
    {
        let cpass = CPassword.value;
        let CPW = document.getElementById("cpw");
        if(cpass == ""){
            CPW.style.display = "block";
            CPW.lastElementChild.innerText = " Required this field...";
            isError = true
        }
        else if(cpass != pass){
            CPW.style.display = "block";
            CPW.lastElementChild.innerText = " Password does not matched.";
            isError = true
        }
        else{
            CPW.style.display = "none";
        }
    }

    if(isError == false){
        List.remove()
        document.getElementById("R").click()
    }

    const store = [{
        "firstname" : FirstName.value,
        "lastname" : LastName.value,
        "surname" : SurName.value,
        "username" : UserName.value,
        "mobile no." : MobileNo.value,
        "email" : Email.value,
        "date of birth" : DOB.value,
        "age" : Age.value,
        "country" : Country.value,
        "state" : State.value,
        "city" : City.value,
        "skill" : List.value,
        "address" : Address.value,
        "password" : Password.value,
        "confirm password" : CPassword.value 
    }]

    localStorage.setItem("data", store);
    let q = localStorage.getItem("data")

    FirstName.value = "";
    LastName.value = "";
    SurName.value = "";
    UserName.value = "";
    MobileNo.value = "";
    Email.value = "";
    Age.value = "";
    DOB.value = "";
    Country.value = "";
    State.value = "";
    City.value = "";
    Skill.value = "";
    Address.value = "";
    Password.value = "";
    CPassword.value = "";
    
  
    
}



// /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/