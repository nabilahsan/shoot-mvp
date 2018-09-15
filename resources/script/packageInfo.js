// Clicking on radio button reveals 
// more information on packages.

$("input[name='test']").click(function () {
    $('#show-me').css('display', ($(this).val() === 'a') ? 'block':'none');
});