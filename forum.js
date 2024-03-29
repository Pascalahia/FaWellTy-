// Sample data for forum posts (for demonstration purposes)
let forumPosts = [
    { title: "Creating Healthy Meal Plans for Families", content: `As a nutritionist and parent, I've found that creating healthy meal plans for families can be challenging yet rewarding. Here are a few tips I've learned along the way:<br><br>
1. Plan Ahead: Take some time at the beginning of each week to plan out meals for the entire week. This can help you stay organized and ensure that you have all the necessary ingredients on hand.<br><br>
2. Include a Variety of Foods: Aim to include a variety of foods from all food groups in your meal plans. This ensures that your family gets a wide range of nutrients and flavors.<br><br>
3. Get the Kids Involved: Get your kids involved in the meal planning process by letting them help choose recipes and prepare meals. This not only teaches them valuable cooking skills but also increases their likelihood of trying new foods.<br><br>
4. Make Healthy Swaps: Look for ways to make healthier versions of your family's favorite dishes. For example, you can swap out white pasta for whole wheat pasta or use Greek yogurt instead of sour cream in recipes.<br><br>
5. Be Flexible: Remember that meal plans are meant to be flexible. Don't be afraid to make adjustments based on your family's preferences and schedule.<br><br>
I hope these tips help you create delicious and nutritious meals for your family! Feel free to share your own meal planning tips and tricks below.`, date: "February 28, 2024", replies: [] }
];

