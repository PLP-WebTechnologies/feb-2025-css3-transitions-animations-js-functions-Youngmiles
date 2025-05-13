       function loadPreferences() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        updatePreferenceDisplay(isDarkMode);
    }

    function savePreference(key, value) {
        localStorage.setItem(key, value);
    }

    function updatePreferenceDisplay(isDarkMode) {
        document.getElementById('preferenceStatus').textContent = 
            `Dark Mode: ${isDarkMode ? 'On' : 'Off'}`;
    }

    function triggerAnimation(element) {
        element.classList.add('bounce-animation');
        element.addEventListener('animationend', () => {
            element.classList.remove('bounce-animation');
        }, { once: true });
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        savePreference('darkMode', isDarkMode);
        updatePreferenceDisplay(isDarkMode);
    }

    document.addEventListener('DOMContentLoaded', loadPreferences);
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('animateButton').addEventListener('click', () => {
        triggerAnimation(document.getElementById('animatedElement'));
    });
    