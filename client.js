(function() {
  fetch(document.currentScript.getAttribute("data-api"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page: window.location.pathname,
      referrer: document.referrer || "Direct",
      device: width > 1440 ? "Desktop" : width > 992 ? "Laptop" : width > 576 ? "Tablet" : "Mobile",
    }),
  });
})();
