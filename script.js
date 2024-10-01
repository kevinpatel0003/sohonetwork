document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const userName = document.getElementById('userName').value;
    const responseMessage = Hello, ${userName}! Your data has been submitted.;
    
    document.getElementById('responseMessage').innerText = responseMessage;

    // Here, you would typically send this data to your server
});
