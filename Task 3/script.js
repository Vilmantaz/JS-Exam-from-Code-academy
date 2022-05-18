/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


const showUsers = async () => {
    const response = await fetch(ENDPOINT);
    const json = await response.json();

    addUsers(json);
}

const addUsers = (users) => {

    const usersContainer = document.getElementById('output');

    users.forEach(user => {
        const avatar = document.createElement('img');
        avatar.src = user.avatar_url;
        
        const login = document.createElement('p');
        login.innerText = user.login;

        const userBox = document.createElement('div');
        userBox.append(login, avatar);
        usersContainer.append(userBox);
    });

    const message = document.getElementById('message');
    message.innerText = '';
}

document.getElementById('btn').addEventListener('click', () => {

 if (true) {
    showUsers();
 }  else {
     alert('Something went wrong');
 }
})


