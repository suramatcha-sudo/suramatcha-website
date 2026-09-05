
// ===== CONFIGURE YOUR BUSINESS HOURS HERE =====
const OPENING_HOUR = 8;   // 8:00 AM IST
const CLOSING_HOUR = 21;  // 9:00 PM IST

function getISTHour() {
  // Always calculate Indian Standard Time (UTC+5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  return ist.getHours();
}

function updateOrderSection() {
  const orderSection = document.getElementById('order-section');
  const currentHour = getISTHour();
  const isOpen = currentHour >= OPENING_HOUR && currentHour < CLOSING_HOUR;

  if (isOpen) {
    orderSection.innerHTML = `
      <h2>🍵 Place Your Order</h2>
      <p>We're open! Orders accepted between 8:00 AM – 9:00 PM IST</p>
      <a href="https://wa.me/918464919998?text=Hi!%20I'd%20like%20to%20order%20from%20SuraMatcha.in"
         class="order-btn" target="_blank">
        Order via WhatsApp
      </a>
    `;
  } else {
    orderSection.innerHTML = `
      <h2>🌙 Ordering is Currently Closed</h2>
      <p class="closed-message">We accept orders between <strong>8:00 AM – 9:00 PM IST</strong></p>
      <p class="closed-message">Please come back during business hours!</p>
    `;
  }
}

// Run on page load
updateOrderSection();

// Refresh every minute to catch the changeover
setInterval(updateOrderSection, 60000);

