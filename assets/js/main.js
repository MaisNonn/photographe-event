// Variables
const body = document.body;

// Main Menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const headerNav = document.getElementById("header-nav");

  hamburger.addEventListener("click", function () {
    // Toggle menu
    if (headerNav.style.display === "none" || headerNav.style.display === "") {
      headerNav.style.display = "flex";
      body.classList.add("no-scroll"); // Bloquer le scroll
    } else {
      headerNav.style.display = "none";
      body.classList.remove("no-scroll"); // Réactiver le scroll
    }

    // Toggle hamburger icon
    hamburger.classList.toggle("is-opened"); // Ajoute/retire la classe is-opened
  });

  // Événement de redimensionnement
  window.addEventListener("resize", function() {
    if (window.innerWidth > 680) {
      headerNav.removeAttribute("style");
      body.style.marginRight = '0px';
      hamburger.classList.remove("is-opened");
    }
  });
});

// Initialisation de la modale "Contact"
// Récupération de l'élément qui déclenche la modale à l'aide de sa classe
const togglerModalNav = document.querySelector(".toggler-modal-nav");

// Récupération de la modale elle-même à l'aide de son ID
const modal = document.getElementById("modal");

// Gestionnaire d'événement pour ouvrir la modale
// Lorsqu'on clique sur le déclencheur
togglerModalNav.onclick = function () {
  // Modifie le style de la modale pour la rendre visible (en mode flex)
  modal.style.display = "flex";
  
  // Ajoute la classe "no-scroll" au body pour empêcher le défilement de la page lorsque la modale est ouverte
  body.classList.add("no-scroll");
}

// Gestionnaire d'événement pour fermer la modale
// Lorsqu'on clique en dehors de celle-ci
window.onclick = function (event) {
  // Vérifie si la zone cliquée est la modale elle-même
  // (ce qui signifie que l'utilisateur a cliqué en dehors du contenu de la modale)
  if (event.target == modal) {
    // Modifie le style de la modale pour la cacher
    modal.style.display = "none";
    
    // Supprime la classe "no-scroll" pour permettre à nouveau le défilement de la page
    body.classList.remove("no-scroll");
  }
}


// Modal Single photo
const togglerModalSingle = document.getElementById('toggler-modal-single');

if (togglerModalSingle) {
  togglerModalSingle.addEventListener('click', function () {
    const photoRefElement = document.querySelector('.single-photo-txt:nth-child(4)'); // Récupère la valeur référence de la photo
    if (photoRefElement) {
      const photoRef = photoRefElement.textContent.split(' : ')[1].trim();
      const subjectField = document.querySelector('input[name="your-ref"]');
      if (subjectField) {
        subjectField.value = photoRef; // Attribution de cette valeur au champ de formulaire
      }
    }

    modal.style.display = "flex";
    body.classList.add("no-scroll");
  });
}

// Photo thumbnail nav (for single-photo)
document.addEventListener('DOMContentLoaded', function () {
  const prevPhotoLink = document.querySelector('.prev-photo a');
  const prevThumbnail = document.getElementById('prev-thumbnail');
  const nextPhotoLink = document.querySelector('.next-photo a');
  const nextThumbnail = document.getElementById('next-thumbnail');

  // Previous photo
  if (prevPhotoLink && prevThumbnail) {
    prevPhotoLink.addEventListener('mouseover', function () {
      prevThumbnail.style.opacity = 1;
    });

    prevPhotoLink.addEventListener('mouseout', function () {
      prevThumbnail.style.opacity = 0;
    });
  }

  // Next photo
  if (nextPhotoLink && nextThumbnail) {
    nextPhotoLink.addEventListener('mouseover', function () {
      nextThumbnail.style.opacity = 1;
    });

    nextPhotoLink.addEventListener('mouseout', function () {
      nextThumbnail.style.opacity = 0;
    });
  }
});

