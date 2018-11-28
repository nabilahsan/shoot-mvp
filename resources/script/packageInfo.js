// Clicking on radio button reveals 
// more information on packages.

$("input[name='package']").click(function () {

    //Package 1
    $('#p1info').css('display', ($(this).val() === 'Bronze') ? 'block':'none');

    //Package 2
    $('#p2info').css('display', ($(this).val() === 'Silver') ? 'block':'none');

    //Package 3
    $('#p3info').css('display', ($(this).val() === 'Gold') ? 'block':'none');

    //Package 4
    $('#p4info').css('display', ($(this).val() === 'Gold1') ? 'block':'none');
});