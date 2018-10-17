<?php
/**
 * @file
 * luggage_bean_adventure.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function luggage_bean_adventure_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'adventure';
  $bean_type->label = 'Adventure Banner';
  $bean_type->options = '';
  $bean_type->description = 'Flashy hero-style banner with ISU Adventure style';
  $export['adventure'] = $bean_type;

  return $export;
}
