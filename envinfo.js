function getEnvironmentInfo() {
  const info = {
    ウィンドウサイズ: `${window.innerWidth} x ${window.innerHeight}`,
    時間: new Date().toLocaleString()
  };

  let output = "";
  for (const [key, value] of Object.entries(info)) {
    output += `${key}: ${value}\n`;
  }

  document.getElementById("envInfo").textContent = output;
}

window.addEventListener("load", () => {
  getEnvironmentInfo();

  const button = document.getElementById("clickButton");
  button.addEventListener("click", () => {
    document.getElementById("message").textContent = "ボタンがクリックされました";
  });
});
