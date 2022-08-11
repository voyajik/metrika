(function(window){
    const storage = window.top.sessionStorage;
    const sessionId = storage.getItem('UNEXPECTED_TERMINATION');
    const url = window.location.href.split('?')[0];
    const userAgent = window.navigator.userAgent;

    window.sessionId = sessionId;
    window.url = url;
    window.userAgent = userAgent;

    window.addEventListener('load', function () {
        setTimeout(() => {
            const [entry] = window.performance.getEntriesByType("navigation")
            const perfData = entry.toJSON()
            const pageLoadTime = parseInt(perfData.duration) / 1000;
            window.pageLoadTime = pageLoadTime;
        }, 1)
    }, false)
})(window);