// Function to display forum posts
function displayPosts() {
    const postContainer = document.querySelector('.post-container');
    postContainer.innerHTML = ''; // Clear previous posts

    forumPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        const postItem = document.createElement('li');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p class="author">Posted on: ${post.date}</p>
            <button class="reply-post-btn" data-index="${index}">Reply</button>
        `;
        postContainer.appendChild(postElement);
        //postContainer.appendChild(postItem);


    });
    // Add the new post to the forumPosts array
       // forumPosts.push({ title: postTitle, content: postContent });
}

// Event listener for clicking on "Reply" button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('reply-post-btn')) {
        const index = event.target.dataset.index;
        displayReplyForm(index);
    }
});

// Function to display reply form
function displayReplyForm(index) {
    const replyFormSection = document.querySelector('.post-form'); // Change this line
    const postIndexInput = document.getElementById('postIndex');

    // Set the value of the hidden input to the index of the post being replied to
    postIndexInput.value = index;

    // Display the reply form section
    if (replyFormSection) { // Check if the reply form section exists
        replyFormSection.style.display = 'block';
    }
}

// Function to handle submitting a reply
function submitReply(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const postIndex = document.getElementById('postIndex').value;
    const replyTitle = document.getElementById('replyTitle').value;
    const replyContent = document.getElementById('replyContent').value;

    // Add the reply to the corresponding post
    if (!forumPosts[postIndex].replies) {
        forumPosts[postIndex].replies = [];
    }
    forumPosts[postIndex].replies.push({ title: replyTitle, content: replyContent });

    // Hide the reply form after submission
    const replyFormSection = document.querySelector('.post-form'); // Change this line
    if (replyFormSection) { // Check if the reply form section exists
        replyFormSection.style.display = 'none';
    }

    // Refresh the display to include the new reply
    displayPosts();
}

// Event listener for submitting the reply form
document.getElementById('replyForm').addEventListener('submit', submitReply);

// Call the function to display the forum posts
//displayPosts();




// Sample data for forum history (for demonstration purposes)
const forumHistory = [
    { title: "Important Announcement", date: "März 02, 2024", description: "New feature added to the platform! Check it out." },
    { title: "Discussion: Community Safety", date: "February 20, 2024", description: "Community members discuss safety measures." },
    { title: "Parenting Tips", date: "February 5, 2024", description: "Share your best parenting tips and tricks." },
    { title: "Healthy Eating Habits", date: "January 10, 2024", description: "Exchange ideas on maintaining a healthy diet for the family." },
    { title: "Support for New Parents", date: "January 3, 2024", description: "A space for new parents to seek advice and support from experienced parents." },
    { title: "Volunteer Opportunities", date: "December 02, 2023", description: "Learn about volunteering opportunities in the community and how you can get involved." }
];

// Function to display forum history
function displayHistory() {
    const timeline = document.querySelector('.timeline');
    forumHistory.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.innerHTML = `
            <div class="timeline-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class="timeline-item-date">${item.date}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Display forum history
document.addEventListener('DOMContentLoaded', displayHistory);



/*
// Sample data for forum posts (for demonstration purposes)
let forumPosts = [
    { title: "Creating Healthy Meal Plans for Families", content: `As a nutritionist and parent, I've found that creating healthy meal plans for families can be challenging yet rewarding. Here are a few tips I've learned along the way:<br><br>
1. Plan Ahead: Take some time at the beginning of each week to plan out meals for the entire week. This can help you stay organized and ensure that you have all the necessary ingredients on hand.<br><br>
2. Include a Variety of Foods: Aim to include a variety of foods from all food groups in your meal plans. This ensures that your family gets a wide range of nutrients and flavors.<br><br>
3. Get the Kids Involved: Get your kids involved in the meal planning process by letting them help choose recipes and prepare meals. This not only teaches them valuable cooking skills but also increases their likelihood of trying new foods.<br><br>
4. Make Healthy Swaps: Look for ways to make healthier versions of your family's favorite dishes. For example, you can swap out white pasta for whole wheat pasta or use Greek yogurt instead of sour cream in recipes.<br><br>
5. Be Flexible: Remember that meal plans are meant to be flexible. Don't be afraid to make adjustments based on your family's preferences and schedule.<br><br>
I hope these tips help you create delicious and nutritious meals for your family! Feel free to share your own meal planning tips and tricks below.`, date: "February 28, 2024" }
]
*/
// Function to display user's posts
function displayUserPosts() {
    const userPostsList = document.querySelector('.user-posts-list');
    userPostsList.innerHTML = '';
    forumPosts.forEach((post, index) => {
        const postItem = document.createElement('li');
        postItem.innerHTML = `
            <div class="post-item">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button class="edit-post-btn" data-index="${index}">Edit</button>
            </div>
        `;
        userPostsList.appendChild(postItem);
    });
}




 // Function to handle posting a new post
function postNewPost(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;

    // Add the new post to the forumPosts array
    forumPosts.push({ title: postTitle, content: postContent });

    // Refresh the display to include the new post
    //displayUserPosts();
    displayPosts()
}

// Event listener for submitting the post form
document.getElementById('postForm').addEventListener('submit', postNewPost);

// Call the function to display the user's posts
//displayUserPosts();
displayPosts();

/*
document.addEventListener('DOMContentLoaded', function() {
    // Function to display reply form
    function displayReplyForm(index) {
        const replyFormSection = document.querySelector('.reply-form');
        const postIndexInput = document.getElementById('postIndex');

        // Set the value of the hidden input to the index of the post being replied to
        postIndexInput.value = index;

        // Display the reply form section
        if (replyFormSection) { // Check if the reply form section exists
            replyFormSection.style.display = 'block';
        }
    }

    // Event listener for clicking on "Reply" button
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('reply-post-btn')) {
            const index = event.target.dataset.index;
            displayReplyForm(index);
        }
    });

    // Function to handle submitting a reply
    function submitReply(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const postIndex = document.getElementById('postIndex').value;
        const replyTitle = document.getElementById('replyTitle').value;
        const replyContent = document.getElementById('replyContent').value;

        // Add the reply to the corresponding post
        forumPosts[postIndex].replies.push({ title: replyTitle, content: replyContent });

        // Hide the reply form after submission
        const replyFormSection = document.querySelector('.reply-form');
        if (replyFormSection) { // Check if the reply form section exists
            replyFormSection.style.display = 'none';
        }

        // Refresh the display to include the new reply
        displayPosts();
    }

    // Event listener for submitting the reply form
    document.getElementById('replyForm').addEventListener('submit', submitReply);

    // Call the function to display the user's posts
    displayPosts();
});
// Function to display forum posts
function displayPosts() {
    const postContainer = document.querySelector('.post-container');
    postContainer.innerHTML = ''; // Clear previous posts

    forumPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p class="author">Posted on: ${post.date}</p>
            <button class="reply-post-btn" data-index="${index}">Reply</button>
        `;
        postContainer.appendChild(postElement);
    });
}

// Display forum posts
document.addEventListener('DOMContentLoaded', displayPosts);

// Event listener for clicking on "Reply" button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('reply-post-btn')) {
        const index = event.target.dataset.index;
        displayReplyForm(index);
    }
});*/
