// Uppgift 6

fetch(url)
    .then((response) => response.json())
    .then((users) => {
        const ul = document.createElement("ul");
        ul.classList.add("userList");
        const div = document.querySelector(".container");
        div.insertAdjacentElement("beforeend", ul);

        users.forEach(user => {
            const li = document.createElement("li");
            li.style.backgroundColor = user.color;
            const firstName = user.firstName;
            const lastName = user.lastName;
            const userName = user.username;
            const br = document.createElement("br");

            const html = `<span>Name: ${firstName} ${lastName}</span>`;
            const usernameText = document.createElement("span");
            usernameText.textContent = `Username: ${userName}`;

            li.appendChild(document.createTextNode(' '));
            li.appendChild(document.createElement("br"));
            li.appendChild(document.createTextNode(' '));
            li.appendChild(document.createTextNode('Username: '));
            li.appendChild(usernameText);

            ul.appendChild(li);
        });
    });

