/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

var trackLine       = $('#track-line');
var achievementForm = $('#achievement-form');
var poorForm        = $('#poor-form');

var forms = {
    'achievement': achievementForm,
    'poor': poorForm,
};

trackLine.on('change', function (evt) {
    hideAllTrackLineForm();

    var form = forms[evt.target.value];

    if (form) {
        form.removeClass('d-none');
    }
});

function hideAllTrackLineForm() {
    achievementForm.addClass('d-none');
    poorForm.addClass('d-none');
}