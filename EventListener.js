'use strict';

// Method 1 : Static

const reviewText = document.getElementById("review-text");
const toggleBtn = document.getElementById("toggle-review");

const shortText = `"This company exceeded my expectations in every way..."`;
const fullText = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;

toggleBtn.addEventListener('click', () => {
  if (toggleBtn.classList.contains('off')) {
    reviewText.textContent = fullText;
    toggleBtn.textContent = 'Read Less';
    toggleBtn.classList.replace('off', 'on');
  }
  else {
    reviewText.textContent = shortText;
    toggleBtn.textContent = 'Read full review';
    toggleBtn.classList.replace('on', 'off');
  }
})

// Method 2 : Dynamic

let reviewTextContent = reviewText.textContent;

toggleBtn.addEventListener('click', () => {
  if (toggleBtn.classList.contains('off')) {
    reviewText.textContent = reviewTextContent.substring(0);
    toggleBtn.textContent = 'Read Less';
    toggleBtn.classList.replace('off', 'on');
  }
  else {
    reviewText.textContent = `${reviewTextContent.substring(0, 60)}..."`;
    toggleBtn.textContent = 'Read full review';
    toggleBtn.classList.replace('on', 'off');
  }
})


// HTML:
/*
<section class="reviews">
  <h2>What Our Clients Say</h2>
  <div class="review">
    <p id="review-text">
      "This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"
    </p>
    <button id="toggle-review" class="btn-link on">Read less</button>
  </div>
</section> 
*/

