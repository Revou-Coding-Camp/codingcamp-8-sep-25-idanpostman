// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK HAMBURGER MENU ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    // Cek apakah elemen-elemen ada sebelum menambahkan event listener
    if (hamburgerBtn && mobileMenu && hamburgerIcon && closeIcon) {
        hamburgerBtn.addEventListener('click', () => {
            // Tampilkan/sembunyikan menu dropdown
            mobileMenu.classList.toggle('hidden');
            // Ganti ikon hamburger dengan ikon close (X)
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // --- LOGIKA UNTUK MODAL INPUT NAMA ---
    const nameModalOverlay = document.getElementById('name-modal-overlay');
    
    // Hanya jalankan kode modal jika modalnya ada di halaman (hanya di index.html)
    if (nameModalOverlay) {
        const nameForm = document.getElementById('name-form');
        const nameInput = document.getElementById('name-input');
        const usernameSpan = document.getElementById('username');
        const closeModalBtn = document.getElementById('close-modal-btn');

        // Fungsi untuk menyembunyikan modal
        const hideModal = () => {
            nameModalOverlay.classList.add('hidden');
        };

        // Menangani submit dari form nama
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

        // Menangani klik tombol close (X)
        closeModalBtn.addEventListener('click', hideModal);
    }


    // --- LOGIKA UNTUK FORM "MESSAGE US" ---
    const messageForm = document.getElementById('message-form');

    // Hanya jalankan jika form ada di halaman
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Ambil nilai dari form
            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('message').value;

            // Validasi Form
            if (name.trim() === "" || birthdate.trim() === "" || !gender || message.trim() === "") {
                alert("All fields must be filled out!");
                return;
            }

            // Tampilkan data yang di-submit
            const currentTime = new Date().toLocaleString('id-ID');
            document.getElementById("current-time").innerText = currentTime;
            document.getElementById("sender-name").innerText = name;
            document.getElementById("sender-birthdate").innerText = birthdate;
            document.getElementById("sender-gender").innerText = gender.value;
            document.getElementById("sender-message").innerText = message;

            // Kosongkan form setelah submit
            messageForm.reset();
        });
    }
});