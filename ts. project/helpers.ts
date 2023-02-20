//recipes.html//
function debounce(func: Function, delay: number): Function {
    let timeoutId: number;
    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}
