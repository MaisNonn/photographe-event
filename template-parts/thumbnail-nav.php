<div class="photo-footer-nav">
  <img class="photo-current-thumbnail" src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'); ?>" alt="<?php echo get_the_title(); ?> thumbnail" />
  <nav class="photo-arrows row">
    <div class="prev-photo">
      <?php
      $prev_post = get_adjacent_post(false, '', true);
      if ($prev_post) {
        $prev_thumbnail = get_the_post_thumbnail($prev_post->ID, 'thumbnail');
        $prev_link = get_permalink($prev_post->ID);
        echo '<a href="' . $prev_link . '" class="hover-trigger"><img src="' . get_stylesheet_directory_uri() . '/assets/img/arrow-left.png" alt="Photo précédente" /></a>';
        echo '<div id="prev-thumbnail" class="hover-thumbnail left">' . $prev_thumbnail . '</div>';
      }
      ?>
    </div>
    <div class="next-photo">
      <?php
      $next_post = get_adjacent_post(false, '', false);
      if ($next_post) {
        $next_thumbnail = get_the_post_thumbnail($next_post->ID, 'thumbnail');
        $next_link = get_permalink($next_post->ID);
        echo '<a href="' . $next_link . '" aria-label="Photo suivante"><img src="' . get_stylesheet_directory_uri() . '/assets/img/arrow-right.png" alt="Photo suivante" /></a>';
        echo '<div id="next-thumbnail" class="hover-thumbnail right">' . $next_thumbnail . '</div>';
      }
      ?>
    </div>
  </nav>
</div>