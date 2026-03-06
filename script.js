// ======== جلب العناصر ========
const ratingButtons = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit-btn");
const thankYouCard = document.querySelector(".thank-you-card");
const ratingCard = document.querySelector(".rating-card");
const selectedRatingEl = document.getElementById("selected-rating");

let selectedRating = null;

// ======== اختيار رقم التقييم ========
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedRating = button.getAttribute("data-value");
  });
});

// ======== الضغط على Submit ========
submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    ratingCard.classList.add("hidden");
    selectedRatingEl.textContent = selectedRating;
    thankYouCard.classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting!");
  }
});
