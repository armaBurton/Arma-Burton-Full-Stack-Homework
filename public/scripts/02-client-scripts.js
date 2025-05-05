export const callApi = async (link) => {
  try {
    const res = await fetch(`http://localhost:5000/${link}`, {
      method: "GET",
      credentials: "include",
    });

    const text = await res.text();

    const data = JSON.parse(text);
    console.log(data);

    document.getElementById("node-output").textContent = data.message;
  } catch (error) {
    console.error("Error fetching data: ", error);
    document.getElementById("node-output").textContent = error;
  }
};

document.querySelectorAll(".node-routing-nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    const route = el.getAttribute("data-route");
    callApi(route);
  });
});
