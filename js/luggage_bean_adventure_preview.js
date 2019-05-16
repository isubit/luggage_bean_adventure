(function ($) {

  $(document).ready(function() {

    Drupal.behaviors.luggage_bean_adventure = {
        attach: function (context, settings) {
          // You can access the variable by using var 
          module_path = Drupal.settings.luggage_bean_adventure.module_path;
          console.log(Drupal.settings.luggage_bean_adventure.module_path);

        }
      };

    var module_path = Drupal.settings.luggage_bean_adventure.module_path;
    var base_path = Drupal.settings.luggage_bean_adventure.base_path;
    var full_path = base_path + '/' + module_path;
    console.log(full_path);

    $('#edit-field-adventure-position').after('<h2>Preview</h2><div id="adventure_preview"><div class="bean-adventure"><img class="bean-adventure_image" src="http://placehold.it/600x300"><div id="adventure_position" class="bean-adventure_position-wrapper"><div class="bean-adventure_caption-wrapper" style="background-image:url('+ full_path +'/images/red-dots-85.png)"><img class="bean-adventure_arrow" src="'+ full_path +'/images/arrow.svg"><div class="bean-adventure_content-wrapper"><h2 id="adventure_title" class="bean-adventure_title">Title</h2><div id="adventure_caption" class="bean-adventure_caption">Caption</div><a id="adventure_link_title" class="bean-adventure_button" href="#">Button</a></div></div></div></div></div>');

    // Check title
    $('input#edit-title').change(function(){
        var adventure_title = $(this).val();
        console.log(adventure_title);
        $('#adventure_title').html(adventure_title);
    });

    // Check image
    $('select#edit-field-adventure-position-und').change(function(){
        var adventure_position = $(this).val();
        console.log(adventure_position);
        $('#adventure_position').html(adventure_position);
    });

    // Check caption
    $('textarea#edit-field-adventure-caption-und-0-value').change(function(){
        var adventure_caption = $(this).val();
        console.log(adventure_caption);
        $('#adventure_caption').html(adventure_caption);
    });

    // Check link title
    $('input#edit-field-adventure-url-und-0-title').change(function(){
        var adventure_link_title = $(this).val();
        console.log(adventure_link_title);
        $('#adventure_link_title').html(adventure_link_title);
    });

    // Check link url
    /*$('input#edit-field-adventure-url-und-0-url').change(function(){
        var adventure_link_url = $(this).val();
        console.log(adventure_link_url);
        $('#adventure_link_url').html(adventure_link_url);
    });*/

    // Check position
    $('select#edit-field-adventure-position-und').change(function(){
        var adventure_position = $(this).val();
        console.log(adventure_position);
        $('#adventure_position').class('bean-adventure_position-wrapper' + adventure_position);
    });

  });

})(jQuery);
