//recipes.html//
function debounce(func, delay) {
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(function () {
            func.apply(null, args);
        }, delay);
    };
}
