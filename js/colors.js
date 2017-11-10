let Colors = (function(){

  let selectors = {
    container: '#colors',
    item: '.colors__item',
    itemClassName: 'colors__item',
    itemActiveMod: 'colors__item--isActive'
  };

  let colors = ['gold', 'red', 'green'];

  return {

    init: function(){
      this.render(selectors.container);
      this.event();
    },

    getActiveColor: function(){
      return colors[0];
    },

    render: function(container){
      if ($(container).closest('.notes__item'))
      for (let i = 0; i < colors.length; i++) {
        $(container).append(`
          <div data-color="${colors[i]}" class="${selectors.itemClassName} ${colors[i]}">
        `)
      }
    },


    event: function(){
      $(`${selectors.item}[data-color="${colors[0]}"]`).addClass(selectors.itemActiveMod);
      $(selectors.container +' '+ selectors.item).click(function(){
        $(selectors.container +' '+ selectors.item).removeClass(selectors.itemActiveMod);
        $(this).addClass(selectors.itemActiveMod);
        let data = {
          color: $(this).attr('data-color'),
        }
        $(window).trigger('chooseColor', data);
      })
    }

  }

}());
