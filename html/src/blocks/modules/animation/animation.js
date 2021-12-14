import $ from 'jquery';

$('.mobile-arrows__item--up').on('click', function() {
    fullpage_api.moveSectionUp();
});
$('.mobile-arrows__item--down').on('click', function() {
    fullpage_api.moveSectionDown();
});