document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('userRole');
    const restrictedContent = document.querySelectorAll('.restricted');

    if (role !== "admin") {
        restrictedContent.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = "contenido_privado.html";
            });
        });
    }
});