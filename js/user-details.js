const userSection = document.createElement('section');
userSection.id = 'user-details-container';
userSection.classList.add('user-section');
document.body.appendChild(userSection);

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idUser = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        .then(response => response.json())
        .then(user => {
            const userSection = document.getElementById('user-details-container');
            const userBlock = document.createElement('ul');
            userBlock.classList.add('user-block');
            userBlock.innerHTML = ` <li class="user-info">
                                        <h2 class="user-info-title">ID:</h2>
                                        <p>${user.id}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Name:</h2>
                                        <p>${user.name}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Username:</h2>
                                        <p>${user.username}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Email:</h2>
                                        <p>${user.email}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Address:</h2>
                                        <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                                        <div class="addres-geo-wrapper">
                                            <h3>address.geo.lat:</h3>
                                            <p>${user.address.geo.lat}</p>
                                            <h3>address.geo.lng:</h3>
                                            <p>${user.address.geo.lng}</p>
                                        </div>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Phone:</h2>
                                        <p>${user.phone}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Website:</h2>
                                        <p>${user.website}</p>
                                    </li>
                                    <li class="user-info">
                                        <h2 class="user-info-title">Company:</h2>
                                        <p>${user.company.name}</p>
                                    </li>
                                    <button class="posts-btn" id="posts-btn">post of current user</button>`

            const postList = document.createElement('ul');
            postList.id = 'posts-container';
            userSection.append(userBlock, postList);

            document.getElementById('posts-btn').addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postsContainer = document.getElementById('posts-container');
                        postsContainer.innerHTML = '';
                        posts.forEach(post => {
                            const postBlock = document.createElement('li');
                            postBlock.classList.add('post-block');
                            postBlock.innerHTML = `
                                <p class="comment-text">${post.title}</p>
                                <a class="post-details-btn" href="post-details.html?id=${post.id}">View Post Details</a>
                            `;
                            postsContainer.appendChild(postBlock);
                        });
                    });
            });
        });
});