
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("loginModal");
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.querySelector(".close");

    openModalButton.onclick = function() {
        modal.style.display = "flex";
    };

    closeModalButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});


const registerModal = document.getElementById("registerModal");
const registerButton = document.getElementById("registerButton");
const closeImage = document.getElementById("closeImage");
const closeRegister = document.querySelector(".close-register");


registerButton.onclick = function() {
  registerModal.style.display = "block";
}


closeImage.onclick = function() {
  registerModal.style.display = "none";
}
closeRegister.onclick = function() {
  registerModal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
}

const modals = document.querySelectorAll('.modal');

function closeAllModals() {
    modals.forEach(modal => {
        modal.style.display = "none";
    });
}

document.getElementById("closeImage").onclick = function() {
    closeAllModals();
};

document.querySelector('.close').onclick = function() {
    closeAllModals();
};
