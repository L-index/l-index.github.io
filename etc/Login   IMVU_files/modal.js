(function () {
    "use strict";

    function bootstrap(imports) {

        var open_dialog = [];

        $.ajaxSetup({timeout: 30000});

        $.extend(jQuery.Event.prototype, {
            stop: function() {
                this.stopPropagation();
                this.preventDefault();
            }
        });

        window.deprecated_nextModal = function (oldSelector, newSelector) {
            deprecated_hideModal(oldSelector, true);
            deprecated_showModal(newSelector, 0, true);
        };

        window.deprecated_dialogExists = function($modal) {
            for(var i=0, len=open_dialog.length; i<len; i++) {
                if (open_dialog[i] == $modal.get(0)) {
                    return true;
                }
            }
            return false;
        };

        window.deprecated_showModal = function (selector, kwargs) {
            var default_opts = {
                    parent : $('body'),
                    suppressAnimations: 0,
                    suppressEscKey: 0,
                    clickOutsideExits: 0
                },
                options = $.extend(default_opts, kwargs),
                $parent = options.parent,
                $modal = $parent.find(selector),
                $overlay = $parent.find('#modal_overlay');

            $(selector).data('modal_options', options);
            if (!$overlay.length) {
                $overlay = $('<div id="modal_overlay"/>');
                $parent.append($overlay);
            }

            $overlay.unbind('click');
            if (options.clickOutsideExits) {
                $overlay.bind('click', function() {
                    deprecated_hideModal($modal);
                });
            }

            var is_found = deprecated_dialogExists($modal);
            if (!is_found) {
                open_dialog.push($modal.get(0));
            }

            $overlay.fadeIn(options.suppressAnimations ? 0 : 300);
            $('body').css('overflow-x', 'hidden');
            if (!(selector.charAt(0) == '#' || selector.charAt(0) == '.')) {
                // TODO: this requires changes to the way unicorns figures out JSON or not
                $parent.append('<div class="modal_win"></div>').find('.modal_win:last').load(selector + ' body').fadeIn(300);
            } else {
                if (selector === '#avatar-popup' || selector === '#mutual-friends-dialog') {
                    $parent.append($modal);
                }
                $modal.fadeIn(options.suppressAnimations ? 0 : 300);
            }
            $('body').trigger('deprecated_showModal', $modal);
        };

        window.deprecated_hideModal = function (selector, suppressAnimations, callback) {
            var $selector = $(selector),
                $modal = $selector.closest('.modal_win'),
                $modal_overlay = $('#modal_overlay');
            if ($selector.hasClass('no_close')) {
                return;
            }
            $modal.fadeOut(suppressAnimations ? 0 : 500, function(){
                if ($modal.hasClass('show-warning')) {
                    $modal.removeClass('show-warning').find('div.warning').removeClass('show-warning');
                    $modal.find('input, select, div.error').removeClass('error');
                }
            });

            var new_list = [];
            for(var i=0, len=open_dialog.length; i<len; i++) {
                if (open_dialog[i] != $modal.get(0)) {
                    new_list.push(open_dialog[i]);
                }
            }
            open_dialog = new_list;
            if (open_dialog.length <= 0) {
                $modal_overlay.fadeOut(suppressAnimations ? 0 : 500);
                $modal_overlay.unbind('click');
            }
            $('body').css('overflow-x', 'visible');
            $('body').trigger('deprecated_hideModal', $modal);
            if (callback) {
                callback();
            }
        };

        window._testClearModal = function() {
            open_dialog = [];
        };

        $(document).on('click', '.modal', function(event) {
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            var href = $(this).attr('href');
            deprecated_showModal(href);
            return false;
        });

        $('body').on('keyup', '.modal_win', function (event) {
            event.stopPropagation();
            event.preventDefault();
            var options = $('.modal_win:visible').data('modal_options');
            if (event.keyCode === 27 && (options ? (!options.suppressEscKey) : true)) {
                var spinnerVisible = false;
                $('.modal-spinner').each(function() {
                    if ($(this).is(':visible')) {
                        spinnerVisible = true;
                    }
                });
                if (!spinnerVisible) {
                    deprecated_hideModal('.modal_win:visible');
                }
            }
        });

        $(document).on('click', '.modal_win .cancel, .modal_win .okay, .modal_win .close', function(event) {
            if (event) {
                event.stopPropagation();
                event.preventDefault();
            }
            deprecated_hideModal(this);
            return false;
        });

        return window;
    }

    window.imvu_profiling_startTime = new Date().getTime();

    if (typeof jQuery !== 'undefined') {
        bootstrap();
    }

}());

/*
     FILE ARCHIVED ON 17:24:49 Dec 24, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:27:25 May 28, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 185.525 (3)
  esindex: 0.014
  captures_list: 211.887
  CDXLines.iter: 16.149 (3)
  PetaboxLoader3.datanode: 283.023 (5)
  exclusion.robots: 0.38
  exclusion.robots.policy: 0.352
  RedisCDXSource: 2.416
  PetaboxLoader3.resolve: 242.848 (2)
  load_resource: 636.07
*/