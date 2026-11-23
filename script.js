// ========================================
// 1. PROJECT DATA
// ========================================

const projects = [

  {
    title: "Custom Steel Gate",
    category: "Gates",
    image: "assets/projects/gate.jpeg",

    description: "Custom metal gate project.",

    overview: "Custom steel gate work designed around practical access, security and appearance. Each project can be tailored to the client's property and requirements.",

    work: [
      "Custom gate fabrication",
      "Steel cutting and preparation",
      "Welding and assembly",
      "Finishing and installation"
    ]
  },

  {
    title: "Steel Fabrication",
    category: "Fabrication",
    image: "assets/projects/Fabrication.png",


    description: "Steel fabrication and metalwork.",

    overview: "Steel fabrication involves preparing and assembling metal components for different residential and commercial applications.",

    work: [
      "Steel component preparation",
      "Metal cutting and shaping",
      "Welding and assembly",
      "Quality finishing"
    ]
  },

  {
    title: "Steel Structure",
    category: "Structures",
    image: "assets/projects/structure.jpeg",

    description: "Steel structure project.",

    overview: "Structural steelwork provides practical framework solutions for different construction requirements.",

    work: [
      "Steel framework preparation",
      "Structural component fabrication",
      "Metal assembly",
      "Structural finishing"
    ]
  },

  {
    title: "Metal Repair Work",
    category: "Repairs",
    image: "assets/projects/fabrication2.png",

    description: "Metal repair and reinforcement work.",

    overview: "Repair work focuses on restoring the functionality and strength of existing metal components through suitable welding and reinforcement methods.",

    work: [
      "Inspection of damaged metalwork",
      "Metal preparation",
      "Welding and reinforcement",
      "Repair finishing"
    ]
  }

];


// ========================================
// 2. PROJECT ELEMENTS
// ========================================

const projectGrid = document.getElementById("projectGrid");

const filters = document.getElementById("filters");

const projectModal = document.getElementById("projectModal");

const closeProjectModalButton =
  document.getElementById("closeProjectModal");

const projectModalImage =
  document.getElementById("projectModalImage");

const projectModalTitle =
  document.getElementById("projectModalTitle");

const projectModalCategory =
  document.getElementById("projectModalCategory");

const projectModalDescription =
  document.getElementById("projectModalDescription");

const projectModalOverview =
  document.getElementById("projectModalOverview");

const projectModalWork =
  document.getElementById("projectModalWork");


// ========================================
// 3. DISPLAY PROJECTS
// ========================================

function showProjects(category = "all") {

  if (!projectGrid) return;

  projectGrid.innerHTML = "";

  const filteredProjects = category.toLowerCase() === "all"
    ? projects
    : projects.filter(project =>
      project.category.toLowerCase() === category.toLowerCase()
    );


  filteredProjects.forEach((project, index) => {

    const card = document.createElement("article");

    card.className = "project-card";

    card.innerHTML = `

            <button class="project-image-button" type="button">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >

                <span class="project-image-overlay"></span>

                <span class="project-view-label">
                    EXPLORE PROJECT ↗
                </span>

            </button>


            <div class="project-info">

                <span class="project-category">
                    ${project.category}
                </span>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <button class="project-read-more" type="button">
                    VIEW PROJECT DETAILS <span>↗</span>
                </button>

            </div>

        `;


    const image = card.querySelector("img");

    image.addEventListener("error", function () {

      this.alt = "Project photograph unavailable";

    });


    const openButton = card.querySelector(
      ".project-image-button"
    );

    const detailsButton = card.querySelector(
      ".project-read-more"
    );


    openButton.addEventListener("click", function () {

      openProjectModal(project);

    });


    detailsButton.addEventListener("click", function () {

      openProjectModal(project);

    });


    projectGrid.appendChild(card);

  });

}


// ========================================
// 4. OPEN PROJECT POPUP
// ========================================

function openProjectModal(project) {

  if (!projectModal) return;

  projectModalImage.src = project.image;

  projectModalImage.alt = project.title;

  projectModalTitle.textContent = project.title;

  projectModalCategory.textContent = project.category;

  projectModalDescription.textContent = project.description;

  projectModalOverview.textContent = project.overview;


  projectModalWork.innerHTML = "";


  project.work.forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    projectModalWork.appendChild(li);

  });


  projectModal.classList.add("active");

  projectModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


// ========================================
// 5. CLOSE PROJECT POPUP
// ========================================

function closeProjectModal() {

  if (!projectModal) return;

  projectModal.classList.remove("active");

  projectModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


if (closeProjectModalButton) {

  closeProjectModalButton.addEventListener(
    "click",
    closeProjectModal
  );

}


if (projectModal) {

  projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

      closeProjectModal();

    }

  });

}


