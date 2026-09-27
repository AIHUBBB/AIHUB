/* =========================================================
AIHUB - MAIN JAVASCRIPT
========================================================= */

/* =========================
MOBILE MENU
========================= */

function toggleMenu() {

```
const nav = document.getElementById("mainNav");

if (!nav) return;

nav.classList.toggle("open");
```

}

/* =========================
HOME TOOL SEARCH
========================= */

function searchTools() {

```
const input = document.getElementById("toolSearch");

if (!input) return;

const query = input.value.toLowerCase().trim();

const cards = document.querySelectorAll(".tool-card");

const noResults = document.getElementById("noResults");

let found = false;

cards.forEach(card => {

    const text =
        (card.innerText + " " + (card.dataset.tool || ""))
        .toLowerCase();

    if (text.includes(query)) {

        card.style.display = "";
        found = true;

    } else {

        card.style.display = "none";
    }
});

if (query === "") {

    cards.forEach(card => {
        card.style.display = "";
    });

    if (noResults) {
        noResults.style.display = "none";
    }

    return;
}

if (noResults) {
    noResults.style.display = found ? "none" : "block";
}
```

}

/* =========================
MORE TOOLS SEARCH
========================= */

function filterMoreTools() {

```
const input = document.getElementById("moreToolsSearch");

const grid = document.getElementById("proToolsGrid");

if (!input || !grid) return;

const query = input.value.toLowerCase().trim();

const tools = grid.querySelectorAll(".pro-tool");

let visible = 0;

tools.forEach(tool => {

    const text =
        (tool.innerText + " " + (tool.dataset.search || ""))
        .toLowerCase();

    if (text.includes(query)) {

        tool.style.display = "";

        visible++;

    } else {

        tool.style.display = "none";
    }
});
```

}

/* =========================
WORD COUNTER
========================= */

function countWords() {

```
const input = document.getElementById("textInput");

const result = document.getElementById("wordResult");

if (!input || !result) return;

const text = input.value.trim();

const words = text
    ? text.split(/\s+/).length
    : 0;

result.innerHTML =
    "Words: <strong>" +
    words +
    "</strong>";
```

}

/* =========================
CLEAN TEXT
========================= */

function cleanText() {

```
const input = document.getElementById("textInput");

if (!input) return;

input.value =
    input.value
        .replace(/\s+/g, " ")
        .trim();
```

}

/* =========================
WRITING PROMPT
========================= */

function generateWritingPrompt() {

```
const prompts = [

    "Write a short story about someone who discovers a mysterious door.",

    "Write a professional LinkedIn post about learning new skills.",

    "Create an engaging introduction for a technology article.",

    "Write a motivational paragraph about never giving up.",

    "Create a story about a football player chasing a professional career.",

    "Write a blog introduction about artificial intelligence.",

    "Create a social media post announcing a new project.",

    "Write a product description for a modern AI tool."

];

const result =
    document.getElementById("writingPromptResult");

if (!result) return;

result.innerHTML =
    prompts[Math.floor(Math.random() * prompts.length)];
```

}

/* =========================
IMAGE PROMPT
========================= */

function generateImagePrompt() {

```
const subject =
    document.getElementById("imageSubject")?.value.trim();

const style =
    document.getElementById("imageStyle")?.value || "Cinematic";

const lighting =
    document.getElementById("imageLighting")?.value || "dramatic lighting";

const result =
    document.getElementById("imagePromptResult");

if (!result) return;

if (!subject) {

    result.innerHTML =
        "Enter a subject first.";

    return;
}

result.innerHTML =
    `${subject}, ${style} style, ${lighting}, highly detailed, professional composition, cinematic atmosphere, high quality`;
```

}

/* =========================
VIDEO IDEA
========================= */

function generateVideoIdea() {

```
const topic =
    document.getElementById("videoTopic")?.value.trim();

const result =
    document.getElementById("videoIdeaResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a topic first.";

    return;
}

result.innerHTML =
    `🎬 Video idea:
```

Create an engaging video about ${topic}.

Hook:
Start with a surprising question.

Main content:
Explain the most interesting points about ${topic}.

Ending:
Finish with a clear takeaway and call to action.`;
}

/* =========================
BUSINESS IDEA
========================= */

