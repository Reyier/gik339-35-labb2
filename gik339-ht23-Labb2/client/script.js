// Platsen där du hämtar användardata och skapar listan
// Tidigare kod för att hämta och bearbeta användarlistan från databasen
fetch('http://localhost:3000/users')
  .then((response) => response.json())
  .then((users) => {
    const ul = document.createElement("ul");
    ul.classList.add("userList");
    const div = document.querySelector(".container");
    div.appendChild(ul);

  
    users.forEach(user => {
      const li = document.createElement("li");
      li.style.backgroundColor = user.color;
      
      const firstName = user.firstName;
      const lastName = user.lastName;
      const userName = user.username;

      const html = `<span>Name: ${firstName} ${lastName}</span><br>Username: ${userName}`;
      
      li.insertAdjacentHTML('beforeend', html);
      ul.appendChild(li);
    });
  });

  