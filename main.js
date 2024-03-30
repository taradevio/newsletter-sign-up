document.addEventListener("DOMContentLoaded", () => {
    function popup() {
        const container = document.getElementById("container");
        // const email = document.getElementById("email");
        const button = document.getElementById("subscribe");
        const popupContainer = document.getElementById("success-container");
    
        button.addEventListener("click", function(event) {
            event.preventDefault();
            container.style.display = "none";
            popupContainer.style.display = "block";
        })
    }
    popup();
  });