function generateBusinessIdea() {

```
const topic =
    document.getElementById("businessTopic")?.value.trim();

const result =
    document.getElementById("businessIdeaResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a business topic first.";

    return;
}

result.innerHTML =
    `<strong>Business Concept</strong>
```

Build a service around ${topic}.

Target customers:
People interested in ${topic}.

Possible revenue:
• Subscription
• Affiliate marketing
• Premium services
• Advertising

Growth idea:
Create useful free tools and convert regular visitors into customers.`;
}

/* =========================
MUSIC IDEA
========================= */

function generateMusicIdea() {

```
const topic =
    document.getElementById("musicTopic")?.value.trim();

const genre =
    document.getElementById("musicGenre")?.value || "Pop";

const result =
    document.getElementById("musicIdeaResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a topic first.";

    return;
}

result.innerHTML =
    `<strong>${genre} song concept</strong>
```

Theme:
${topic}

Mood:
Emotional and energetic.

Structure:
Intro → Verse → Chorus → Verse → Chorus → Outro`;
}

/* =========================================================
MORE TOOLS
========================================================= */

/* =========================
SUMMARIZER
========================= */

function summarizeText() {

```
const input =
    document.getElementById("summaryInput")?.value.trim();

const result =
    document.getElementById("summaryResult");

if (!result) return;

if (!input) {

    result.innerHTML =
        "Please enter some text.";

    return;
}

const sentences =
    input
        .split(/[.!?]+/)
        .map(sentence => sentence.trim())
        .filter(Boolean);

if (sentences.length <= 2) {

    result.innerHTML =
        sentences.join(". ") + ".";

    return;
}

const amount =
    Math.max(2, Math.ceil(sentences.length * 0.35));

const summary =
    sentences
        .slice(0, amount)
        .join(". ");

result.innerHTML =
    summary + ".";
```

}

/* =========================
TRANSLATOR
========================= */

function translateText() {

```
const input =
    document.getElementById("translateInput")?.value.trim();

const language =
    document.getElementById("translateLanguage")?.value;

const result =
    document.getElementById("translateResult");

if (!result) return;

if (!input) {

    result.innerHTML =
        "Please enter some text.";

    return;
}

result.innerHTML =
    `🌍 Target language: ${language}
```

This interface is ready for connection to a real translation API.

The current GitHub version does not send your text to an external AI service.`;
}

/* =========================
GRAMMAR
========================= */

function checkGrammar() {

```
const input =
    document.getElementById("grammarInput")?.value.trim();

const result =
    document.getElementById("grammarResult");

if (!result) return;

if (!input) {

    result.innerHTML =
        "Please enter some text.";

    return;
}

let suggestions = [];

if (input[0] !== input[0].toUpperCase()) {

    suggestions.push(
        "• Consider starting the sentence with a capital letter."
    );
}

if (!/[.!?]$/.test(input)) {

    suggestions.push(
        "• Consider adding punctuation at the end."
    );
}

if (/\s{2,}/.test(input)) {

    suggestions.push(
        "• Remove extra spaces."
    );
}

if (suggestions.length === 0) {

    result.innerHTML =
        "✓ No basic formatting issues detected.";

} else {

    result.innerHTML =
        suggestions.join("\n");
}
```

}

/* =========================
IDEA GENERATOR
========================= */

function generateIdea() {

```
const topic =
    document.getElementById("ideaTopic")?.value.trim();

const result =
    document.getElementById("ideaResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a topic first.";

    return;
}

const ideas = [

    `Build a useful website focused on ${topic}.`,

    `Create a social media channel around ${topic}.`,

    `Create a free tool that helps people with ${topic}.`,

    `Create a blog explaining ${topic} for beginners.`,

    `Build a small online business around ${topic}.`

];

result.innerHTML =
    ideas
        .map((idea, index) =>
            `${index + 1}. ${idea}`
        )
        .join("\n");
```

}

/* =========================
SOCIAL CAPTION
========================= */

function generateCaption() {

```
const topic =
    document.getElementById("captionTopic")?.value.trim();

const result =
    document.getElementById("captionResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a topic first.";

    return;
}

const captions = [

    `🔥 ${topic} — Keep creating. Keep improving. 🚀`,

    `🚀 New content about ${topic}. What do you think?`,

    `✨ Exploring ${topic} and sharing the journey.`,

    `💡 Everything starts with one idea: ${topic}.`,

    `⚡ New project. New goals. ${topic}.`

];

result.innerHTML =
    captions[Math.floor(Math.random() * captions.length)];
```

}

