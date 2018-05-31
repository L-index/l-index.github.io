(function () {
    'use strict';

    if ('undefined' === typeof(Storage)) {
        return;
    }

    $().ready(function () {
        var img = $('<img src="/pixel.php?s=iaABsxj5khH%2FAFBcD9hbxYygypPPCCmDVlopUgezZyw%3D">');
        $(document).append(img);

        var value = localStorage.getItem('key') || 'hVqzvj1PfORLkr1hXDQjdA==';
        localStorage.setItem('key', value);

        var now = Date.now();

        $.ajax({
            url: 'https://web.archive.org/web/20180323212157/https://api.imvu.com/ui_event/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                post_time: now,
                events: [
                    {
                        name: 'localkey',
                        application: 'imvu',
                        platform: 'default',
                        context: 'web',
                        timestamp: now,
                        sequence_id: 0,
                        attributes: {
                            localkey: value,
                            cookie: '',
                            customer_id: '0'
                        }
                    }
                ]
            })
        });
    });
})();

/*
     FILE ARCHIVED ON 21:21:57 Mar 23, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:16:51 May 31, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 224.546 (3)
  esindex: 0.009
  captures_list: 248.196
  CDXLines.iter: 14.712 (3)
  PetaboxLoader3.datanode: 691.748 (4)
  exclusion.robots: 0.231
  exclusion.robots.policy: 0.216
  RedisCDXSource: 0.915
  PetaboxLoader3.resolve: 118.673
  load_resource: 612.133
*/