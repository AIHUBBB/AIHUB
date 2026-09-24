const tools = {

    "ChatGPT": {
        icon: "🤖",
        category: "Writing",
        rating: "4.9",
        price: "Free + Paid",
        description: "AI assistant for writing, questions, research and productivity.",
        features: [
            "AI conversations",
            "Writing and rewriting",
            "Research and explanations",
            "Idea generation",
            "Productivity assistance"
        ],
        url: "https://chatgpt.com/"
    },

    "Claude": {
        icon: "🧠",
        category: "Writing",
        rating: "4.8",
        price: "Free + Paid",
        description: "AI assistant for writing, analysis, research and productivity.",
        features: [
            "AI conversations",
            "Long document analysis",
            "Writing assistance",
            "Research support",
            "Problem solving"
        ],
        url: "https://claude.ai/"
    },

    "Canva AI": {
        icon: "🎨",
        category: "Image",
        rating: "4.7",
        price: "Free + Paid",
        description: "Create designs, images and visual content with AI.",
        features: [
            "AI image generation",
            "Graphic design",
            "AI writing",
            "Presentation creation",
            "Social media designs"
        ],
        url: "https://www.canva.com/"
    },

    "Midjourney": {
        icon: "🖼️",
        category: "Image",
        rating: "4.9",
        price: "Paid",
        description: "Generate high-quality AI images from text prompts.",
        features: [
            "AI image generation",
            "Creative styles",
            "High-quality visuals",
            "Image variations",
            "Art creation"
        ],
        url: "https://www.midjourney.com/"
    },

    "Runway": {
        icon: "🎬",
        category: "Video",
        rating: "4.7",
        price: "Free + Paid",
        description: "Create and edit videos using artificial intelligence.",
        features: [
            "AI video generation",
            "Video editing",
            "Text to video",
            "Image to video",
            "Creative effects"
        ],
        url: "https://runwayml.com/"
    },

    "HeyGen": {
        icon: "🎥",
        category: "Video",
        rating: "4.6",
        price: "Free + Paid",
        description: "Create AI avatar videos and presentations.",
        features: [
            "AI avatars",
            "Text to video",
            "AI voice",
            "Video translation",
            "Business presentations"
        ],
        url: "https://www.heygen.com/"
    },

    "Suno": {
        icon: "🎵",
        category: "Music",
        rating: "4.8",
        price: "Free + Paid",
        description: "Generate complete songs and music using AI.",
        features: [
            "AI song generation",
            "Music creation",
            "Lyrics generation",
            "Different music styles",
            "Song customization"
        ],
        url: "https://suno.com/"
    },

    "GitHub Copilot": {
        icon: "💻",
        category: "Coding",
        rating: "4.8",
        price: "Free + Paid",
        description: "AI coding assistant that helps developers write code faster.",
        features: [
            "Code completion",
            "Code generation",
            "Debugging assistance",
            "Code explanations",
            "Developer productivity"
        ],
        url: "https://github.com/features/copilot"
    },

    "Notion AI": {
        icon: "💼",
        category: "Business",
        rating: "4.7",
        price: "Free + Paid",
        description: "AI-powered workspace for notes, documents and productivity.",
        features: [
            "AI writing",
            "Document summaries",
            "Task management",
            "Workspace organization",
            "Productivity assistance"
        ],
        url: "https://www.notion.com/product/ai"
    },

    "Grammarly": {
        icon: "✍️",
        category: "Writing",
        rating: "4.7",
        price: "Free + Paid",
        description: "AI writing assistant for grammar, clarity and communication.",
        features: [
            "Grammar correction",
            "Spelling correction",
            "Writing suggestions",
            "AI rewriting",
            "Writing improvement"
        ],
        url: "https://www.grammarly.com/"
    },

    "QuillBot": {
        icon: "📝",
        category: "Writing",
        rating: "4.6",
        price: "Free + Paid",
        description: "AI writing tool for paraphrasing, rewriting and summarizing.",
        features: [
            "Paraphrasing",
            "Summarization",
            "Grammar checking",
            "AI writing",
            "Text improvement"
        ],
        url: "https://quillbot.com/"
    },

    "Perplexity": {
        icon: "🔎",
        category: "Writing",
        rating: "4.8",
        price: "Free + Paid",
        description: "AI search engine for research and answers.",
        features: [
            "AI search",
            "Research",
            "Source-based answers",
            "Web information",
            "Question answering"
        ],
        url: "https://www.perplexity.ai/"
    },

    "Jasper": {
        icon: "✍️",
        category: "Writing",
        rating: "4.6",
        price: "Paid",
        description: "AI platform for marketing and business content.",
        features: [
            "Marketing content",
            "Blog writing",
            "Advertising copy",
            "Brand voice",
            "Content generation"
        ],
        url: "https://www.jasper.ai/"
    },

    "Adobe Firefly": {
        icon: "🔥",
        category: "Image",
        rating: "4.7",
        price: "Free + Paid",
        description: "Adobe's AI platform for creative image and design generation.",
        features: [
            "AI image generation",
            "Generative fill",
            "Creative effects",
            "Image editing",
            "Design assistance"
        ],
        url: "https://firefly.adobe.com/"
    },

    "Leonardo AI": {
        icon: "🦁",
        category: "Image",
        rating: "4.7",
        price: "Free + Paid",
        description: "AI platform for generating creative images and visual assets.",
        features: [
            "AI image generation",
            "Image editing",
            "Creative assets",
            "Different AI models",
            "Image customization"
        ],
        url: "https://leonardo.ai/"
    },

    "Ideogram": {
        icon: "🎨",
        category: "Image",
        rating: "4.7",
        price: "Free + Paid",
        description: "AI image generator known for creative designs and text in images.",
        features: [
            "AI image generation",
            "Text in images",
            "Graphic design",
            "Creative styles",
            "Image editing"
        ],
        url: "https://ideogram.ai/"
    },

    "DALL·E": {
        icon: "🖌️",
        category: "Image",
        rating: "4.7",
        price: "Paid",
        description: "AI image generation technology for creating images from text.",
        features: [
            "Text to image",
            "Creative image generation",
            "Image variations",
            "Visual concepts",
            "AI artwork"
        ],
        url: "https://openai.com/index/dall-e-3/"
    },

    "CapCut": {
        icon: "✂️",
        category: "Video",
        rating: "4.8",
        price: "Free + Paid",
        description: "Video editing platform with powerful AI features.",
        features: [
            "AI video editing",
            "Auto captions",
            "AI effects",
            "Text to video",
            "Social media editing"
        ],
        url: "https://www.capcut.com/"
    },

    "Synthesia": {
        icon: "🎭",
        category: "Video",
        rating: "4.6",
        price: "Paid",
        description: "Create professional AI avatar videos for business and education.",
        features: [
            "AI avatars",
            "AI voices",
            "Presentation videos",
            "Video translation",
            "Business content"
        ],
        url: "https://www.synthesia.io/"
    },

    "InVideo AI": {
        icon: "🎞️",
        category: "Video",
        rating: "4.6",
        price: "Free + Paid",
        description: "Create videos from text using AI.",
        features: [
            "Text to video",
            "AI video creation",
            "Video templates",
            "Voiceovers",
            "Social media videos"
        ],
        url: "https://invideo.io/"
    },

    "Descript": {
        icon: "🎙️",
        category: "Video",
        rating: "4.6",
        price: "Free + Paid",
        description: "AI-powered audio and video editing platform.",
        features: [
            "Video editing",
            "Audio editing",
            "Transcription",
            "AI voice",
            "Podcast creation"
        ],
        url: "https://www.descript.com/"
    },

    "ElevenLabs": {
        icon: "🔊",
        category: "Music",
        rating: "4.8",
        price: "Free + Paid",
        description: "AI voice platform for realistic speech and audio generation.",
        features: [
            "AI voice generation",
            "Text to speech",
            "Voice cloning",
            "Voice design",
            "Audio creation"
        ],
        url: "https://elevenlabs.io/"
    },

    "Udio": {
        icon: "🎶",
        category: "Music",
        rating: "4.7",
        price: "Free + Paid",
        description: "AI music creation platform for generating songs.",
        features: [
            "AI music generation",
            "Song creation",
            "Music styles",
            "Lyrics support",
            "Audio generation"
        ],
        url: "https://www.udio.com/"
    },

    "AIVA": {
        icon: "🎼",
        category: "Music",
        rating: "4.5",
        price: "Free + Paid",
        description: "AI music composer for creating original music.",
        features: [
            "AI composition",
            "Soundtrack creation",
            "Music styles",
            "Instrumental music",
            "Creative projects"
        ],
        url: "https://www.aiva.ai/"
    },

    "Soundraw": {
        icon: "🎧",
        category: "Music",
        rating: "4.5",
        price: "Paid",
        description: "AI music generator for creators and content producers.",
        features: [
            "AI music generation",
            "Royalty-friendly music",
            "Music customization",
            "Different genres",
            "Creator tools"
        ],
        url: "https://soundraw.io/"
    },

    "Beatoven": {
        icon: "🥁",
        category: "Music",
        rating: "4.4",
        price: "Free + Paid",
        description: "AI music generation platform for videos and content.",
        features: [
            "AI background music",
            "Music generation",
            "Mood selection",
            "Video music",
            "Audio customization"
        ],
        url: "https://www.beatoven.ai/"
    },

    "Cursor": {
        icon: "🖥️",
        category: "Coding",
        rating: "4.8",
        price: "Free + Paid",
        description: "AI-powered code editor for developers.",
        features: [
            "AI coding",
            "Code generation",
            "Codebase understanding",
            "Debugging",
            "Code editing"
        ],
        url: "https://www.cursor.com/"
    },

    "Replit": {
        icon: "💻",
        category: "Coding",
        rating: "4.7",
        price: "Free + Paid",
        description: "Online development platform with AI coding tools.",
        features: [
            "Online coding",
            "AI coding assistant",
            "App development",
            "Cloud development",
            "Code collaboration"
        ],
        url: "https://replit.com/"
    },

    "Windsurf": {
        icon: "🌊",
        category: "Coding",
        rating: "4.6",
        price: "Free + Paid",
        description: "AI-powered development environment for programmers.",
        features: [
            "AI coding",
            "Code generation",
            "Codebase assistance",
            "Debugging",
            "Developer tools"
        ],
        url: "https://windsurf.com/"
    },

    "HubSpot AI": {
        icon: "💼",
        category: "Business",
        rating: "4.6",
        price: "Free + Paid",
        description: "AI tools for marketing, sales and business management.",
        features: [
            "AI marketing",
            "Sales assistance",
            "Content creation",
            "Customer management",
            "Business automation"
        ],
        url: "https://www.hubspot.com/"
    },

    "ClickUp AI": {
        icon: "✅",
        category: "Business",
        rating: "4.6",
        price: "Free + Paid",
        description: "AI productivity and project management platform.",
        features: [
            "Task management",
            "AI writing",
            "Project management",
            "Team collaboration",
            "Productivity tools"
        ],
        url: "https://clickup.com/"
    }

};


