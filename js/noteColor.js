let NoteColor = (function(){

    let selectors = {
        itemColor: '.colors__item',
        itemColorClassName: 'colors__item',
        notesItem: '.notes__item',
        notesItemClassName: 'notes__item',
        notesItemColor: '.notes__item-color',
        itemActiveMod: 'colors__item--isActive',
        notesId: '#notes',
    }


    return {
        init: function(){
            this.event();
          },

        event: function() {
          $(window).on('addNoteColor', function(e, data) {
                var notesColors = $(selectors.notesItemColor + '[data-id = "'+ data.itemId +'"]').children();
                $(selectors.notesItem).data('color', data.color);
                for(var i = 0; i < notesColors.length; i++) {
                    if ($(selectors.notesItem).data('color') == $(notesColors[i]).data('color')) {
                        $(notesColors[i]).addClass(selectors.itemActiveMod);
                    }
                } 
          })

            $(selectors.notesId).on('click', selectors.itemColor, function(e) {
                let currentNoteId = $(this).closest(selectors.notesItem).data('id');
                $(selectors.notesItem + '[data-id = "'+ currentNoteId +'"]' +' '+ selectors.itemColor).removeClass(selectors.itemActiveMod);
                $(this).addClass(selectors.itemActiveMod);
                let color = e.target.attributes['data-color'].value;
                $(this).closest(selectors.notesItem).removeClass().addClass(selectors.notesItemClassName +' '+ color);
            })
        }
    }

    }());
