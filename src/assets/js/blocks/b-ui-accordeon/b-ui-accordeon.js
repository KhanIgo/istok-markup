jQuery(function($){
    let $body = $('body');
    let $animation_time = 500;
    
    $('.ui-accordeon-item').eq(1).addClass('ui-accordeon-item--active');
    
    
    let $active_items = $('.ui-accordeon-item--active');
    if($active_items.length){
        $active_items.each(function(){
            show_item( $(this) );
        });
    }
    
    
    $body.on('click', '.ui-accordeon-item__extend', function(e){
        e.preventDefault();
        let $this = $(this);
        let $this_item = $this.closest('.ui-accordeon-item');
        show_item($this_item);
        hide_siblings($this_item);
    });
    
    function show_item($this){
        let $body = $this.find('.ui-accordeon-item__body');
        let $inner = $this.find('.ui-accordeon-item__body-inner');
        let $header = $this.find('.ui-accordeon-item__header');
        let height_value = parseInt($inner.height());
        let pt = parseInt($inner.css('padding-top'));
        let pb = parseInt($inner.css('padding-bottom'));
        height_value = height_value + pt + pb;
        $body.animate({height: height_value+'px'}, $animation_time);
        $this.addClass('ui-accordeon-item--active');
        $header.addClass('ui-accordeon-item__header--active');
        $body.addClass('ui-accordeon-item__body--active');
    }
    function hide_item($this){
        let $body = $this.find('.ui-accordeon-item__body');
        let $inner = $this.find('.ui-accordeon-item__body-inner');
        let $header = $this.find('.ui-accordeon-item__header');
        $body.animate({height: '0px'}, $animation_time);
        $this.removeClass('ui-accordeon-item--active');
        $header.removeClass('ui-accordeon-item__header--active');
        $body.removeClass('ui-accordeon-item__body--active');
    }
    function hide_siblings($this){
        let $siblings = $this.siblings('.ui-accordeon-item');
        if($siblings.length){
            $siblings.each(function(){
                hide_item( $(this) );
            });
        }
    }
});