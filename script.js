const CELEBRANT = {
  name: "Birthday Sammmyyyy",
  age: "Leveling Up, +1 ka muna sa edad!",
  traits: ["Kind to all, kindest to me", "Inspiring, my inspiration indeed", "Shy yet Brave"]
};

// Warm, heartfelt birthday wishes
const wishes = [
  "🌟 Dawg, I'm wishing you a year filled with endless joy, peace, and beautiful moments.",
  "💖 I'm glad that you've grown to a such young incredible person and thank you for bringing warmth to everyone around you, also to me.",
  "✨ May every line of your life's story be blessed with happiness, success, and good health. That is a reward for being a good person despite the hardships and challenges that you've faced.",
  "☕ May your days be bright, your heart be light, and your dreams come true!"
];

const terminal = document.getElementById('terminal');
const celebrateBtn = document.getElementById('celebrateBtn');

function triggerConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
}

celebrateBtn.addEventListener('click', () => {
  terminal.innerHTML = `<div class="terminal-line">[MESSAGE] Sending warm birthday wishes to ${CELEBRANT.name}...</div>`;

  wishes.forEach((wish, index) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.textContent = `${wish}`;
      terminal.appendChild(line);
      terminal.scrollTop = terminal.scrollHeight;
    }, (index + 1) * 700);
  });

  setTimeout(() => {
    const successLine = document.createElement('div');
    successLine.className = 'terminal-line success';
    successLine.textContent = `💖 HAPPY BIRTHDAY, ${CELEBRANT.name.toUpperCase()}! 🎂`;
    terminal.appendChild(successLine);
    terminal.scrollTop = terminal.scrollHeight;

    triggerConfetti();
  }, (wishes.length + 1) * 700);
});
