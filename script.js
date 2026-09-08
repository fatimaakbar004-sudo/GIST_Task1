const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const isActive = navLinks.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", isActive);
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const firstName = name.split(" ")[0] || "there";
  contactForm.innerHTML = `
        <div class="form-success">
          <div class="mark"><i class="fa-solid fa-check"></i></div>
          <h4>Thanks, ${firstName} — message sent.</h4>
          <p>We'll get back to you within one business day at the email you provided.</p>
        </div>
      `;
});
