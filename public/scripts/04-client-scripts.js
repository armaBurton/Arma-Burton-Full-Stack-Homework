export const callApi = async (link, method = "GET", payload = null) => {
  try {
    const options = {
      method: method,
      credentials: "include",
    };

    if (method === "POST" && payload) {
      options.headers = {
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(payload);
    }

    const res = await fetch(`http://localhost:5002/${link}`, options);
    const data = await res.text();

    document.getElementById("form").innerHTML = data;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("form").innerHTML = `Error: ${error.message}`;
  }

  // try {
  //   const res = await fetch(`http://localhost:5002/${link}`, {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   const data = await res.text();
  //   console.log(data);
  //   document.getElementById("form").innerHTML = data;
  // } catch (error) {
  //   console.error("Error fetching data: ", error);
  //   document.getElementById("form").innerHTML = `Error: ${error.message}`;
  // }
};

document.addEventListener("DOMContentLoaded", () => {
  callApi("form");
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit clicked");
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  callApi("submit", "POST", formData);
});

// document.querySelectorAll(".express-routing-nav-link").forEach((el) => {
//   el.addEventListener("click", () => {
//     console.log("clicked");
//     const route = el.getAttribute("data-route");
//     callApi(route);
//   });
// });
