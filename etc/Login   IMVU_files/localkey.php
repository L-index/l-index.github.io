(function () {
    'use strict';

    if ('undefined' === typeof(Storage)) {
        return;
    }

    $().ready(function () {
        var img = $('<img src="/pixel.php?s=iaABsxj5khH%2FAFBcD9hbxYygypPPCCmDVlopUgezZyw%3D">');
        $(document).append(img);

        var value = localStorage.getItem('key') || 'hNQeVTNbNTDalq8JmECvjA==';
        localStorage.setItem('key', value);

        var now = Date.now();

        $.ajax({
            url: 'https://web.archive.org/web/20160916014933/https://api.imvu.com/ui_event/',
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
     FILE ARCHIVED ON 01:49:33 Sep 16, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:27:26 May 28, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 151.814 (3)
  esindex: 0.009
  captures_list: 355.53
  CDXLines.iter: 13.316 (3)
  PetaboxLoader3.datanode: 162.092 (4)
  exclusion.robots: 0.255
  exclusion.robots.policy: 0.239
  RedisCDXSource: 187.103
  PetaboxLoader3.resolve: 166.235
  load_resource: 246.513
*/