// script.js
const lines = [
  "root@kali:~# ls",
  "About.html  Studies.html  Courses.html  Projects.html  Contact.html  Portfolio.pdf",
  "root@kali:~# echo \"Diego Marcos — Cybersecurity enthusiast\"",
  "Diego Marcos — Cybersecurity enthusiast 🪄",
  "root@kali:~# cat Portfolio.pdf",
  "📄 Abriendo Portfolio.pdf… listo.",
  "root@kali:~#",
  "# Pulsa cualquier tecla o toca la pantalla para continuar ⚡"
];

const out     = document.getElementById("terminal-output");
const overlay = document.getElementById("terminal-overlay");
let ln = 0, ch = 0;

function newLine() {
  const div    = document.createElement("div");
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  div.appendChild(cursor);
  out.appendChild(div);
}

function typeChar() {
  if (ln >= lines.length) {
    // espera cualquier tecla o touch
    document.addEventListener("keydown", finish, { once: true });
    document.addEventListener("touchstart", finish, { once: true });
    return;
  }
  if (!out.children[ln]) newLine();

  const lineEl = out.children[ln];
  const text   = lines[ln];
  if (ch < text.length) {
    const cursor = lineEl.querySelector(".cursor");
    lineEl.insertBefore(document.createTextNode(text[ch]), cursor);
    ch++;
    setTimeout(typeChar, 30 + Math.random()*20);
  } else {
    ch = 0; ln++;
    setTimeout(typeChar, 200);
  }
}

function finish() {
  overlay.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "index1.html";
  }, 600);
}

window.addEventListener("load", () => setTimeout(typeChar, 500));