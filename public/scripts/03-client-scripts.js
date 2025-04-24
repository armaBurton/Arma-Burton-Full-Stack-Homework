export const callApi = async (link) => {
  try {
    const res = await fetch(`http://localhost:5000/${link}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.text())
      .then((data) => (document.getElementById("output").innerHTML = data))
      .catch((error) => console.error("Error fetching data: ", error));

    // if (!res.ok) {
    //   throw new Error(`HTTP error! status: ${res.status}`);
    // }

    // const data = await res.text();
    // document.getElementById("output").innerHTML = data;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("output").innerHTML = `Error: ${error.message}`;
  }
};

document.querySelectorAll(".node-routing-nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    const route = el.getAttribute("data-route");
    callApi(route);
  });
});
