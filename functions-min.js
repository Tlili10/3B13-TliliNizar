$(document).ready(function(){

    // Défilement fluide
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Animation de la barre de navigation lors du défilement
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navigation').addClass('scrolled');
        } else {
            $('.navigation').removeClass('scrolled');
        }
    });

    // Validation du formulaire de contact (ajustez selon votre formulaire HTML)
    function validateForm() {
        var name = document.forms["myForm"]["fname"].value;
        if (name == "") {
            alert("Name must be filled out");
            return false;
        }
        // Ajoutez d'autres validations ici si nécessaire
    }

    // Effet Lightbox pour les images (ajustez selon votre HTML)
    $(".portfolio-image").click(function(){
        var image_src = $(this).attr("src");
        $("#lightbox").html("<img src='" + image_src + "' class='lightbox-img'/>");
        $("#lightbox").fadeIn();
    });

    $("#lightbox").click(function(){
        $(this).fadeOut();
    });
});

// Assurez-vous que les fonctions comme validateForm sont accessibles globalement si nécessaire
window.validateForm = validateForm;
