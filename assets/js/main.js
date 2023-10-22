function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}


// Main Menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger");
  const headerNav = document.getElementById("header-nav");
  const bodyElement = document.body;
  const scrollbarWidth = getScrollbarWidth();

  hamburgerButton.addEventListener("click", function () {
    // Toggle menu
    if (headerNav.style.display === "none" || headerNav.style.display === "") {
      headerNav.style.display = "flex";
      bodyElement.style.overflow = "hidden"; // Bloquer le scroll
      bodyElement.style.marginRight = scrollbarWidth + 'px'; // Compenser la largeur de la barre de scroll
    } else {
      headerNav.style.display = "none";
      bodyElement.style.overflow = "auto"; // Réactiver le scroll
      bodyElement.style.marginRight = '0px'; // Retirer la compensation
    }

    // Toggle hamburger icon
    if (hamburgerButton.classList.contains("is-opened")) {
      hamburgerButton.classList.remove("is-opened");
    } else {
      hamburgerButton.classList.add("is-opened");
    }
  });

  // Événement de redimensionnement
  window.addEventListener("resize", function() {
    if (window.innerWidth > 680) {
      headerNav.removeAttribute("style");
      bodyElement.removeAttribute("style");
      hamburgerButton.classList.remove("is-opened");
    }
  });
});


// Modal Contact
const togglerModalNav = document.querySelector(".toggler-modal-nav");
const modal = document.getElementById("modal");
const body = document.body;
// Open
togglerModalNav.onclick = function () {
  modal.style.display = "flex";
  body.style.overflow = "hidden";
}
// Close
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
}


// Modal Single photo
const togglerModalSingle = document.getElementById('toggler-modal-single');

if (togglerModalSingle) {
  togglerModalSingle.addEventListener('click', function () {
    // Récupérez la valeur de la référence de la photo
    const photoRefElement = document.querySelector('.single-photo-txt:nth-child(4)'); // Adaptez ceci si nécessaire
    if (photoRefElement) {
      const photoRef = photoRefElement.textContent.split(' : ')[1].trim();
      const subjectField = document.querySelector('input[name="your-ref"]');
      if (subjectField) {
        // Attribuez cette valeur au champ de formulaire
        subjectField.value = photoRef;
      }
    }

    modal.style.display = "flex";
    body.style.overflow = "hidden"; // Block scroll
  });
}


// Photo thumbnail nav (for single-photo)
document.addEventListener('DOMContentLoaded', function () {
  // Previous photo
  const prevPhotoLink = document.querySelector('.prev-photo a');
  const prevThumbnail = document.getElementById('prev-thumbnail');

  if (prevPhotoLink && prevThumbnail) {
    prevPhotoLink.addEventListener('mouseover', function () {
      prevThumbnail.style.opacity = 1;
    });

    prevPhotoLink.addEventListener('mouseout', function () {
      prevThumbnail.style.opacity = 0;
    });
  }

  // Next photo
  const nextPhotoLink = document.querySelector('.next-photo a');
  const nextThumbnail = document.getElementById('next-thumbnail');

  if (nextPhotoLink && nextThumbnail) {
    nextPhotoLink.addEventListener('mouseover', function () {
      nextThumbnail.style.opacity = 1;
    });

    nextPhotoLink.addEventListener('mouseout', function () {
      nextThumbnail.style.opacity = 0;
    });
  }
});