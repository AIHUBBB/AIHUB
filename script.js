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
