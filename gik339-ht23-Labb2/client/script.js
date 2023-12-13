async function fetchDataFromServer() {
    try {
      // Din kod för att hämta data från servern...
      const usersArray = data.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        color: user.color
      }));
  
      console.log('Användare som JavaScript-objekt:', usersArray);
      return usersArray;
    } catch (error) {
      console.error('Fetch error:', error.message);
      return [];
    }
  }
  
  // Anropa funktionen för att hämta och behandla data från servern
  const retrievedUsers = await fetchDataFromServer();
  console.log('Användare utanför fetchDataFromServer:', retrievedUsers);
  