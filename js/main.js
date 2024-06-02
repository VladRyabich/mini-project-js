const heroTitle = document.createElement('h1');
heroTitle.classList.add('hero-title');
heroTitle.innerText = 'Users';

const userList = document.createElement('ul');
userList.id = 'user-list';
userList.classList.add('user-list');
document.body.append(heroTitle, userList);

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.classList.add('user-item');
                userItem.innerHTML = `
                    <h2 class="id-title">ID: ${user.id}</h2>
                    <h3 class="name-title">Name: ${user.name}</h3>
                    <a class="user-details-btn" href="user-details.html?id=${user.id}">User Details</a>
                `;
                userList.appendChild(userItem);
            });
        });
});