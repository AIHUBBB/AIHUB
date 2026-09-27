function toggleMenu(){

const menu = document.getElementById("navMenu");

if(menu){
menu.classList.toggle("show");
}

}


function searchTools(){

const input = document.getElementById("siteSearch");

if(!input){
return;
}

const query = input.value.toLowerCase().trim();

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

const text = (
card.innerText + " " +
(card.dataset.search || "")
).toLowerCase();

if(text.includes(query)){
card.style.display = "";
}else{
card.style.display = "none";
}

});

}


function countWords(){

const input = document.getElementById("wordText");
const output = document.getElementById("wordOutput");

if(!input || !output){
return;
}

const text = input.value.trim();

const words = text ? text.split(/\s+/).length : 0;

const characters = text.length;

output.textContent =
"Words: " + words +
"\nCharacters: " + characters;

}


function cleanText(){

const input = document.getElementById("cleanText");
const output = document.getElementById("cleanOutput");

if(!input || !output){
return;
}

let text = input.value;

text = text
.replace(/\s+/g," ")
.trim();

output.textContent = text || "Nothing to clean.";

}


function generateWritingPrompt(){

const output = document.getElementById("writingPrompt");

if(!output){
return;
}

const prompts = [

"Write a short article about how artificial intelligence is changing everyday life.",

"Create a social media post promoting a new technology product.",

"Write a motivational story about someone who never gave up.",

"Create a blog introduction about the future of online business.",

"Write an engaging description for a new mobile application."

];

const random =
prompts[Math.floor(Math.random()*prompts.length)];

output.textContent = random;

}


function generateImagePrompt(){

const subject =
document.getElementById("imageSubject")?.value;

const style =
document.getElementById("imageStyle")?.value;

const lighting =
document.getElementById("imageLighting")?.value;

const output =
document.getElementById("imageOutput");

if(!output){
return;
}

if(!subject){
output.textContent = "Please enter a subject first.";
return;
}

output.textContent =
subject +
", " +
style +
" style, " +
lighting +
" lighting, highly detailed, cinematic composition, professional quality, sharp details.";

}


function generateVideoIdea(){

const topic =
document.getElementById("videoTopic")?.value;

const output =
document.getElementById("videoOutput");

if(!output){
return;
}

if(!topic){
output.textContent = "Please enter a topic first.";
return;
}

output.textContent =
"VIDEO TITLE:\n" +
topic +
"\n\nHOOK:\n" +
"Start with a strong visual or question that immediately catches attention." +
"\n\nVIDEO IDEA:\n" +
"Create an engaging video about " +
topic +
"." +
"\n\nENDING:\n" +
"Finish with a simple call to action.";

}


function generateBusinessIdea(){

const topic =
document.getElementById("businessTopic")?.value;

const output =
document.getElementById("businessOutput");

if(!output){
return;
}

const ideas = [

"Create a small online service around " + (topic || "digital products") + ".",

"Build a niche website that helps people solve a specific problem related to " + (topic || "technology") + ".",

"Create social-media content and monetize it through partnerships and digital products.",

"Build a simple online tool targeting a specific audience and add premium features later."

];

output.textContent =
ideas[Math.floor(Math.random()*ideas.length)];

}


function generateMusicIdea(){

const topic =
document.getElementById("musicTopic")?.value;

const genre =
document.getElementById("musicGenre")?.value;

const output =
document.getElementById("musicOutput");

if(!output){
return;
}

if(!topic){
output.textContent = "Please enter a song topic.";
return;
}

output.textContent =
"SONG CONCEPT\n\n" +
"Topic: " + topic +
"\nGenre: " + genre +
"\n\nMOOD:\nEmotional and memorable.\n\n" +
"MUSIC IDEA:\nCreate a song around " +
topic +
" with a strong intro, memorable chorus and dynamic ending.";

}
function summarizeText() {
    const input = document.getElementById("summaryInput").value.trim();
    const result = document.getElementById("summaryResult");

    if (!input) {
        result.innerHTML = "Please enter some text.";
        return;
    }

    const sentences = input.split(/[.!?]+/).filter(Boolean);
    const summary = sentences.slice(0, 2).join(". ");

    result.innerHTML = summary
        ? summary + "."
        : input;
}


