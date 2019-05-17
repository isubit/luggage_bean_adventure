(function ($) {

  $(document).ready(function() {

    // These variables come from luggage_bean_adventure.module. Used to get images out of the module folder.

    var module_path = Drupal.settings.luggage_bean_adventure.module_path;
    var base_path = Drupal.settings.luggage_bean_adventure.base_path;
    var full_path = base_path + '/' + module_path;

    // Insert the empty Adventure bean structure at the bottom of the form.

    $('#edit-field-adventure-position').after('<h2>Preview</h2><button type="button" id="adventure_preview_update" class="adventure-preview-update">Update Preview</button><div id="adventure_preview" class="adventure-preview"><div class="bean-adventure"><img id="adventure_image" class="bean-adventure_image" style="min-height: 400px;" src=""><div id="adventure_position" class="bean-adventure_position-wrapper"><div id="adventure_content" class="bean-adventure_caption-wrapper" style="background-image:url('+ full_path +'/images/red-dots-85.png)"><img class="bean-adventure_arrow" src="'+ full_path +'/images/arrow.svg"><div class="bean-adventure_content-wrapper"><h2 id="adventure_title" class="bean-adventure_title"></h2><div id="adventure_caption" class="bean-adventure_caption"></div><a id="adventure_link_title" class="bean-adventure_button" href="#"></a></div></div></div></div></div>');


    var adventure_title = $('input#edit-title').val();
    var adventure_caption = $('textarea#edit-field-adventure-caption-und-0-value').val();
    var adventure_link_title = $('input#edit-field-adventure-url-und-0-title').val();

    $('#adventure_preview_update').click(function() {

      var adventure_title = $('input#edit-title').val();
      var adventure_caption = $('textarea#edit-field-adventure-caption-und-0-value').val();
      var adventure_link_title = $('input#edit-field-adventure-url-und-0-title').val();
      var adventure_position = $('select#edit-field-adventure-position-und').val();

      // 01. If all of the fields are empty, hide the container. If not, show it.
      if (adventure_title == '' && adventure_caption == '' && adventure_link_title == '') {
        $('#adventure_content').hide();
      } else {
        $('#adventure_content').show();
      }

      // 02. Title
      $('#adventure_title').html(adventure_title);

      if (adventure_title == '') {
        $('#adventure_title').hide();
      } else { 
        $('#adventure_title').show();
      }

      // 03. Caption
      $('#adventure_caption').html(adventure_caption);

      if (adventure_caption == '') {
          $('#adventure_caption').hide();
        } else { 
          $('#adventure_caption').show();
      }

      // 04. Button
      $('#adventure_link_title').html(adventure_link_title);

      if (adventure_link_title == '') {
          $('#adventure_link_title').hide();
        } else { 
          $('#adventure_link_title').show(); $('#adventure_content').show();
      }

      // 05. Position
      $('#adventure_position').attr('class', 'bean-adventure_position-wrapper ' + adventure_position);

      // 06. Image
      var adventure_image_raw = $('.image-widget-data a').attr('href');

      if (typeof adventure_image_raw != 'undefined') {
        var adventure_image = adventure_image_raw.split('#')[0];
        $('#adventure_image').attr('src', adventure_image);
      }

    });

  });

})(jQuery);
