// Uppgift 6
// Gör en GET-förfrågan mot servern för att hämta användardata
fetch(url)
    .then((response) => response.json()) // Konvertera svaret till JSON-format
    .then((users) => { // Hantera den returnerade användarlistan

        // Skapar en ny lista (ul-element) för att visa användarobjekten
        const ul = document.createElement("ul");
        ul.classList.add("userList"); // Lägg till en CSS-klass till listan
        
        // Hämtar referensen till HTML-elementet med klassen "container"
        const div = document.querySelector(".container");
        
        // Lägger till den nyskapade listan sist i "container"-elementet
        div.insertAdjacentElement("beforeend", ul);

        // Loopar igenom varje användarobjekt i den hämtade listan (users)
        users.forEach(user => {
            // Skapar ett listelement (li) för varje användare
            const li = document.createElement("li");
            li.style.backgroundColor = user.color; // Anpassa bakgrundsfärgen baserat på användarens färg
            
            // Hämtar användarens förnamn, efternamn och användarnamn
            const firstName = user.firstName;
            const lastName = user.lastName;
            const userName = user.username;
            
            // Skapar HTML-strängar för att visa användarinformationen
            const html = `<span>Name: ${firstName} ${lastName}</span>`;
            const usernameText = document.createElement("span");
            usernameText.textContent = `Username: ${userName}`;

            // Infogar textnoder och användarinformation i listelementet (li)
            li.appendChild(document.createTextNode(' ')); // Tom textnod för mellanrum
            li.appendChild(document.createElement("br")); // Radbrytning
            li.appendChild(document.createTextNode(' ')); // Tom textnod för mellanrum
            li.appendChild(document.createTextNode('Username: ')); // Textnod för "Username: "
            li.appendChild(usernameText); // Användarnamn

            // Lägger till listelementet (li) i listan (ul)
            ul.appendChild(li);
        });
    });


// Uppgift 7


// Skapar ett ul-element för att hålla listan med användare
const userList = document.createElement("ul");

// Loopa igenom användarlistan och skapa li-element för varje användare
users.forEach((user) => {
  // Skapar li-elementet för varje användare
  const userListItem = document.createElement("li");
  userListItem.style.backgroundColor = user.color; // Använder användarens färg

  // Skapar olika element för användarens egenskaper
  const userName = document.createElement("div");
  userName.textContent = `Name: ${user.name}`;

  const userEmail = document.createElement("div");
  userEmail.textContent = `Email: ${user.email}`;

  const userAge = document.createElement("div");
  userAge.textContent = `Age: ${user.age}`;

  // Lägger till varje användare i listan
  userListItem.appendChild(userName);
  userListItem.appendChild(userEmail);
  userListItem.appendChild(userAge);

  // Lägger till varje användare i ul-elementet
  userList.appendChild(userListItem);
});

// Lägger till ul-elementet i DOM-trädet
document.body.appendChild(userList); // Detta är en exempelplats, justera till din specifika struktur
