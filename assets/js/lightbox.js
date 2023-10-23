// On attend que le document soit prêt
jQuery(document).ready(function ($) {

  // Variable pour suivre l'image actuellement visualisée en plein écran
  let currentImage;

  // Gestionnaire d'événement pour le clic sur un élément avec la classe 'gallery-fullscreen'
  $(document).on('click', '.gallery-fullscreen', function (e) {
    // Empêche le comportement par défaut de l'événement
    e.preventDefault();

    // Trouve l'élément parent le plus proche avec la classe 'gallery-item' et le stocke
    currentImage = $(this).closest('.gallery-item');

    // Récupère l'URL de l'image et d'autres données associées à l'élément cliqué
    const imgSrc = $(this).data('src');
    const imgReference = $(this).data('reference'); // Récupère la référence
    const imgCategory = currentImage.find('.gallery-category').text();
    const imgTitle = currentImage.find('.gallery-title').text(); // Récupère le titre

    // Met à jour la lightbox avec les données récupérées
    $('.lightbox .lightbox-content img').attr('src', imgSrc);
    $('.lightbox .lightbox-title').text(imgTitle); // Affiche le titre
    $('.lightbox .lightbox-reference').text(imgReference);
    $('.lightbox .lightbox-category').text(imgCategory);

    // Ajout de classes pour afficher la lightbox et empêcher le défilement du corps
    $('body').addClass('no-scroll');
    $('.lightbox').addClass('lightbox-visible');
  });

  // Gestionnaire d'événement pour le clic sur le bouton 'Suivant' de la lightbox
  $(document).on('click', '.lightbox-next', function () {
    // Récupère l'élément suivant avec la classe 'gallery-item'
    let nextImage = currentImage.next('.gallery-item');
    
    // Si on est à la dernière image, on revient à la première
    if (!nextImage.length) {
      nextImage = $('.gallery-item').first();
    }
    currentImage = nextImage;
    const nextLink = nextImage.find('.gallery-fullscreen');
    nextLink.click();

    // Réajustement de la classe pour empêcher le défilement
    $('body').removeClass('no-scroll').addClass('no-scroll');
  });

  // Gestionnaire d'événement pour le clic sur le bouton 'Précédent' de la lightbox
  $(document).on('click', '.lightbox-prev', function () {
    // Récupère l'élément précédent avec la classe 'gallery-item'
    let prevImage = currentImage.prev('.gallery-item');
    
    // Si on est à la première image, on revient à la dernière
    if (!prevImage.length) {
      prevImage = $('.gallery-item').last();
    }
    currentImage = prevImage;
    const prevLink = prevImage.find('.gallery-fullscreen');
    prevLink.click();

    // Réajustement de la classe pour empêcher le défilement
    $('body').removeClass('no-scroll').addClass('no-scroll');
  });

  // Gestionnaire d'événement pour le clic sur le bouton 'Fermer' de la lightbox
  $(document).on('click', '.lightbox-close', function () {
    // Masque la lightbox
    $('.lightbox').removeClass('lightbox-visible');

    // Suppression de la classe pour permettre le défilement
    $('body').removeClass('no-scroll');
  });
});
