document.addEventListener("DOMContentLoaded", function () {
    const message = document.getElementById("message");
    const startSection = document.querySelector(".start");
    let timeout;

    window.addEventListener("scroll", function () {
        const rect = startSection.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                message.style.opacity = "1";
            }, 100);
        }
    });
});