
async function getMatches() {
    const responce = await fetch('https://api.api-cricket.com/?method=get_countries&APIkey=a0683c54076b05c169be809c7313bfaf3aee132e6281ec15f42a2bbe6936c3ec')
    let matches = responce.json();
    console.log(responce);
    let seematch = matches.then(jsonData => jsonData.result);
    seematch.then(responce => responce.forEach(element => {
        document.getElementById("result").innerHTML+= `<ol><h5>
        ${element.country_name}-${element.country_key}
        </h5></ol>`
       
        console.log(element.country_name);
        console.log(element.country_key);
    }));
}
getMatches()


