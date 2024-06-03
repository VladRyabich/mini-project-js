const userSection = document.getElementById('userSection');
document.body.appendChild(userSection);

const userDetails = document.getElementById('userDetails');
userSection.appendChild(userDetails);

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idUser = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        .then(response => response.json())
        .then(user => {
            const heroTitle = document.createElement('h1');
            heroTitle.classList.add('hero-title');
            heroTitle.innerHTML = `User Details: <span class="hero-name">${user.name}</span>`;

            const userContainer = document.getElementById('userDetails');
            const userBlock = document.createElement('ul');
            userBlock.classList.add('user-block');
            userBlock.innerHTML = ` <li class="user-info">
                                        <h2 class="user-info-title">ID:</h2>
                                        <p class="user-info-text">${user.id}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Name:</h2>
                                        <p class="user-info-text">${user.name}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Username:</h2>
                                        <p class="user-info-text">${user.username}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Email:</h2>
                                        <p class="user-info-text">${user.email}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Street:</h2>
                                        <p class="user-info-text">${user.address.street}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Suite:</h2>
                                        <p class="user-info-text">${user.address.suite}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">City:</h2>
                                        <p class="user-info-text">${user.address.city}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Zipcode:</h2>
                                        <p class="user-info-text">${user.address.zipcode}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Geodate latitude:</h2>
                                        <p class="user-info-text">${user.address.geo.lat}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Geodate longitude:</h2>
                                        <p class="user-info-text">${user.address.geo.lng}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Phone:</h2>
                                        <p class="user-info-text">${user.phone}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Website:</h2>
                                        <p class="user-info-text">${user.website}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Company name:</h2>
                                        <p class="user-info-text">${user.company.name}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Company catchphrase:</h2>
                                        <p class="user-info-text">${user.company.catchPhrase}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Company business:</h2>
                                        <p class="user-info-text">${user.company.bs}</p>
                                    </li>`

            const btnWrapper = document.createElement('div');
            btnWrapper.classList.add('btn-wrapper');

            const postBtn = document.createElement('button');
            postBtn.id = 'post-btn';
            postBtn.innerText = 'post of current user';
            postBtn.classList.add('btn', 'post-btn');
            btnWrapper.appendChild(postBtn);

            const postList = document.createElement('ul');
            postList.id = 'post-list';
            postList.classList.add('post-list');
            userContainer.append(heroTitle, userBlock, btnWrapper, postList);

            document.getElementById('post-btn').addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postContainer = document.getElementById('post-list');
                        postContainer.innerHTML = '';
                        posts.forEach(post => {
                            const postBlock = document.createElement('li');
                            postBlock.classList.add('post-item');
                            postBlock.innerHTML = `
                                <h2 class="post-title">${post.title}</h2>
                                <a class="btn post-details-btn" href="post-details.html?id=${post.id}">View Post Details</a>`;
                            postContainer.appendChild(postBlock);
                        });
                    });
            });

            const backPageWrapper = document.createElement('div');
            backPageWrapper.classList.add('back-page-wrapper');
            backPageWrapper.innerHTML = `<a class="btn" onclick="history.back(); return false;">Back</a>`
            userDetails.appendChild(backPageWrapper);
        });
});