// contact.js - Version corrigée

document.addEventListener('DOMContentLoaded', function() {

    // Récupérer le formulaire
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    if (!form) {
        console.error('Formulaire non trouvé !');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            statusDiv.innerHTML = '❌ Remplis tous les champs';
            statusDiv.style.color = 'red';
            return;
        }

        statusDiv.innerHTML = '📤 Envoi...';
        statusDiv.style.color = 'blue';

        // Initialiser EmailJS
        emailjs.init('esCrIdJn9tpEWknIy');
        
        // Envoyer l'email (avec le BON Template ID)
        emailjs.send('service_portfolio', 'template_est21gl', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function() {
            statusDiv.innerHTML = '✅ Message envoyé avec succès !';
            statusDiv.style.color = 'green';
            form.reset();
        })
        .catch(function(error) {
            statusDiv.innerHTML = '❌ Erreur: ' + error.text;
            statusDiv.style.color = 'red';
            console.error('Erreur EmailJS:', error);
        });
    });

});