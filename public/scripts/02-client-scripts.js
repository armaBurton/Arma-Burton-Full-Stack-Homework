export const callApi = async (link) => {
  const res = await fetch(`http://localhost:5000/${link}`, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  document.getElementById("output").textContent = JSON.stringify(data.message);
};

document.querySelectorAll(".node-routing-nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    const route = el.getAttribute("data-route");
    callApi(route);
  });
});
