let Notes = (function(){

  let selectors = {
    container: '#notes',
    item: 'notes__item',
    button: 'notes__item-delete',
    noteColors: 'notes__item-color',
    dataId: 1
  }

  return {

    init: function(){
      $(window).on('addNote', function(e, data){
        $(selectors.container).append(`
          <div class="${selectors.item} ${data.color}" data-id="${data.itemId}", data-color="${data.color}">
            ${data.text}
            <button class="${selectors.button}">
              <span></span>
              <span></span>
            </button>
            <div class="${selectors.noteColors}" data-id="${data.itemId}"></div>
          </div>
        `);
      })
    }

  }

}());
//<div class= "${selectors.noteColors}" data-id="${selectors.dataId++}"></div>
