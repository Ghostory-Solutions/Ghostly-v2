(function() {
  const endpoint = document.currentScript.getAttribute("data-api");
  const referrer = document.referrer || "Direct";
  const device = width > 1440 ? "Desktop" : width > 992 ? "Laptop" : width > 576 ? "Tablet" : "Mobile";
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page: window.location.pathname,
      referrer,
      device,
    }),
  });
})();
