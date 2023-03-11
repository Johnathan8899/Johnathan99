const $1 = document.querySelector.bind(document);
const $2 = document.querySelectorAll.bind(document);


const tabs = $2('.tab-item');
const panes = $2('.tab-pane');
const tabActive = $1('.tab-item.active');
const line = $1('.tabs .line');


tabs.forEach(function (tab, index) {
    const pane = panes[index];
    tab.onclick = function () {
        $1('.tab-pane.active').classList.remove('active');
        $1('.tab-item.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    };
})

// line.style.width = tabActive.offsetWidth + 'px';
// line.style.left = tabActive.offsetLeft + 'px';


 
