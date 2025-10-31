// year footer
document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu แบบง่ายๆ (ถ้าจะทำจริงค่อยเพิ่ม)
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("header nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const show = nav.style.display === "flex";
    nav.style.display = show ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "rgba(2,6,23,0.95)";
    nav.style.position = "absolute";
    nav.style.top = "56px";
    nav.style.right = "16px";
    nav.style.padding = "12px";
    nav.style.borderRadius = "14px";
  });
}
