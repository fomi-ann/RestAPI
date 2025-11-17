
let givenProfile = "";
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";

let fetchProfile = async() => {
    try {

        let fetchedData;
        if (profileName != "") {

            await fetch(`https://api.github.com/users/${profileName}`)
            .then((response) => response.json())
            .then((data) => (fetchedData = data));

            profileName = fetchedData.login;
            profileId = fetchedData.id;
            profileLink = fetchedData.html_url;
            profileRepos = fetchedData.public_repos;
            
            renderPage();
        }
    } catch (error) {
        console.error;
    }
}

function renderPage() {

    document.getElementById("app").innerHTML = `
    <div>
    <h1>Hello JavaScript!</h1>
    <p>Kelle järel tahad nuhkida? (kasutajanimi): </p>
    <input />
        <div class="content">
            <h1 id="name">Name: ${profileName}</h1>
            <p id="id">ID: ${profileId}</p>
            <p id="repos">Repode arv: ${profileRepos}</p>
            <p id="profileUrl">Aadress: ${profileLink}</p>
            <a href="${profileName}" target="_blank">/users/</a>
        </div>
    </div>

    `;
}

fetchProfile();
renderPage();

const input = document.querySelector("input");
input.addEventListener("change", updateValue);

function updateValue(e){
    profileName = e.target.value;
    fetchProfile();
}