// ========================================
// 6. PROJECT FILTERS
// ========================================

if (filters) {

  filters.addEventListener("click", function (event) {

    const button = event.target.closest("[data-filter]");

    if (!button) return;

    const category = button.dataset.filter;

    filters.querySelectorAll("[data-filter]").forEach(item => {

      item.classList.remove("active");

      item.setAttribute("aria-pressed", "false");

    });


    button.classList.add("active");

    button.setAttribute("aria-pressed", "true");

    showProjects(category);

  });

}


// ========================================
// 7. KEYBOARD CONTROLS
// ========================================

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    closeProjectModal();

  }

});


// ========================================
// 8. LOAD PROJECTS
// ========================================

showProjects();


// ========================================
// 5. KEYBOARD CONTROLS
// ========================================

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    closeLightbox();

  }

});


// ========================================
// 6. AUTOMATIC FOOTER YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


// ========================================
// 7. LOAD PROJECTS
// ========================================

showProjects();


// ========================================
// 5. MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu after clicking a navigation link

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ========================================
// 6. SERVICE POPUP ELEMENTS
// ========================================

const serviceButtons = document.querySelectorAll(".service-toggle");

const serviceModal = document.getElementById("serviceModal");
const closeServiceModal = document.getElementById("closeServiceModal");

const modalServiceTitle = document.getElementById("modalServiceTitle");
const modalServiceGallery = document.getElementById("modalServiceGallery");
const modalServiceInformation = document.getElementById("modalServiceInformation");


// ========================================
// 7. OPEN SERVICE POPUP
// ========================================

function openServiceModal(button) {
  if (
    !serviceModal ||
    !modalServiceTitle ||
    !modalServiceGallery ||
    !modalServiceInformation
  ) {
    return;
  }

  const selectedCard = button.closest(".service-card");

  if (!selectedCard) return;

  const serviceTitle = selectedCard.querySelector(".service-title");
  const serviceImage = selectedCard.querySelector(".service-image");
  const serviceDetails = selectedCard.querySelector(".service-details");

  if (!serviceTitle || !serviceImage || !serviceDetails) return;

  // Set popup title

  modalServiceTitle.textContent = serviceTitle.textContent.trim();

  // Clear previous gallery images

  modalServiceGallery.innerHTML = "";

  // Add the main service image

  const mainImage = document.createElement("img");

  mainImage.src = serviceImage.src;
  mainImage.alt = serviceImage.alt;
  mainImage.loading = "lazy";

  modalServiceGallery.appendChild(mainImage);

  // Add extra gallery images

  const extraImages = serviceDetails.querySelectorAll(
    ".service-gallery img"
  );

  extraImages.forEach(image => {
    const galleryImage = document.createElement("img");

    galleryImage.src = image.src;
    galleryImage.alt = image.alt;
    galleryImage.loading = "lazy";

    modalServiceGallery.appendChild(galleryImage);
  });

  // Copy service description and features

  modalServiceInformation.innerHTML = serviceDetails.innerHTML;

  // Remove the extra image gallery from the information section

  const copiedGallery = modalServiceInformation.querySelector(
    ".service-gallery"
  );

  if (copiedGallery) {
    copiedGallery.remove();
  }

  // Show popup

  serviceModal.classList.add("active");
  serviceModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


// ========================================
// 8. CLOSE SERVICE POPUP
// ========================================

function closeServicePopup() {
  if (!serviceModal) return;

  serviceModal.classList.remove("active");
  serviceModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


// ========================================
// 9. SERVICE BUTTON CLICK EVENTS
// ========================================

serviceButtons.forEach(button => {
  button.addEventListener("click", () => {
    openServiceModal(button);
  });
});


// Close using X button

if (closeServiceModal) {
  closeServiceModal.addEventListener("click", closeServicePopup);
}


// Close when clicking outside the popup content

if (serviceModal) {
  serviceModal.addEventListener("click", event => {
    if (event.target === serviceModal) {
      closeServicePopup();
    }
  });
}


// ========================================
// 10. KEYBOARD ESCAPE SUPPORT
// ========================================

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
    closeServicePopup();
  }
});


// ========================================
// 11. IMAGE ERROR FALLBACK
// ========================================

document.addEventListener(
  "error",
  event => {
    if (event.target.tagName === "IMG") {
      event.target.style.opacity = "0.4";
      event.target.alt = "Image unavailable";
    }
  },
  true
);



// ========================================
// 13. LOAD PROJECTS
// ========================================

showProjects();