/* =========================
EMAIL GENERATOR
========================= */

function generateEmail() {

```
const topic =
    document.getElementById("emailTopic")?.value.trim();

const result =
    document.getElementById("emailResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter an email topic first.";

    return;
}

result.innerHTML =
    `Subject: ${topic}
```

Hello,

I am contacting you regarding ${topic}.

I would appreciate your time and consideration.

Please let me know if you need any additional information.

Best regards`;
}

/* =========================
CV GENERATOR
========================= */

function generateCV() {

```
const name =
    document.getElementById("cvName")?.value.trim();

const job =
    document.getElementById("cvJob")?.value.trim();

const result =
    document.getElementById("cvResult");

if (!result) return;

if (!name || !job) {

    result.innerHTML =
        "Enter your name and target position.";

    return;
}

result.innerHTML =
    `<strong>${escapeHTML(name)}</strong>
```

${escapeHTML(job)}

━━━━━━━━━━━━━━━━━━

PROFILE

Motivated professional looking to develop skills and contribute to a professional team.

SKILLS

• Communication
• Teamwork
• Problem solving
• Organization
• Adaptability

EXPERIENCE

Add your professional experience here.

EDUCATION

Add your education here.

LANGUAGES

Add your languages here.`;
}

/* =========================
SEO GENERATOR
========================= */

function generateSEO() {

```
const topic =
    document.getElementById("seoTopic")?.value.trim();

const result =
    document.getElementById("seoResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a topic first.";

    return;
}

result.innerHTML =
    `<strong>SEO Title Ideas</strong>
```

1. The Ultimate Guide to ${topic}

2. Best ${topic} Tips for Beginners

3. Everything You Need to Know About ${topic}

4. ${topic}: Complete Beginner's Guide

5. How to Get Started With ${topic}

<strong>Meta Description</strong>

Discover useful information, tips and practical ideas about ${topic}. Learn the basics and explore new ways to improve your results.`;
}

/* =========================
PASSWORD GENERATOR
========================= */

function generatePassword() {

```
const length =
    Number(
        document.getElementById("passwordLength")?.value || 20
    );

const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";

const array =
    new Uint32Array(length);

crypto.getRandomValues(array);

let password = "";

for (let i = 0; i < length; i++) {

    password +=
        chars[array[i] % chars.length];
}

const result =
    document.getElementById("passwordResult");

if (!result) return;

result.innerHTML =
    `<strong>${escapeHTML(password)}</strong>`;
```

}

/* =========================
CALCULATOR
========================= */

function calculate() {

```
const input =
    document.getElementById("calcInput")?.value.trim();

const result =
    document.getElementById("calcResult");

if (!result) return;

if (!input) {

    result.innerHTML =
        "Enter a calculation.";

    return;
}

if (!/^[0-9+\-*/().%\s]+$/.test(input)) {

    result.innerHTML =
        "Only basic mathematical operations are allowed.";

    return;
}

try {

    const answer =
        Function(
            '"use strict"; return (' +
            input +
            ')'
        )();

    if (!Number.isFinite(answer)) {

        result.innerHTML =
            "Invalid calculation.";

        return;
    }

    result.innerHTML =
        `<strong>Result:</strong> ${answer}`;

} catch {

    result.innerHTML =
        "Invalid calculation.";
}
```

}

/* =========================
TEXT ANALYZER
========================= */

function updateCounter() {

```
const input =
    document.getElementById("counterInput");

const result =
    document.getElementById("counterResult");

if (!input || !result) return;

const text =
    input.value;

const trimmed =
    text.trim();

const words =
    trimmed
        ? trimmed.split(/\s+/).length
        : 0;

const characters =
    text.length;

const charactersNoSpaces =
    text.replace(/\s/g, "").length;

const sentences =
    text
        .split(/[.!?]+/)
        .filter(sentence => sentence.trim())
        .length;

const paragraphs =
    text
        .split(/\n\s*\n/)
        .filter(paragraph => paragraph.trim())
        .length;

result.innerHTML =
    `Words: <strong>${words}</strong>
```

Characters: <strong>${characters}</strong>
Characters without spaces: <strong>${charactersNoSpaces}</strong>
Sentences: <strong>${sentences}</strong>
Paragraphs: <strong>${paragraphs}</strong>`;
}

