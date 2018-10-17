<?php
/**
 * @file
 * luggage_bean_adventure.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function luggage_bean_adventure_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'edit any adventure bean'.
  $permissions['edit any adventure bean'] = array(
    'name' => 'edit any adventure bean',
    'roles' => array(
      'content editor' => 'content editor',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'view any adventure bean'.
  $permissions['view any adventure bean'] = array(
    'name' => 'view any adventure bean',
    'roles' => array(
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'bean',
  );

  return $permissions;
}
