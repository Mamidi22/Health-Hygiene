document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    let responseMessage = document.getElementById('responseMessage');
    let modal = document.getElementById('responseModal');
    let span = document.getElementsByClassName('close')[0];
    
    if (name && email && message) {
        responseMessage.textContent = `Thank you, ${name}! We have received your message.`;
        responseMessage.style.color = 'green';

        // Log user details to the console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Display user details on the webpage
        displayUserDetails(name, email, message);
    } else {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
    }
    
    modal.style.display = 'block';
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

function displayUserDetails(name, email, message) {
    let userDetailsSection = document.getElementById('userDetails');
    let userDetailsHTML = `
        <h2>User Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    userDetailsSection.innerHTML = userDetailsHTML;
}