function translateText() {
    const input = document.getElementById("translateInput").value.trim();
    const language = document.getElementById("translateLanguage").value;
    const result = document.getElementById("translateResult");

    if (!input) {
        result.innerHTML = "Please enter some text.";
        return;
    }

    result.innerHTML =
        "Translation to <strong>" +
        language +
        "</strong> requires a translation API. " +
        "This demo is ready for API integration.";
}


function checkGrammar() {
    const input = document.getElementById("grammarInput").value.trim();
    const result = document.getElementById("grammarResult");

    if (!input) {
        result.innerHTML = "Please enter some text.";
        return;
    }

    result.innerHTML =
        "Your text has been received. A real grammar checker requires an AI or language API.";
}


function generateIdea() {
    const topic = document.getElementById("ideaTopic").value.trim();
    const result = document.getElementById("ideaResult");

    if (!topic) {
        result.innerHTML = "Enter a topic first.";
        return;
    }

    result.innerHTML =
        "<strong>Idea:</strong><br>" +
        "Create a useful project focused on " +
        topic +
        ", with simple tools, helpful content and a clean user experience.";
}


function generateCaption() {
    const topic = document.getElementById("captionTopic").value.trim();
    const result = document.getElementById("captionResult");

    if (!topic) {
        result.innerHTML = "Enter a topic first.";
        return;
    }

    result.innerHTML =
        "🔥 " + topic +
        " — Keep creating, keep improving, and keep moving forward. 🚀";
}


function generateEmail() {
    const topic = document.getElementById("emailTopic").value.trim();
    const result = document.getElementById("emailResult");

    if (!topic) {
        result.innerHTML = "Enter an email topic first.";
        return;
    }

    result.innerHTML =
        "<strong>Subject:</strong> " + topic +
        "<br><br>" +
        "Hello,<br><br>" +
        "I am contacting you regarding " + topic +
        ". I would appreciate your time and consideration.<br><br>" +
        "Best regards";
}


function generateCV() {
    const name = document.getElementById("cvName").value.trim();
    const job = document.getElementById("cvJob").value.trim();
    const result = document.getElementById("cvResult");

    if (!name || !job) {
        result.innerHTML = "Enter your name and position.";
        return;
    }

    result.innerHTML =
        "<strong>" + name + "</strong><br>" +
        job +
        "<br><br>" +
        "<strong>PROFILE</strong><br>" +
        "Motivated professional interested in developing skills and gaining new opportunities." +
        "<br><br>" +
        "<strong>SKILLS</strong><br>" +
        "Communication • Teamwork • Problem solving";
}


function generateSEO() {
    const topic = document.getElementById("seoTopic").value.trim();
    const result = document.getElementById("seoResult");

    if (!topic) {
        result.innerHTML = "Enter a topic first.";
        return;
    }

    result.innerHTML =
        "1. The Ultimate Guide to " + topic +
        "<br><br>" +
        "2. Best " + topic + " Tips for Beginners" +
        "<br><br>" +
        "3. Everything You Need to Know About " + topic;
}


function generatePassword() {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 16; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("passwordResult").innerHTML =
        "<strong>" + password + "</strong>";
}


function calculate() {
    const input = document.getElementById("calcInput").value.trim();
    const result = document.getElementById("calcResult");

    if (!input) {
        result.innerHTML = "Enter a calculation.";
        return;
    }

    if (!/^[0-9+\-*/().%\s]+$/.test(input)) {
        result.innerHTML = "Only basic mathematical operations are allowed.";
        return;
    }

    try {
        const answer = Function('"use strict"; return (' + input + ')')();

        if (!Number.isFinite(answer)) {
            result.innerHTML = "Invalid calculation.";
            return;
        }

        result.innerHTML = "<strong>Result:</strong> " + answer;
    } catch {
        result.innerHTML = "Invalid calculation.";
    }
}


function updateCounter() {
    const text = document.getElementById("counterInput").value;

    const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    const characters = text.length;

    document.getElementById("counterResult").innerHTML =
        "Words: <strong>" + words +
        "</strong><br>Characters: <strong>" +
        characters +
        "</strong>";
}


function generatePalette() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        const color =
            "#" +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0");

        colors.push(color);
    }

    const result = document.getElementById("paletteResult");

    result.innerHTML = colors.map(color => `
        <div style="
            display:inline-flex;
            flex-direction:column;
            align-items:center;
            margin:8px;
        ">
            <div style="
                width:70px;
                height:70px;
                border-radius:14px;
                background:${color};
                border:1px solid rgba(255,255,255,.15);
            "></div>

            <small>${color}</small>
        </div>
    `).join("");
}
