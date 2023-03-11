var btnOpen = $('.open-modal-btn');
var modal = $('.modal');
var iconClose = $('.modal__header i');
var btnClose = $('.modal__footer button');

btnOpen.click(function() {
    modal.toggle('.hide');
});

iconClose.click(function() {
    modal.toggle('.hide');
});

btnClose.click(function() {
    modal.toggle('.hide');
});

modal.click(function(e) {
    if (e.target == e.currentTarget) {
        modal.toggle('.hide');
    }
});


