let App = (function(){

  return {

    init: function(){
      AddNote.init();
      Notes.init();
      Colors.init();
      DeleteNote.init();
      NoteColor.init();
    }

  }

}());
App.init();
