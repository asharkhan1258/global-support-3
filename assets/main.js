document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".reveal, .left, .right");
    const backToTopButton = document.querySelector(".backtop");

    /* Scroll reveal animations */
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
        }
    );

    animatedElements.forEach((element) => {
        revealObserver.observe(element);
    });

    /* Back-to-top button */
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 450) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});
