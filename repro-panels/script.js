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