let DeleteNote = (function(){
    
      let selectors = {
        button: '.notes__item-delete',
        notes: '#notes'
      }
    
      return {
    
        init: function(){
          this.event();
        },
    
        event: function(){
          $(selectors.notes).on('click', selectors.button, function(e){
            e.target.closest('.notes__item').remove();   
          })
        }
    
      }
    
    }());