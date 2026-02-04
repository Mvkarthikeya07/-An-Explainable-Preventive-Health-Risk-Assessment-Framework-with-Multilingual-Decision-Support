// ===============================
// Voice handling (FIXED using getVoices)
// ===============================

let voices = [];

// Load voices safely (MDN recommended)
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}

// Some browsers load voices asynchronously
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Get correct voice for selected language
function getVoiceForLang(lang) {
    if (!voices.length) {
        voices = window.speechSynthesis.getVoices();
    }

    // Try exact match first (hi-IN, ta-IN, te-IN, ml-IN, en-IN)
    let voice = voices.find(v => v.lang === lang + "-IN");

    // Fallback: language startsWith (hi, ta, te, ml, en)
    if (!voice) {
        voice = voices.find(v => v.lang.startsWith(lang));
    }

    // Final fallback
    return voice || voices[0];
}

// Speak text
function speak(text) {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang + "-IN";
    utterance.voice = getVoiceForLang(lang);
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

// ===============================
// Chat logic (UNCHANGED)
// ===============================

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<div class="user-msg">You: ${message}</div>`;

    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "message=" + encodeURIComponent(message)
    })
    .then(res => res.json())
    .then(data => {
        chatBox.innerHTML += `<div class="bot-msg">Bot: ${data.reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        // 🔊 Speak reply in selected language
        speak(data.reply);
    });

    input.value = "";
}
