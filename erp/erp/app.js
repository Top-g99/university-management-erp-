// Show/hide password toggle
(function() {
    const passwordInput = document.getElementById('password');
    if (!passwordInput) return;
    // Create toggle button
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.textContent = 'Show';
    toggle.className = 'toggle-password';
    toggle.style.marginLeft = '0.5rem';
    toggle.style.marginTop = '-2.2rem';
    toggle.style.position = 'relative';
    toggle.style.float = 'right';
    passwordInput.parentNode.insertBefore(toggle, passwordInput.nextSibling);
    toggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggle.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            toggle.textContent = 'Show';
        }
    });
})();

// Language selector placeholder
(function() {
    const langSelect = document.getElementById('languageSelect');
    if (!langSelect) return;
    langSelect.addEventListener('change', function() {
        // Placeholder: In production, load translations here
        alert('Language switching coming soon!');
    });
})();