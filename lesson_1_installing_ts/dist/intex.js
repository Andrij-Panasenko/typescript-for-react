import { concatenation } from './concatenations';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello newby!');
    });
}
//# sourceMappingURL=intex.js.map