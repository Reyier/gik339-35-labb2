async function fetchDataFromServer() {
    try {
      // 6,1 och 6,2: Använd fetch() till servern
      const response = await fetch('http://localhost:3000/users');
  
      // Kontrollera om förfrågan lyckades eller inte
      if (!response.ok) {
        throw new Error('Något gick fel vid hämtning av data');
      }
  
      // 6,4 och 6,5: svar till JSON-format
      const data = await response.json();
  
      // 6,6: Skapa en array 
      const usersArray = data.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        color: user.color
      }));
  
      // 6,7: Logga användarobjekten till konsolen för verifiering
      console.log('Användare som JavaScript-objekt:', usersArray);
  
    } catch (error) {
      // Vid fel, logga felmeddelandet till konsolen
      console.error('Fetch error:', error.message);
    }
  }
  
  // Anropa funktionen för att hämta och behandla data från servern
  fetchDataFromServer();