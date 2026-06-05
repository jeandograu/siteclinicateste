console.log("Site carregado!");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");
    const success = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (success) {
                success.textContent = "Appointment scheduled successfully!";
            }

            form.reset();
        });
    }
});
