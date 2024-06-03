const postSection = document.getElementById('postSection');
document.body.appendChild(postSection);

const container = document.getElementById('postContainer');
postSection.appendChild(container);

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idPost = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(response => response.json())
        .then(post => {
            const container = document.getElementById('postContainer');
            const postBlock = document.createElement('div');
            postBlock.classList.add('post-details');
            postBlock.innerHTML = `
                <h1 class="hero-title post-hero-title">${post.title}</h1>
                <p class="post-block-text">${post.body}</p>
            `;
            const commentsTitle = document.createElement('h2');
            commentsTitle.classList.add('hero-title');
            commentsTitle.innerText = 'Comments';
            container.append(postBlock, commentsTitle);


            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    const commentsList = document.createElement('ul');
                    commentsList.classList.add('comments-list');
                    comments.forEach(comment => {
                        const commentItem = document.createElement('li');
                        commentItem.classList.add('comment-item');
                        commentItem.innerHTML = `  <ul class="comment-info-list">
                                                        <li class="comment-info-item">
                                                            <h2 class="comment-info-title">Name:</h2>
                                                            <p class="comment-info">${comment.name}</p>
                                                        </li>
                                                        <li class="comment-info-item">
                                                            <h2 class="comment-info-title">Email:</h2>
                                                            <p class="comment-info">${comment.email}</p>
                                                        </li>
                                                        <li class="comment-info-item">
                                                            <p class="comment-info-text">${comment.body}</p>                     
                                                        </li>
                                                    </ul>`;
                        commentsList.appendChild(commentItem);
                    });
                    container.appendChild(commentsList);


                    const backPageWrapper = document.createElement('div');
                    backPageWrapper.classList.add('back-page-wrapper');
                    backPageWrapper.innerHTML = `<a class="btn" onclick="history.back(); return false;">Back</a>`;
                    container.appendChild(backPageWrapper);
                });
        });
});