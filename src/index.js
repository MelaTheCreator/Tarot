const membersButton = document.querySelectorAll(".membersOnly");

membersButton.forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "This feature is available for members only. Please sign up to access it.",
    );
  });
});

document.getElementById("sideButtonRight1").addEventListener("click", () => {
  window.location.href = "./Daily.html";
});

document.getElementById("sideButtonRight2").addEventListener("click", () => {
  window.location.href = "./Blindspot.html";
});

document.getElementById("sideButtonRight3").addEventListener("click", () => {
  window.location.href = "./Decision.html";
});

document.getElementById("impressum").addEventListener("click", () => {
  window.location.href = "./Impressum.html";
});
