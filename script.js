// function switchTab(tabId) {
//   const tabs = document.querySelectorAll(".tab");
//   const contents = document.querySelectorAll(".tab-content");

//   tabs.forEach((tab) => tab.classList.remove("active"));
//   contents.forEach((content) => content.classList.remove("active"));

//   document.querySelector(`.tab[onclick*="${tabId}"]`).classList.add("active");
//   document.getElementById(tabId).classList.add("active");
// }

function calculateForward() {
  const dpPrice = parseFloat(document.getElementById("dpPrice").value);
  if (isNaN(dpPrice)) {
    document.getElementById("offlinePrice").textContent = "-";
    document.getElementById("onlinePrice").textContent = "-";
    document.getElementById("retailPrice").textContent = "-";
    return;
  }

  const base = dpPrice * 0.75;
  const offlinePrice = Math.round(base + base * 0.1);
  const onlinePrice = Math.round(dpPrice * 0.9);
  const retailPrice = offlinePrice + 100;

  document.getElementById("offlinePrice").textContent = offlinePrice;
  document.getElementById("onlinePrice").textContent = onlinePrice;
  document.getElementById("retailPrice").textContent = retailPrice;
}
