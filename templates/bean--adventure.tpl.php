<div class="bean-adventure">
  <?php print render($title_suffix) ?>
  
  <img class="bean-adventure_image" src="<?php print file_create_url($bean->field_adventure_image['und'][0]['uri']); ?>" alt="<?php print $bean->field_adventure_image['und'][0]['alt']; ?>">

  <div class="bean-adventure_caption-wrapper <?php if(isset($bean->field_adventure_position['und'][0]['value'])): print $bean->field_adventure_position['und'][0]['value']; endif; ?> <?php print $class ?>" style="background-image: url(<?php print base_path()?><?php print drupal_get_path('module', 'luggage_bean_adventure') . '/images/transparent-dots.png' ?>)">

    <img class="bean-adventure_arrow" src="<?php print base_path()?><?php print drupal_get_path('module', 'luggage_bean_adventure') . '/images/arrow.svg' ?>" alt=" ">

    <div class="bean-adventure_content-wrapper">
      
      <?php if ($bean->title !== ''): ?>
      <h2 class="bean-adventure_title"><?php print $title; ?></h2>
      <?php endif; ?>

      <?php if (isset($bean->field_adventure_caption['und'][0]['value'])): ?>
      <div class="bean-adventure_caption"><?php print $bean->field_adventure_caption['und'][0]['value'] ?>
      </div>
      <?php endif; ?>

      <?php if (isset($bean->field_adventure_url['und'][0]['url'])): ?>
      <a class="bean-adventure_button" href="<?php print $bean->field_adventure_url['und'][0]['url']; ?>"><?php print $bean->field_adventure_url['und'][0]['title']; ?></a>
      <?php endif; ?>
    </div>

  </div>
</div>
