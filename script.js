document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        const answer = button.nextElementSibling;
        answer.style.display = 'none';
        const icon = button.querySelector('.faq-icon');
        icon.style.transform = 'rotate(0deg)';
    });
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const answer = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (isExpanded) {
                answer.style.display = 'none';
                const icon = this.querySelector('.faq-icon');
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.display = 'block';
                const icon = this.querySelector('.faq-icon');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});