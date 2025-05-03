const display = document.getElementById('display');
const btns = document.querySelectorAll('.btn');
const funcBtns = document.querySelectorAll('.func');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.dataset.val;
    });
});

clear.addEventListener('click', () => {
    display.value = '';
});

equals.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
});

funcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const func = btn.dataset.func;
        let val = parseFloat(display.value);
        if (isNaN(val)) {
            display.value = 'Error';
            return;
        }

        const rad = val * Math.PI / 180;
        let result;

        switch (func) {
            case 'sin': result = Math.sin(rad); break;
            case 'cos': result = Math.cos(rad); break;
            case 'tan': result = Math.tan(rad); break;
            case 'cot': result = 1 / Math.tan(rad); break;
            case 'sec': result = 1 / Math.cos(rad); break;
            case 'cosec': result = 1 / Math.sin(rad); break;
            default: result = 'Error';
        }

        display.value = Number.isFinite(result) ? result.toFixed(6) : 'Error';
    });
});
