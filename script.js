// Toggle visibility of sign up form
document.getElementById('getStartedBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.toggle('hidden');
});

// Handle form submission for sign up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Here you can perform further validation and send the data to your backend for account creation
    // For demonstration purposes, let's just log the values
    console.log("Username: " + username + ", Email: " + email + ", Password: " + password);
    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});


// Sample data for forum posts (for demonstration purposes)
const forumPosts = [
    { topic: "family", title: "Siblings Fighting", content: "My kids won't stop fighting. Any advice on sibling rivalry?" },
    { topic: "parenting", title: "Screen Time Management", content: "How do you manage screen time for kids? Looking for tips!" },
    { topic: "community", title: "Neighborhood Safety", content: "Let's discuss ways to improve safety in our community." }
];

// Function to display forum posts based on selected topic
function displayPosts(topic) {
    const postContainer = document.querySelector('.post-container');
    postContainer.innerHTML = '';
    forumPosts.forEach(post => {
        if (topic === 'all' || post.topic === topic) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            postContainer.appendChild(postElement);
        }
    });
}

// Display initial forum posts (all topics)
displayPosts('all');

// Handle topic selection
document.getElementById('topicSelect').addEventListener('change', function() {
    const selectedTopic = this.value;
    displayPosts(selectedTopic);
});

// Handle form submission for posting new content
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Get form values
    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;
    const selectedTopic = document.getElementById('topicSelect').value;
    // Add new post to the forumPosts array
    forumPosts.unshift({ topic: selectedTopic, title: postTitle, content: postContent });
    // Clear form fields
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    // Refresh forum posts display
    displayPosts(selectedTopic);
});

