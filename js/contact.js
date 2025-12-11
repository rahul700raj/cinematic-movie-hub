// Contact Form Handler
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const messageDiv = document.getElementById('form-message');
    
    // Simulate form submission
    messageDiv.className = 'mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400';
    messageDiv.textContent = 'Thank you for your message! We will get back to you soon.';
    messageDiv.classList.remove('hidden');
    
    e.target.reset();
    
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
});