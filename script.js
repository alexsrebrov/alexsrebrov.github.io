const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

document.querySelectorAll(".experience-duration").forEach((element) => {
  const start = new Date(`${element.dataset.start}T00:00:00`);
  const end = element.dataset.end
    ? new Date(`${element.dataset.end}T00:00:00`)
    : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();

  if (end.getDate() < start.getDate()) months--;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const duration = [];

  if (years) duration.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (remainingMonths) {
    duration.push(
      `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`,
    );
  }

  element.textContent = duration.join(" ") || "Less than a month";
});
