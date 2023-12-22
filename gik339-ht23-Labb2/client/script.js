


// Uppgift 6 punkt 1 Gör en asynkron  GET-förfrågan till servern för att hämta användarinformation. 
//-""- punkt2. För att använda detta objekt, använder du .then() för att säga "när förfrågan är klar. Vi valde det för vi sett det på lektionen. 
fetch('http://localhost:3000/users')
  // Konverterar svaret till JSON-format
  .then((response) => response.json())
  // Hanterar den returnerade användarlistan
  .then((users) => {
    // Hämtar referensen till HTML-elementet med klassen "container"
    const div = document.querySelector(".container");



    // Skapar en ul-lista med Bootstrap
    const userList = document.createElement("ul");
    userList.classList.add("list-group");
    div.appendChild(userList);

    //createELement som skapar ny html kod som ligger i den andra .then functionen


    
    // Loopar igenom varje användarobjekt i den hämtade listan (users)
    users.forEach(user => {
      // Skapar ett listelement (li) för varje användare
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.style.backgroundColor = user.color; // Anpassa bakgrundsfärgen baserat på användarens färg

      // Skapar en rubrik för användarens namn (h5-element)
      const name = document.createElement("h5");
      name.textContent = `${user.firstName} ${user.lastName}`;
      name.classList.add("mb-1"); // Lägg till en Bootstrap-marginalklass

      // Skapar en paragraph för användarnamn (p-element)
      const username = document.createElement("p");
      username.textContent = `Username: ${user.username}`;
      username.classList.add("mb-1"); // Lägg till en Bootstrap-marginalklass

      // Lägger till användarnamn och användarinformation i listelementet (li)
      listItem.appendChild(name);
      listItem.appendChild(username);

      // Lägger till listelementet (li) i listan (ul)
      userList.appendChild(listItem);
    });
  });