(function(factory){
  if (typeof define === 'function' && define.amd){
    define(['jquery'], factory);
  }else{
    factory(jQuery);
  }
}(function($){
    
    $.fn.floatyClickyThing = function(options){
        var $el = $(this);
        var $fct = $('<div class="floatyclickything"/>');

        $fct.on('click', function(){
            console.log('clicked');
        });

        $fct.appendTo($el);
        return $fct;
    };

}));
