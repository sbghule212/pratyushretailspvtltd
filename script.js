function switchTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  document.querySelector(`.tab[onclick*="${tabId}"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

function calculateForward() {
  const dpPrice = parseFloat(document.getElementById("dpPrice").value);
  if (isNaN(dpPrice)) {
    document.getElementById("offlinePrice").textContent = "-";
    document.getElementById("onlinePrice").textContent = "-";
    document.getElementById("retailPrice").textContent = "-";
    document.getElementById("twentypPrice").textContent = "-";
    document.getElementById("twentyPrice").textContent = "-";
    return;
  }

  const base = dpPrice * 0.75;
  const offlinePrice = Math.round(base + base * 0.1);
  const onlinePrice = Math.round(dpPrice * 0.9);
  const retailPrice = offlinePrice + 100;
  const twentypPrice = Math.round(dpPrice * 0.8);
  const twentyPrice = Math.round((dpPrice + 100) * 0.8)

  document.getElementById("offlinePrice").textContent = offlinePrice;
  document.getElementById("onlinePrice").textContent = onlinePrice;
  document.getElementById("retailPrice").textContent = retailPrice;
  document.getElementById("twentypPrice").textContent = twentypPrice;
  document.getElementById("twentyPrice").textContent = twentyPrice;
}

function calculateReverse() {
  const onlinePrice = parseFloat(document.getElementById("onlineInput").value);
  if (isNaN(onlinePrice)) {
    document.getElementById("revRetail").textContent = "-";
    document.getElementById("revDpPrice").textContent = "-";
    return;
  }

  //  const base = approxDpPrice * 0.75;
  const oofflinePrice = onlinePrice - 60;
  const approxRetail = Math.round(oofflinePrice / 0.825);
  const approxDpPrice = Math.round(onlinePrice / 0.9);

  document.getElementById("revRetail").textContent = approxRetail;
  document.getElementById("revDpPrice").textContent = approxDpPrice;
}

function generateMessage() {
  const store =
    document.getElementById("storeInput").value || "Majalgaon Mega Store";
  const product = document.getElementById("productInput").value || "Jewellery";
  const dp = parseFloat(document.getElementById("dpInput").value) || 0;
  const contact = document.getElementById("contactInput").value || "7775034111";

  const base = dp * 0.75;
  const offline = Math.round(base + base * 0.1);
  const online = Math.round(dp * 0.9);
  const retail = offline + 100;

  const distributorMsg = `PRATYUSH RETAILS PVT LTD.\n${store}🏪\n\nName - ${product}\n\nDp Price - ₹${dp}/-\nOffer Price - ₹${online}/-\n\n🔥 FREE SHIPPING🔥\nPremium Quality 100%\n▶ No Cash On Delivery\n▶ No Cancellation Process\n▶ Payment Process \nPhone Pay / Google Pay / Paytm\n▶ When parcel received opening video is Compulsory\n\nBooking Only What's app\n${contact}📲`;

  const customerMsg = `Pratyush Customer Price: ₹${retail}/-`;

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeStr = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get user input values
  const sareeSale =
    parseInt(document.getElementById("sareeSaleInput").value) || 0;
  const otherSale =
    parseInt(document.getElementById("otherSaleInput").value) || 0;
  const expenses =
    parseInt(document.getElementById("expensesInput").value) || 0;

  const totalSale = sareeSale + otherSale;
  const profit = Math.floor(totalSale * 0.1);

  // const store = document.getElementById("storeInput").value || 0;

  const reportMsg = `*${store.toUpperCase()}🏪*\n\n${dateStr} ⏰\n\n1. Saree Sale - ${sareeSale}/-\n2. Jwellery,Purse Sale - ${otherSale}/-\n\nTotal Sale = ${totalSale}/-\n\nToday Expenses = ${expenses}/-\nToday 10% Profit = ${profit}/-`;

  document.getElementById("messageOutput1").value = distributorMsg;
 // document.getElementById("messageOutput2").value = customerMsg;
  document.getElementById("messageOutput3").value = reportMsg;
}

function copyMessage(id) {
  const textarea = document.getElementById(id);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Message copied to clipboard!");
}
