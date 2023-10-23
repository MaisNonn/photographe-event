// Attente que le document soit prêt
jQuery(function ($) {

  // Initialisation de la variable de pagination
  let page = 1;

  // Gestionnaire d'événement pour les changements de filtres
  $('#filter-category, #filter-format, #filter-sort').change(function () {

    // Réinitialisation de la pagination à chaque changement de filtre
    page = 1;

    // Récupération des valeurs des filtres
    const category = $('#filter-category').val();
    const format = $('#filter-format').val();
    const sort = $('#filter-sort').val();

    // Modification du bouton pour indiquer un état de chargement
    $('#load-more').text("Chargement...").prop("disabled", true);

    // Requête AJAX pour filtrer les photos
    $.ajax({
      url: frontendajax.ajaxurl,  // URL pour la requête AJAX (généralement défini dans le fichier PHP)
      type: 'POST',
      data: {
        action: 'filter_photos',
        category: category,
        format: format,
        sort: sort
      },
      success: function (response) {

        // Remplacement du contenu actuel de la galerie par le nouveau contenu filtré
        $('.gallery').html(response);

        // Vérifie si la réponse n'est pas vide
        // Si c'est le cas, on réactive le bouton "Charger plus"
        // Sinon, on indique qu'aucune photo n'a été trouvée
        if (response.trim() !== "") {
          $('#load-more').text("Charger plus").prop("disabled", false);
        } else {
          $('#load-more').text("Aucune photo trouvée").prop("disabled", true);
        }
      }
    });
  });

  // Gestionnaire d'événement pour le bouton "Charger plus"
  $('#load-more').click(function () {
    const category = $('#filter-category').val();
    const format = $('#filter-format').val();
    const sort = $('#filter-sort').val();

    // Indication d'un état de chargement pour le bouton
    $('#load-more').text("Chargement...").prop("disabled", true);

    // Incrémentation de la pagination pour charger les éléments suivants
    page++;

    // Requête AJAX pour charger plus de photos
    $.ajax({
      url: frontendajax.ajaxurl,
      type: 'POST',
      data: {
        action: 'filter_photos',
        category: category,
        format: format,
        sort: sort,
        page: page
      },
      success: function (response) {

        // Si la réponse contient des photos, elles sont ajoutées à la galerie
        if (response.trim() !== "" && !response.includes("Aucune photo trouvée")) {
          $('.gallery').append(response);
          $('#load-more').text("Charger plus").prop("disabled", false);
        } else {
          // Sinon, on indique qu'il n'y a pas d'autres photos à charger
          $('#load-more').text("Aucune autre photo").prop("disabled", true);
        }
      }
    });
  });
});
