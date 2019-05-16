(function ($) {

  $(document).ready(function() {

    // These variables come from luggage_bean_adventure.module. Used to get images out of the module folder.

    var module_path = Drupal.settings.luggage_bean_adventure.module_path;
    var base_path = Drupal.settings.luggage_bean_adventure.base_path;
    var full_path = base_path + '/' + module_path;

    // Insert the empty Adventure bean structure at the bottom of the form.

    $('#edit-field-adventure-position').after('<h2>Preview</h2><p>This preview is approximate. Be sure to view the banner with different screen widths.</p><div id="adventure_preview"><div class="bean-adventure"><img id="adventure_image" class="bean-adventure_image" src="'+ full_path +'/images/placeholder.png"><div id="adventure_position" class="bean-adventure_position-wrapper"><div id="adventure_content" class="bean-adventure_caption-wrapper" style="background-image:url('+ full_path +'/images/red-dots-85.png)"><img class="bean-adventure_arrow" src="'+ full_path +'/images/arrow.svg"><div class="bean-adventure_content-wrapper"><h2 id="adventure_title" class="bean-adventure_title">Title</h2><div id="adventure_caption" class="bean-adventure_caption">Caption</div><a id="adventure_link_title" class="bean-adventure_button" href="#"></a></div></div></div></div></div>');

    // 01. Show or hide the entire caption block if any of the fields are present or not.

    var adventure_title = $('input#edit-title').val();
    var adventure_caption = $('textarea#edit-field-adventure-caption-und-0-value').val();
    var adventure_link_title = $('input#edit-field-adventure-url-und-0-title').val();

    // 02. If all of the fields are empty, hide the container. If not, show it.
    if (adventure_title == '' && adventure_caption == '' && adventure_link_title == '') {
      $('#adventure_content').hide();
    } else {
      $('#adventure_content').show();
    }

    // 03. Check again when any of those fields change
    $('input#edit-title, textarea#edit-field-adventure-caption-und-0-value, input#edit-field-adventure-url-und-0-title ').change(function() {
       if (adventure_title == '' && adventure_caption == '' && adventure_link_title == '') {
        $('#adventure_content').hide();
      }
    });

    // 04. Update the title field.
    // ... Get the value of field and add it into the template on page load.
    $('#adventure_title').html(adventure_title);

    // ... If it's empty, hide the element. If it's not, show it and show the wrapper.
    if (adventure_title == '') {
        $('#adventure_title').hide();
      } else { 
        $('#adventure_title').show(); $('#adventure_content').show(); 
    }

    // .. Do the same check when the field is changed.
    $('input#edit-title').change(function(){
      var adventure_title = $(this).val();

      if (adventure_title == '') {
        $('#adventure_title').hide();
      } else { 
        $('#adventure_title').show(); $('#adventure_content').show();
      }

      $('#adventure_title').html(adventure_title);
    });

    // 05 Update the image
    // .. Get the url of the uploaded image from the link
    var adventure_image = $('.image-widget-data a').attr('href');
    var adventure_image = adventure_image.split('#')[0];

    // .. Use that url for the banner image
    $('#adventure_image').attr('src', adventure_image);

    // .. Check again when the image is changed.
    $(document).ajaxComplete(function() {
      var adventure_image = $('.image-widget-data a').attr('href');
      var adventure_image = adventure_image.split('#')[0];
      $('#adventure_image').attr('src', adventure_image);
    });


    // 06 Update the caption
    // .. Follow the same routine as the title above.
    $('#adventure_caption').html(adventure_caption);

    if (adventure_caption == '') {
        $('#adventure_caption').hide();
      } else { 
        $('#adventure_caption').show();
    }

    $('textarea#edit-field-adventure-caption-und-0-value').change(function(){
      var adventure_caption = $(this).val();

      if (adventure_caption == '') {
        $('#adventure_caption').hide();
      } else { 
        $('#adventure_caption').show(); $('#adventure_content').show();
      }

      $('#adventure_caption').html(adventure_caption);
    });

    // 07 Update the button title
    // .. Follow the same routine as the title above.
    $('#adventure_link_title').html(adventure_link_title);

    if (adventure_link_title == '') {
        $('#adventure_link_title').hide();
      } else { 
        $('#adventure_link_title').show(); $('#adventure_content').show();
    }

    $('input#edit-field-adventure-url-und-0-title').change(function(){
      var adventure_link_title = $(this).val();

      if (adventure_link_title == '') {
        $('#adventure_link_title').hide();
      } else { 
        $('#adventure_link_title').show(); $('#adventure_content').show(); 
      }

      $('#adventure_link_title').html(adventure_link_title);
    });

    // 08 Update the position
    // .. Get the value of the field and use it as the class.
    var adventure_position = $('select#edit-field-adventure-position-und').val();
    $('#adventure_position').attr('class', 'bean-adventure_position-wrapper ' + adventure_position);

    // .. Check again when the field changes.
    $('select#edit-field-adventure-position-und').change(function(){
        var adventure_position = $(this).val();
        $('#adventure_position').attr('class', 'bean-adventure_position-wrapper ' + adventure_position);
    });

  });

})(jQuery);