/* =========================
   GET TOOL FROM URL
========================= */

const params = new URLSearchParams(
    window.location.search
);

const toolName = params.get("tool");

const tool = tools[toolName];


/* =========================
   DISPLAY TOOL
========================= */

if (tool) {

    document.title =
        "AIHUB - " + toolName;


    document.getElementById("toolTitle").textContent =
        toolName;


    document.getElementById("toolName").textContent =
        toolName;


    document.getElementById("toolDescription").textContent =
        tool.description;


    document.getElementById("toolIcon").textContent =
        tool.icon;


    document.getElementById("toolRating").textContent =
        tool.rating;


    document.getElementById("toolPrice").textContent =
        tool.price;


    document.getElementById("toolCategory").textContent =
        tool.category;


    const featuresList =
        document.getElementById("toolFeatures");


    featuresList.innerHTML = "";


    tool.features.forEach(function(feature) {

        const li =
            document.createElement("li");

        li.textContent = feature;

        featuresList.appendChild(li);

    });


    const tryButton =
        document.getElementById("tryToolButton");


    tryButton.href =
        tool.url;

} else {

    document.title =
        "AIHUB - Tool Not Found";


    document.getElementById("toolTitle").textContent =
        "Tool Not Found";


    document.getElementById("toolName").textContent =
        "Tool Not Found";


    document.getElementById("toolDescription").textContent =
        "Sorry, this AI tool could not be found.";


    document.getElementById("toolIcon").textContent =
        "❌";


    document.getElementById("toolRating").textContent =
        "-";


    document.getElementById("toolPrice").textContent =
        "-";


    document.getElementById("toolCategory").textContent =
        "-";


    document.getElementById("toolFeatures").innerHTML =
        "<li>Please return to AIHUB and choose another tool.</li>";


    document.getElementById("tryToolButton").style.display =
        "none";

}