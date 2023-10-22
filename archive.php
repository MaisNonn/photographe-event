<?php
/**
 * The template for displaying photo archives.
 *
 * @package WordPress
 * @subpackage Photographe Event
 * @since Photographe Event 1.0
 */

get_header();
?>

<main class="archive-page container">
    <header class="archive-header">
        <h1 class="archive-title">Archive : <?php single_term_title(); ?></h1>
    </header>

    <?php
    // Get the queried object to determine if it's a term or a CPT
    $term = get_queried_object();

    // Set the tax_query based on the nature of the queried object
    $tax_query = array();
    if ($term instanceof WP_Term) {
        $tax_query[] = array(
            'taxonomy' => 'categorie',
            'field' => 'term_id',
            'terms' => $term->term_id
        );
    }

    $args = array(
        'post_type' => 'photo',
        'posts_per_page' => 8,
        'tax_query' => $tax_query
    );

    $photos_query = new WP_Query($args);
    ?>

    <?php if ($photos_query->have_posts()) : ?>
        <div class="gallery">
            <?php while ($photos_query->have_posts()) : $photos_query->the_post(); ?>
                <?php get_template_part('template-parts/photo_block'); ?>
            <?php endwhile; ?>
        </div>
        <?php wp_reset_postdata(); ?>
    <?php endif; ?>

    <button id="load-more" class="btn load-more">Charger plus</button>
</main>

<?php get_footer(); ?>
