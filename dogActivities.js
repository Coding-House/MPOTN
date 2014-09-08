/**
 * Created by DavidTrinh on 9/7/14.
 */
$(function () {

    var active = true;

    $('#accordion').on('show.bs.collapse', function () {
        if (active) $('#accordion .in').collapse('hide');
    });

});