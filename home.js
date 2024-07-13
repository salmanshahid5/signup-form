const loginUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loginUser) {
    alert("No user is logged to");
    setInterval(() => {
        window.location.href = "login.js";
    }, 1000);
}
else {
    document.getElementById('username').textContent = loginUser.username;
}
document.getElementById('logoutbtn')
    .addEventListener('click', function () {
        localStorage.removeItem('loginUser');
        alert('logged out successfully');

        setInterval(() => {
            window.location.href = "login.html";
        }, 1000);
    })


function displayPosts() {
    const postsSection = document.querySelector('#posts');
    postsSection.innerHTML = "";
    if (loginUser && loginUser.posts) {
        loginUser.posts.forEach(post, index => {
            const postElement = document.createElement('div');
            postElement.classList.add("posts")
            postElement.innerHTML = `
            <p class="author"> Posted By: ${post.author}</p>
            <p class="content"> ${post.content}</p>
            <p class="timeStamp"> Posted at: ${post.createdAt}</p>
            <div class = "actions">
            <button onclick="editPost(${index})">Edit</button>
                    <button onclick="deletePost(${index})">Delete</button>
                </div>`;
            postsSection.appendChild(postElement);
        });
    }
}

document.getElementById('postBtn')
    .addEventListener('click', function () {
        const content = document.getElementById('postcontent').value.trim();
        // console.log(content);
        if (!content) {
            alert("Please enter some content for your post.");
            return;
        }

        // setTimeout(() => {
        //     const post = {
        //         author: loginUser.username,
        //         content: content,
        //         createdAt: new Date().toLocaleString(),
        //     }
        //     loginUser.posts.unshift(post)
        //     localStorage.setItem("loginUser", JSON.stringify(loginUser));

        //     document.getElementById("postcontent").value = "";
        //     displayPosts();
        // }, 1000);
    })


