const API_URL = "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json";
const container = document.getElementById("card-container");

document.getElementById("load-all").addEventListener("click", () => {
  fetchAndDisplayUsers();
});

document.getElementById("load-recent").addEventListener("click", () => {
  fetchAndDisplayUsers(user => user.yearsEmployed < 10);
});

document.getElementById("clear").addEventListener("click", () => {
  container.innerHTML = "";
});

async function fetchAndDisplayUsers(filterFn = null) {
  try {
    const res = await fetch(API_URL);
    const users = await res.json();

    console.log(users);
    container.innerHTML = "";

    const filteredUsers = filterFn ? users.filter(filterFn) : users;

    filteredUsers.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${user.firstName} ${user.lastName}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.companyName}</p>
        <p><strong>Years Employed:</strong> ${user.yearsEmployed}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching user data:", err);
  }
}
