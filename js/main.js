const usersSection = document.getElementById('usersSection');
document.body.appendChild(usersSection)

const container = document.getElementById('usersContainer');
usersSection.appendChild(container);

const userList = document.createElement('ul');
userList.id = 'user-list';
userList.classList.add('user-list');
container.appendChild(userList);

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.classList.add('user-item');
                userItem.innerHTML = `  <p class="card-info"><span class="card-title">ID: </span>${user.id}</>
                                        <p class="card-info"><span class="card-title">Name: </span>${user.name}</p>
                                        <a class="btn" href="user-details.html?id=${user.id}">User Details</a>`;
                userList.appendChild(userItem);
            });
        });
});