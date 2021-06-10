// http://simplonline.co/13-ressources/86-website-onepage-avec-bootstrap
function scrollmovement() {
    //mouvement fluide 
    $(function () {
        //au click sur chaque lien nous ferons apelle à la fonction animate de Jquery
        $('nav a').on('click', function (e) {
            e.preventDefault();
            // hash permet de cibler le href de nos liens.
            var hash = this.hash;
            if (this.href.match(/index.html/) {
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
}
function addheight() {
    //Définie la taille des sections 
    $(document).ready(function () {
        jQuery('document').ready(function () {
            //On définie notre variable min_height à la hateur de notre fenètre
            var min_height = jQuery(window).height();
            //Si notre section  est infèrieur à min_height alors on lui donne comme propriété css une hauteur minimal égal à min_height
            if (jQuery('section').height() < min_height) {
                jQuery('section').css({
                    'min-height': +min_height + 'px'
                });
            }
        });
    });
}
