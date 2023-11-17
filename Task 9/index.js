let getDetails = () => {
    let fname = document.getElementById("fn").value;
    let mname = document.getElementById("mn").value;
    let lname = document.getElementById("ln").value;
    let gender = document.gender.gender.value;
    let dob = document.getElementById("dob").value;
    let pob = document.getElementById("pob").value;
    let cob = document.getElementById("cob").value;
    let qual = document.getElementById("qal").value;
    let bg = document.getElementById("bg").value;
    let ln = document.getElementById("ln").value;
    let ei = document.getElementById("ei").value;
    let pn = document.getElementById("pn").value;
    let en = document.getElementById("en").value;
    let details = {
        firstname: fname, middlename: mname,
        lastname: lname, gender: gender, dateofbirth: dob,
        placeofbirth: pob, countryofbirth: cob, qualification: qual,
        bloodgroup: bg, landline: ln, email: ei, phoneno: pn, emerno: en
    };
    let detToString = JSON.stringify(details);
    console.log(detToString);
    let store = localStorage.setItem("Details", detToString);
    let getData = localStorage.getItem("Details")
    let retData = JSON.parse(getData);
    console.log(retData);
}