function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("opacity-0")) {
      menu.classList.remove("opacity-0", "top-[-400px]");
      menu.classList.add("opacity-100", "top-[100%]");
    } else {
      menu.classList.remove("opacity-100", "top-[100%]");
      menu.classList.add("opacity-0", "top-[-400px]");
    }
}