(function ($) {

    function AutoExpander(el, settings) {
        this.$el = $(el);

        $.data(el, 'settings', $.extend({'max-height': 180, 'min-height': null, 'shrink-enabled': false}, settings || {}));
        $.data(el, 'is_autoexpand', 1);

        this.$el.bind('keydown', this.resize);
        this.$el.bind('keyup', this.resize);
        this.$el.bind('blur', this.resize);
    }

    AutoExpander.prototype = {
        resize: function () {
            var $el = $(this);

            if ($el[0].scrollHeight > $el[0].offsetHeight) {
                $el.height($el[0].scrollHeight);
                if ($el[0].scrollHeight > $el[0].style.height) {
                    $el.height($el[0].scrollHeight);
                }

                if ($el[0].offsetHeight >= $.data($el[0], 'settings')['max-height']) {
                    $el.addClass('maxed');
                }
            } else {
                if($.data($el[0], 'settings')['shrink-enabled'] && ($el[0].scrollHeight > $.data($el[0], 'settings')['min-height'])) {
                    $el.height($el[0].scrollHeight);
                }
            }

            if ($el.val() === '') {
                $el[0].style.height = null;
                $el.removeClass('maxed');
            }
        }
    };

    $.fn.autoexpand = function (settings) {
        return this.each(function () {
            new AutoExpander(this, settings);
        });
    };

})(jQuery);

/*
     FILE ARCHIVED ON 17:24:45 Dec 24, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:27:28 May 28, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 189.675 (3)
  esindex: 0.007
  captures_list: 217.11
  CDXLines.iter: 12.995 (3)
  PetaboxLoader3.datanode: 1404.17 (5)
  exclusion.robots: 0.187
  exclusion.robots.policy: 0.175
  RedisCDXSource: 7.716
  PetaboxLoader3.resolve: 1192.029 (2)
  load_resource: 2411.943
*/