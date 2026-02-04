function playVoice(btn) {

    // Stop any existing speech
    window.speechSynthesis.cancel();

    const text = btn.getAttribute("data-voice");
    const langKey = btn.getAttribute("data-lang");

    if (!text) {
        alert("Voice text not found");
        return;
    }

    const langMap = {
        en: "en-IN",
        hi: "hi-IN",
        te: "te-IN",
        ta: "ta-IN",
        ml: "ml-IN"
    };

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langMap[langKey] || "en-IN";

    function speak() {
        const voices = speechSynthesis.getVoices();

        // Try exact language match
        const voice = voices.find(v => v.lang === utterance.lang)
                    || voices.find(v => v.lang.startsWith(langKey))
                    || voices[0];

        if (voice) {
            utterance.voice = voice;
        }

        speechSynthesis.speak(utterance);
    }

    // Chrome fix: wait for voices
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = speak;
    } else {
        speak();
    }
}
