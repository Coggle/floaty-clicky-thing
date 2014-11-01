(function(factory){
  if (typeof define === 'function' && define.amd){
    define(['jquery'], factory);
  }else{
    factory(jQuery);
  }
}(function($){
    
    $.fn.floatyClickyThing = function(options){
        // if we are called on multiple elements, deal with each separately:
        var $all = $();
        $(this).each(function(idx){
            var $el = $(this);
            var $fct = $('<div class=floatyclickycontainer><div class="floatyclickything"><div/><div/>');

            $fct.appendTo($el);
            
            // jQuery UI position:
            $fct.position({
                my: options.my || "center",
                at: options.at || "left top",
                of: options.of || $el,
                collision: options.collision || "fit"
            });

            $.merge($all, $fct);
        });
        return $all;
    };

}));
