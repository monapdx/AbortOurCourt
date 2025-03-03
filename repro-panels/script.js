//Code to create the close buttons

function addCloseButtons() {
    const elements = document.querySelectorAll('.dashboard > div');

    elements.forEach(element => {
        const button = document.createElement('button');
        button.innerHTML = '×';
        button.title = 'Close';

        button.style.cursor = 'pointer';
        button.style.marginRight = '5px';

        button.onclick = function() {
            element.remove();
        };

        element.insertBefore(button, element.firstChild);
    });
}

addCloseButtons();

	$('#promo').wScratchPad({
    // eraser size
    size        : 40,    
    // image underneath that's being revealed
    bg          : "plan-c-pills.png",
    // image above that is being scratched off
    fg: 'red.gif',
    // The cursor (coin) image
    cursor    : 'url("coin1.png") 5 5, default',
      // give real-time updates
    realtime    : true
 });