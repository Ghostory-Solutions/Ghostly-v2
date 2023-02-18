(function () {
    const w = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth, window.innerWidth);
    fetch(document.currentScript.getAttribute("data-api"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer || "Direct",
            device: w > 1440 ? "Desktop" : w > 992 ? "Laptop" : w > 576 ? "Tablet" : "Mobile",
        }),
    });
})();
