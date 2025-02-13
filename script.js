$(document).ready(function() {

    // Laadi eelnevalt salvestatud nimi ja e-post localStorage'ist
    if (localStorage.getItem("nimi")) {
        $("#nimi").val(localStorage.getItem("nimi"));
    }
    if (localStorage.getItem("email")) {
        $("#email").val(localStorage.getItem("email"));
    }

    $("#registreerimisVorm").submit(function(event) {
        event.preventDefault(); // Takistab vormi vaikimisi saatmist

        let nimi = $("#nimi").val().trim();
        let email = $("#email").val().trim();
        let sonum = $("#sonum").val().trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Väljade valideerimine
        if (nimi === "" || email === "" || sonum === "") {
            alert("Kõik väljad peavad olema täidetud!");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Palun sisesta korrektne e-posti aadress!");
            return;
        }

        console.log("Saadetud andmed:", { nimi, email, sonum });

        // Salvestame andmed localStorage'i
        localStorage.setItem("nimi", nimi);
        localStorage.setItem("email", email);

        // Kuvame teate ja muudame pildi nähtavaks
        $("#teade").fadeIn();
        $("#pilt")
            .attr("src", "https://thumbs.dreamstime.com/b/success-button-sign-key-push-banner-195877714.jpg?w=450")
            .attr("alt", "Success Image")
            .fadeIn();


        // Simuleerime andmete saatmist serverisse
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: { nimi, email, sonum },
            success: function(response) {
                console.log("Serveri vastus:", response);
            }
        });
    });

});
