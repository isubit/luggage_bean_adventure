(function ($) {

  $(document).ready(function() {

    Drupal.behaviors.luggage_bean_adventure = {
      attach: function (context, settings) {
        // You can access the variable by using var 
        module_path = Drupal.settings.luggage_bean_adventure.module_path;
      }
    };

    var module_path = Drupal.settings.luggage_bean_adventure.module_path;
    var base_path = Drupal.settings.luggage_bean_adventure.base_path;
    var full_path = base_path + '/' + module_path;

    $('#edit-field-adventure-position').after('<h2>Preview</h2><p>This preview is approximate. Be sure to view the banner with different screen widths.</p><div id="adventure_preview"><div class="bean-adventure"><img class="bean-adventure_image" src="'+ full_path +'/images/placeholder.png"><div id="adventure_position" class="bean-adventure_position-wrapper"><div id="adventure_content" class="bean-adventure_caption-wrapper" style="background-image:url('+ full_path +'/images/red-dots-85.png)"><img class="bean-adventure_arrow" src="'+ full_path +'/images/arrow.svg"><div class="bean-adventure_content-wrapper"><h2 id="adventure_title" class="bean-adventure_title">Title</h2><div id="adventure_caption" class="bean-adventure_caption">Caption</div><a id="adventure_link_title" class="bean-adventure_button" href="#"></a></div></div></div></div></div>');

    var adventure_title = $('input#edit-title').val();
    var adventure_caption = $('textarea#edit-field-adventure-caption-und-0-value').val();
    var adventure_link_title = $('input#edit-field-adventure-url-und-0-title').val();

    // SHOW/HIDE the WHOLE CAPTION
    // First check on page load
    if (adventure_title == '' && adventure_caption == '' && adventure_link_title == '') {
      $('#adventure_content').hide();
      console.log('off load');
    } else {
      $('#adventure_content').show();
      console.log('on load');
    }

    // Then check on change
    $('input#edit-title, textarea#edit-field-adventure-caption-und-0-value, input#edit-field-adventure-url-und-0-title ').change(function() {
       if (adventure_title == '' && adventure_caption == '' && adventure_link_title == '') {
        $('#adventure_content').hide();
      }
    });

    // CHECK TITLE
    // First check on page load
    $('#adventure_title').html(adventure_title);

    if (adventure_title == '') {
        $('#adventure_title').hide();
      } else { 
        $('#adventure_title').show(); $('#adventure_content').show(); 
    }

    // Then check on change
    $('input#edit-title').change(function(){
      var adventure_title = $(this).val();

      if (adventure_title == '') {
        $('#adventure_title').hide();
      } else { 
        $('#adventure_title').show(); $('#adventure_content').show();
      }

      $('#adventure_title').html(adventure_title);
    });

    // CHECK IMAGE

    // CHECK CAPTION
    // First check on page load
    $('#adventure_caption').html(adventure_caption);

    if (adventure_caption == '') {
        $('#adventure_caption').hide();
      } else { 
        $('#adventure_caption').show();
    }

    // Then check on change
    $('textarea#edit-field-adventure-caption-und-0-value').change(function(){
      var adventure_caption = $(this).val();

      if (adventure_caption == '') {
        $('#adventure_caption').hide();
      } else { 
        $('#adventure_caption').show(); $('#adventure_content').show();
      }

      $('#adventure_caption').html(adventure_caption);
    });

    // CHECK LINK TITLE
    // First check on page load
    $('#adventure_link_title').html(adventure_link_title);

    if (adventure_link_title == '') {
        $('#adventure_link_title').hide();
      } else { 
        $('#adventure_link_title').show(); $('#adventure_content').show();
    }
    // Then check on change
    $('input#edit-field-adventure-url-und-0-title').change(function(){
      var adventure_link_title = $(this).val();

      if (adventure_link_title == '') {
        $('#adventure_link_title').hide();
      } else { 
        $('#adventure_link_title').show(); $('#adventure_content').show(); 
      }

      $('#adventure_link_title').html(adventure_link_title);
    });

    // CHECK POSITION
    // First check on page load
    var adventure_position = $('select#edit-field-adventure-position-und').val();

    $('#adventure_position').attr('class', 'bean-adventure_position-wrapper ' + adventure_position);

    // Then check on change
    $('select#edit-field-adventure-position-und').change(function(){
        var adventure_position = $(this).val();
        $('#adventure_position').attr('class', 'bean-adventure_position-wrapper ' + adventure_position);
    });

  });

})(jQuery);
