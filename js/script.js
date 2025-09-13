document.addEventListener('DOMContentLoaded', () => {

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (hamburgerBtn && mobileMenu && hamburgerIcon && closeIcon) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    const nameModalOverlay = document.getElementById('name-modal-overlay');

    if (nameModalOverlay) {
        const nameForm = document.getElementById('name-form');
        const nameInput = document.getElementById('name-input');
        const usernameSpan = document.getElementById('username');
        const closeModalBtn = document.getElementById('close-modal-btn');

        const hideModal = () => {
            nameModalOverlay.classList.add('hidden');
        };

        nameForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = nameInput.value.trim();
            if (name) {
                usernameSpan.innerText = name;
                hideModal();
            } else {
                alert("Name cannot be empty!");
            }
        });

        closeModalBtn.addEventListener('click', hideModal);
    }


    const messageForm = document.getElementById('message-form');

    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('message').value;

            if (name.trim() === "" || birthdate.trim() === "" || !gender || message.trim() === "") {
                alert("All fields must be filled out!");
                return;
            }

            const currentTime = new Date().toLocaleString('id-ID');
            document.getElementById("current-time").innerText = currentTime;
            document.getElementById("sender-name").innerText = name;
            document.getElementById("sender-birthdate").innerText = birthdate;
            document.getElementById("sender-gender").innerText = gender.value;
            document.getElementById("sender-message").innerText = message;

            messageForm.reset();
        });
    }
});