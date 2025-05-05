export const callApi = async (link) => {
  try {
    const res = await fetch(`http://localhost:5001/${link}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.text();
    console.log(data);
    document.getElementById("express-output").innerHTML = data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    document.getElementById(
      "express-output"
    ).innerHTML = `Error: ${error.message}`;
  }
};

document.querySelectorAll(".express-routing-nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    console.log("clicked");
    const route = el.getAttribute("data-route");
    callApi(route);
  });
});
