export const callApi = async (link) => {
  const res = await fetch(`http://localhost:5000/${link}`);
  const data = await res.text();
  document.getElementById("output").innerHTML = data;
};

document.querySelectorAll(".node-routing-nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    const route = el.getAttribute("data-route");
    callApi(route);
  });
});
