const toolNames = {
    "ChatGPT": "ChatGPT AI Assistant",
    "Claude": "Claude AI Assistant",
    "Canva AI": "Canva AI",
    "Midjourney": "Midjourney AI Image Generator",
    "Runway": "Runway AI Video Generator",
    "HeyGen": "HeyGen AI Video Generator",
    "Suno": "Suno AI Music Generator",
    "GitHub Copilot": "GitHub Copilot AI Coding Assistant",
    "Notion AI": "Notion AI",
    "Grammarly": "Grammarly AI Writing Assistant",
    "QuillBot": "QuillBot AI Writing Tool",
    "Perplexity": "Perplexity AI Search",
    "Jasper": "Jasper AI",
    "Adobe Firefly": "Adobe Firefly AI",
    "Leonardo AI": "Leonardo AI",
    "Ideogram": "Ideogram AI Image Generator",
    "DALL-E": "DALL-E AI Image Generator",
    "CapCut": "CapCut AI Video Editor",
    "Synthesia": "Synthesia AI Video Generator",
    "InVideo AI": "InVideo AI",
    "Descript": "Descript AI Video Editor",
    "ElevenLabs": "ElevenLabs AI Voice Generator",
    "Udio": "Udio AI Music Generator",
    "AIVA": "AIVA AI Music Generator",
    "Soundraw": "Soundraw AI Music Generator",
    "Beatoven": "Beatoven AI Music Generator",
    "Cursor": "Cursor AI Code Editor",
    "Replit": "Replit AI Coding Platform",
    "Windsurf": "Windsurf AI Coding Tool",
    "HubSpot AI": "HubSpot AI Business Tools",
    "ClickUp AI": "ClickUp AI Productivity Tool"
};

const params = new URLSearchParams(window.location.search);
const tool = params.get("tool");

if (tool && toolNames[tool]) {

    const cleanName = toolNames[tool];

    document.title = `${cleanName} | AIHUB`;

    let description = document.querySelector(
        'meta[name="description"]'
    );

    if (!description) {
        description = document.createElement("meta");
        description.name = "description";
        document.head.appendChild(description);
    }

    description.content =
        `Discover ${cleanName} on AIHUB. Learn about its features, category, pricing and capabilities.`;

    let canonical = document.querySelector(
        'link[rel="canonical"]'
    );

    if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
    }

    canonical.href =
        `https://aihubbb.github.io/AIHUB/tool.html?tool=${encodeURIComponent(tool)}`;
}