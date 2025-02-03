const messages = [
  "恭喜你！发现了宇宙的小秘密！",
  "每次点击都是一次新冒险！",
  "你就是最闪亮的星，继续闪耀！",
  "哇哦，这可能是今天听到的最搞笑的一句话！",
  "生活就像这按钮，每按一次都有惊喜！"
];

function showRandomMessage() {
  const msgDiv = document.getElementById('message');
  const randomIndex = Math.floor(Math.random() * messages.length);
  msgDiv.textContent = messages[randomIndex];
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 6; i > 0; i--) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
