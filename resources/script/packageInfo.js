// Clicking on radio button reveals 
// more information on packages.

$("input[name='MMERGE5']").click(function () {

    //Package 1
    $('#p1info').css('display', ($(this).val() === 'Package 1') ? 'block':'none');

    //Package 2
    $('#p2info').css('display', ($(this).val() === 'Package 2') ? 'block':'none');

    //Package 3
    $('#p3info').css('display', ($(this).val() === 'Package 3') ? 'block':'none');
});