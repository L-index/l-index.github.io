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
     FILE ARCHIVED ON 22:53:56 Mar 22, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:16:53 May 31, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 251.334 (3)
  esindex: 0.009
  captures_list: 278.572
  CDXLines.iter: 15.715 (3)
  PetaboxLoader3.datanode: 344.333 (5)
  exclusion.robots: 0.211
  exclusion.robots.policy: 0.198
  RedisCDXSource: 2.239
  PetaboxLoader3.resolve: 118.404
  load_resource: 270.91
*/