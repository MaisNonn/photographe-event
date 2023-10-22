<div class="filters">
  <div class="filter">
    <?php
    wp_dropdown_categories(array(
      'show_option_none' => 'Catégories',
      'option_none_value' => 'default-category',
      'taxonomy'         => 'categorie',
      'name'             => 'categories',
      'id'               => 'filter-category',
      'class'            => 'filter-category',
      'hide_empty'       => false,
      'value_field'      => 'slug'
    ));
    ?>
    <i class="i-chevron-down"></i>
  </div>
  <div class="filter">
    <?php
    wp_dropdown_categories(array(
      'show_option_none' => 'Formats',
      'option_none_value' => 'default-format',
      'taxonomy'         => 'format',
      'name'             => 'formats',
      'id'               => 'filter-format',
      'class'            => 'filter-format',
      'hide_empty'       => false,
      'value_field'      => 'slug'
    ));
    ?>
    <i class="i-chevron-down"></i>
  </div>
  <div class="filter">
    <select name="sort" id="filter-sort" class="filter-sort">
      <option value="default-sort">Trier par</option>
      <option value="new">Plus récent</option>
      <option value="old">Plus ancien</option>
    </select>
    <i class="i-chevron-down"></i>
  </div>
</div>