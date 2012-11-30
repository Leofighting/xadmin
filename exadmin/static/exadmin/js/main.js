;(function($){
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

  $.fn.exform = function(){
    this.each(function () {
      for (var i = $.fn.exform.renders.length - 1; i >= 0; i--) {
        $.fn.exform.renders[i]($(this))
      };
    })
  }
  $.fn.exform.renders = [];
  
})(jQuery)