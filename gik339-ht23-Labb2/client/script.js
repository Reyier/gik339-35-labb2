// Uppgift 6
async function fetchDataFromServer() {
  try {
    // 6.1: Använd fetch() för att göra en GET-förfrågan till servern
    const response = await fetch('http://localhost:5000/users'); // Anpassa URL:en för din server

    // 6.4: Kontrollera om nätverkssvaret är ok eller kasta ett felmeddelande
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    // 6.5: Konvertera svaret till JSON-format
    response
      .json()
      .then((data) => {
        // 6.6: Skapa en array av användarobjekt med önskade egenskaper
        const usersArray = data.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          color: user.color,
        }));

        // 6.7: Logga användarobjekten i konsolen för att verifiera resultatet
        console.log('Användare som JavaScript-objekt:', usersArray);

        // Returnera den bearbetade användardatan
        return usersArray;
      })
      .catch((error) => {
        // Hantera fel om något går fel vid hämtning eller bearbetning av data
        console.error('Fetch error:', error.message);
        return [];
      });
  } catch (error) {
    console.error('Fetch error:', error.message);
    return [];
  }
}

// Logga användarobjekten utanför funktionen för att verifiera resultatet
// Anropa funktionen för att hämta och behandla data från servern
(async () => {
  try {
    const retrievedUsers = await fetchDataFromServer();
    console.log('Användare utanför fetchDataFromServer:', retrievedUsers);
  } catch (error) {
    console.error('Ett fel uppstod:', error);
  }
})();



// // Anropa funktionen för att hämta och behandla data från servern
// const retrievedUsers = await fetchDataFromServer();

// // Logga användarobjekten utanför funktionen för att verifiera resultatet
// console.log('Användare utanför fetchDataFromServer:', retrievedUsers);




// // Funktion för att skapa HTML för varje användare
// function createUserElement(user) {
//   const li = document.createElement("li");
//   li.textContent = `Name: ${user.name}, Email: ${user.email}`; // Justera detta beroende på din användardata

//   return li;
// }

// // Funktion för att lägga till användare i DOM-trädet
// function appendUsersToDOM(users) {
//   const userList = document.getElementById("user-list"); // Anta att du har ett element med id "user-list" där du vill lägga till användare

//   // Rensa befintligt innehåll
//   userList.innerHTML = "";

//   // Skapa och lägg till varje användares HTML-element i listan
//   users.forEach((user) => {
//     const userElement = createUserElement(user);
//     userList.appendChild(userElement);
//   });
// }

// // Anropa funktionen för att lägga till användare i DOM-trädet
// appendUsersToDOM(users);