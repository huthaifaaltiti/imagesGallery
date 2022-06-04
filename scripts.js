const galleryBtns = document.querySelectorAll(".btn");
const gallerySections = document.querySelectorAll(".gallery-sector");

for (let i = 0; i < galleryBtns.length; i++) {
  galleryBtns[i].addEventListener("click", function () {
    for (let j = 0; j < galleryBtns.length; j++) {
      galleryBtns[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < gallerySections.length; k++) {
      gallerySections[k].classList.add("hide");
      // gallerySections[k].classList.remove("active");

      if (
        gallerySections[k].getAttribute("data-item") == dataFilter ||
        dataFilter === "all"
      ) {
        gallerySections[k].classList.remove("hide");
        // gallerySections[k].classList.add("active");
      }
    }
  });
}
