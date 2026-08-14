// Home page button

const exploreButton = document.querySelector(".hero button");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        alert("Welcome to Happy Aquascape! 🐠🌿");
    });
}


// Contact form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "! Your message has been received. 🐠"
        );

        contactForm.reset();
    });
}