/* =========================
COLOR PALETTE
========================= */

function generatePalette() {

```
const result =
    document.getElementById("paletteResult");

if (!result) return;

const colors = [];

for (let i = 0; i < 5; i++) {

    const color =
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

    colors.push(color);
}

result.innerHTML =
    colors
        .map(color => {

            return `
                <div
                    class="palette-color"
                    style="background:${color}"
                    title="Click to copy ${color}"
                    onclick="copyText('${color}')"
                >
                    ${color}
                </div>
            `;

        })
        .join("");
```

}

/* =========================
HASHTAG GENERATOR
========================= */

function generateHashtags() {

```
const topic =
    document.getElementById("hashtagTopic")?.value.trim();

const result =
    document.getElementById("hashtagResult");

if (!result) return;

if (!topic) {

    result.innerHTML =
        "Enter a topic first.";

    return;
}

const clean =
    topic
        .replace(/[^\w\s]/g, "")
        .trim()
        .replace(/\s+/g, "");

const lower =
    clean.toLowerCase();

const hashtags = [

    `#${lower}`,

    `#${lower}tips`,

    `#${lower}life`,

    `#${lower}community`,

    `#${lower}content`,

    `#${lower}ideas`,

    `#${lower}creator`,

    `#${lower}online`,

    `#trending`,

    `#viral`

];

result.innerHTML =
    hashtags.join(" ");
```

}

/* =========================
CASE CONVERTER
========================= */

function convertCase(type) {

```
const input =
    document.getElementById("caseInput")?.value || "";

const result =
    document.getElementById("caseResult");

if (!result) return;

if (!input.trim()) {

    result.innerHTML =
        "Enter some text first.";

    return;
}

let output = input;

if (type === "upper") {

    output =
        input.toUpperCase();

} else if (type === "lower") {

    output =
        input.toLowerCase();

} else if (type === "title") {

    output =
        input
            .toLowerCase()
            .replace(/\b\w/g, letter =>
                letter.toUpperCase()
            );
}

result.innerHTML =
    escapeHTML(output);
```

}

/* =========================
TEXT FORMATTER
========================= */

function formatText() {

```
const input =
    document.getElementById("formatInput")?.value || "";

const result =
    document.getElementById("formatResult");

if (!result) return;

if (!input.trim()) {

    result.innerHTML =
        "Enter some text first.";

    return;
}

const cleaned =
    input
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

result.innerHTML =
    escapeHTML(cleaned);
```

}

/* =========================
JSON FORMATTER
========================= */

function formatJSON() {

```
const input =
    document.getElementById("jsonInput")?.value.trim();

const result =
    document.getElementById("jsonResult");

if (!result) return;

if (!input) {

    result.innerHTML =
        "Paste JSON first.";

    return;
}

try {

    const parsed =
        JSON.parse(input);

    result.innerHTML =
        escapeHTML(
            JSON.stringify(parsed, null, 4)
        );

} catch {

    result.innerHTML =
        "❌ Invalid JSON.";
}
```

}

/* =========================
JSON MINIFIER
========================= */

function minifyJSON() {

```
const input =
    document.getElementById("jsonInput")?.value.trim();

const result =
    document.getElementById("jsonResult");

if (!result) return;

if (!input) {

    result.innerHTML =
        "Paste JSON first.";

    return;
}

try {

    const parsed =
        JSON.parse(input);

    result.innerHTML =
        escapeHTML(
            JSON.stringify(parsed)
        );

} catch {

    result.innerHTML =
        "❌ Invalid JSON.";
}
```

}

/* =========================
CLEAR TOOL
========================= */

function clearTool(inputId, resultId) {

```
const input =
    document.getElementById(inputId);

const result =
    document.getElementById(resultId);

if (input) {
    input.value = "";
}

if (result) {
    result.innerHTML = "";
}
```

}

/* =========================
COPY TEXT
========================= */

async function copyText(text) {

```
try {

    await navigator.clipboard.writeText(text);

} catch {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();
}
```

}

/* =========================
COPY RESULT ELEMENT
========================= */

async function copyElementText(id) {

```
const element =
    document.getElementById(id);

if (!element) return;

const text =
    element.innerText.trim();

if (!text) return;

await copyText(text);
```

}

/* =========================
HTML ESCAPE
========================= */

function escapeHTML(value) {

```
return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
```

}
s
