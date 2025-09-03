// Simple form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // In a real implementation, you would send this data to a server
        // that would then email you. For now, we'll simulate this.
        
        // Create a mailto link that will open the user's email client
        const mailtoLink = `mailto:parthi525855@gmail.com?subject=Message from Portfolio: ${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
        
        // Open the email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message, ' + name + '! Your email client will open to send the message.');
        
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
    });
});