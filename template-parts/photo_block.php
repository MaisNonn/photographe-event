<figure class="gallery-item">
  <?php the_post_thumbnail(); ?>
  <figcaption class="gallery-overlay">
    <h3 class="gallery-title"><?php the_title(); ?></h3>
    <span class="gallery-category"><?php the_terms(get_the_ID(), 'categorie', '', ', '); ?></span>
    <a href="<?php the_permalink(); ?>" class="gallery-single">
      <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/img/icon_eye.png'); ?>" alt="Lien vers la photo" />
    </a>
    <a href="#" class="gallery-fullscreen" aria-label="Afficher en plein écran" data-src="<?php the_post_thumbnail_url(); ?>" data-reference="<?php the_field('reference'); ?>">
      <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/img/icon_fullscreen.png'); ?>" alt="" />
    </a>
  </figcaption>
</figure>

