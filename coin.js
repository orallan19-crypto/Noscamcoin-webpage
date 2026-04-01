// MENU
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

// CONNECT WALLET
async function connectWallet() {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    alert("Connected: " + accounts[0]);
  } else {
    alert("Install MetaMask");
  }
}

// COPY CONTRACT
function copyAddress() {
  const text = document.getElementById("contract").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

// CHART
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Presale", "Liquidity", "Team"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#00c6ff", "#0072ff", "#00ffcc"],
      },
    ],
  },
});
