let AddNote = (function(){

  let selectors = {
    form: '#addNote',
    field: '.add-note__ta'
  }

  let itemId = 0;

  return {

    init: function(){
      this.event();
    },

    event: function(){
      let color = Colors.getActiveColor();
      $(window).on('chooseColor', function(e, data){
        color = data.color;
      })
      $(selectors.form).submit(function(e){
        e.preventDefault();
        if($(selectors.field).val() !== ''){
          let data = {
            text: $(selectors.field).val(),
            color: color,
            itemId: ++itemId
          }
          $(window).trigger('addNote', data);
          $(selectors.field).val('');
          Colors.render('.notes__item-color[data-id="'+itemId+'"]');
          $(window).trigger('addNoteColor', data);
        }
      })
    }

  }

}());
