// AI Tools Data
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        category: "favorites",
        description: "Advanced conversational AI that can help with writing, coding, analysis, and more. Built by OpenAI.",
        pricing: "freemium",
        icon: "fa-comments",
        url: "tools/chatgpt.html",
        featured: true
    },
    {
        id: 2,
        name: "Midjourney",
        category: "image",
        description: "Create stunning AI-generated artwork and images from text descriptions with incredible detail.",
        pricing: "paid",
        icon: "fa-image",
        url: "tools/midjourney.html",
        featured: true
    },
    {
        id: 3,
        name: "GitHub Copilot",
        category: "code",
        description: "AI pair programmer that helps you write code faster with intelligent suggestions and autocomplete.",
        pricing: "paid",
        icon: "fa-code",
        url: "tools/github-copilot.html",
        featured: true
    },
    {
        id: 4,
        name: "Jasper",
        category: "writing",
        description: "AI writing assistant for creating blog posts, marketing copy, and content at scale.",
        pricing: "paid",
        icon: "fa-pen",
        url: "tools/jasper.html",
        featured: false
    },
    {
        id: 5,
        name: "DALL-E 3",
        category: "image",
        description: "Generate realistic images and art from natural language descriptions with OpenAI's latest model.",
        pricing: "freemium",
        icon: "fa-palette",
        url: "tools/dall-e-3.html",
        featured: true
    },
    {
        id: 6,
        name: "Runway",
        category: "video",
        description: "AI-powered video editing and generation tool for creating and editing videos with AI magic.",
        pricing: "freemium",
        icon: "fa-video",
        url: "tools/runway.html",
        featured: false
    },
    {
        id: 7,
        name: "Copy.ai",
        category: "writing",
        description: "Generate marketing copy, blog posts, and content in seconds with AI-powered writing tools.",
        pricing: "freemium",
        icon: "fa-pen-fancy",
        url: "tools/copy-ai.html",
        featured: false
    },
    {
        id: 8,
        name: "ElevenLabs",
        category: "voice",
        description: "Create realistic AI voices and speech synthesis with natural-sounding voice generation.",
        pricing: "freemium",
        icon: "fa-microphone",
        url: "tools/elevenlabs.html",
        featured: false
    },
    {
        id: 9,
        name: "Notion AI",
        category: "business",
        description: "AI-powered workspace for notes, docs, and project management with intelligent assistance.",
        pricing: "freemium",
        icon: "fa-briefcase",
        url: "tools/notion-ai.html",
        featured: false
    },
    {
        id: 10,
        name: "Stable Diffusion",
        category: "image",
        description: "Open-source AI image generation model that creates high-quality images from text prompts.",
        pricing: "free",
        icon: "fa-image",
        url: "tools/stable-diffusion.html",
        featured: true
    },
    {
        id: 11,
        name: "Grammarly",
        category: "writing",
        description: "AI writing assistant that helps improve your grammar, spelling, and writing style.",
        pricing: "freemium",
        icon: "fa-spell-check",
        url: "tools/grammarly.html",
        featured: false
    },
    {
        id: 12,
        name: "Synthesia",
        category: "video",
        description: "Create AI-generated videos with virtual avatars that can speak in multiple languages.",
        pricing: "paid",
        icon: "fa-user-circle",
        url: "tools/synthesia.html",
        featured: false
    },
    {
        id: 13,
        name: "Claude",
        category: "favorites",
        description: "Advanced AI assistant by Anthropic for complex tasks, analysis, and helpful conversations.",
        pricing: "freemium",
        icon: "fa-robot",
        url: "tools/claude.html",
        featured: true
    },
    {
        id: 14,
        name: "Canva AI",
        category: "design",
        description: "Design tool with AI-powered features for creating graphics, presentations, and marketing materials.",
        pricing: "freemium",
        icon: "fa-palette",
        url: "tools/canva-ai.html",
        featured: false
    },
    {
        id: 15,
        name: "Perplexity AI",
        category: "research",
        description: "AI-powered search engine that provides accurate answers with cited sources.",
        pricing: "freemium",
        icon: "fa-search",
        url: "tools/perplexity.html",
        featured: false
    },
    {
        id: 16,
        name: "HubSpot AI",
        category: "marketing",
        description: "Marketing automation platform with AI tools for content generation and campaign optimization.",
        pricing: "freemium",
        icon: "fa-chart-line",
        url: "#",
        featured: false
    },
    {
        id: 17,
        name: "Zapier AI",
        category: "automation",
        description: "Automate workflows between apps with AI-powered task automation and integration.",
        pricing: "freemium",
        icon: "fa-bolt",
        url: "#",
        featured: false
    },
    {
        id: 18,
        name: "Adobe Firefly",
        category: "design",
        description: "AI-powered creative tools for generating and editing images, text effects, and designs.",
        pricing: "freemium",
        icon: "fa-fire",
        url: "tools/adobe-firefly.html",
        featured: false
    },
    {
        id: 19,
        name: "Descript",
        category: "video",
        description: "Edit videos and podcasts like text documents with AI-powered transcription and editing.",
        pricing: "freemium",
        icon: "fa-film",
        url: "tools/descript.html",
        featured: false
    },
    {
        id: 20,
        name: "Tabnine",
        category: "code",
        description: "AI code completion tool that helps developers write code faster with intelligent suggestions.",
        pricing: "freemium",
        icon: "fa-terminal",
        url: "tools/tabnine.html",
        featured: false
    },
    // AI Video Creation Tools
    {
        id: 21,
        name: "Google Veo",
        category: "video",
        description: "Google's advanced AI video generation model that creates high-quality videos from text prompts.",
        pricing: "freemium",
        icon: "fa-video",
        url: "tools/google-veo.html",
        featured: true
    },
    {
        id: 22,
        name: "Sora 2",
        category: "video",
        description: "OpenAI's cutting-edge AI video generation tool that creates realistic videos from text descriptions.",
        pricing: "paid",
        icon: "fa-film",
        url: "tools/sora-2.html",
        featured: true
    },
    {
        id: 23,
        name: "Google Labs",
        category: "favorites",
        description: "Experimental AI tools from Google for video creation, editing, and enhancement.",
        pricing: "free",
        icon: "fa-flask",
        url: "#",
        featured: false
    },
    {
        id: 24,
        name: "Galaxy AI",
        category: "favorites",
        description: "AI-powered video creation platform for generating professional videos with advanced effects.",
        pricing: "freemium",
        icon: "fa-star",
        url: "tools/galaxy-ai.html",
        featured: false
    },
    // Software Development Tools
    {
        id: 26,
        name: "Claude Code",
        category: "code",
        description: "Anthropic's official CLI for Claude, providing advanced AI assistance for software development.",
        pricing: "freemium",
        icon: "fa-terminal",
        url: "tools/claude-code.html",
        featured: true
    },
    {
        id: 27,
        name: "Cursor",
        category: "code",
        description: "AI-first code editor that helps you code faster with intelligent suggestions and pair programming.",
        pricing: "freemium",
        icon: "fa-code",
        url: "tools/cursor.html",
        featured: true
    },
    {
        id: 28,
        name: "Base44",
        category: "favorites",
        description: "AI-powered development platform for building and deploying applications with intelligent automation.",
        pricing: "freemium",
        icon: "fa-database",
        url: "tools/base44.html",
        featured: false
    },
    {
        id: 29,
        name: "Replit",
        category: "code",
        description: "Collaborative browser-based IDE with AI coding assistance for building and deploying projects.",
        pricing: "freemium",
        icon: "fa-laptop-code",
        url: "tools/replit.html",
        featured: false
    },
    // AI Voice Agents
    {
        id: 30,
        name: "Retell AI",
        category: "favorites",
        description: "Build and deploy AI voice agents for customer service, sales calls, and automated phone interactions.",
        pricing: "paid",
        icon: "fa-phone",
        url: "tools/retell-ai.html",
        featured: true
    },
    // Automation Tools
    {
        id: 31,
        name: "n8n",
        category: "automation",
        description: "Open-source workflow automation tool that connects your apps and services. Build powerful automations with a visual interface and self-hosting options.",
        pricing: "freemium",
        icon: "fa-project-diagram",
        url: "#",
        featured: false
    },
    {
        id: 32,
        name: "Weavy AI",
        category: "favorites",
        description: "AI-powered automation platform that streamlines workflows and integrates intelligent agents into your business processes.",
        pricing: "freemium",
        icon: "fa-cogs",
        url: "tools/weavy-ai.html",
        featured: true
    },
    // Additional Popular AI Tools
    {
        id: 33,
        name: "Gemini",
        category: "favorites",
        description: "Google's advanced AI assistant for conversations, code, creative writing, and multimodal understanding.",
        pricing: "freemium",
        icon: "fa-comments",
        url: "tools/gemini.html",
        featured: true
    },
    {
        id: 34,
        name: "Fathom",
        category: "business",
        description: "AI meeting assistant that records, transcribes, and summarizes meetings with automatic action items. Free forever with 85-90% accuracy.",
        pricing: "freemium",
        icon: "fa-video",
        url: "tools/fathom.html",
        featured: true
    },
    {
        id: 35,
        name: "CapCut",
        category: "video",
        description: "Free all-in-one video editing app with AI-powered features for creating professional content.",
        pricing: "free",
        icon: "fa-cut",
        url: "tools/capcut.html",
        featured: true
    },
    {
        id: 36,
        name: "DeepL",
        category: "business",
        description: "AI-powered translation service that delivers more accurate and natural-sounding translations than competitors.",
        pricing: "freemium",
        icon: "fa-language",
        url: "tools/deepl.html",
        featured: false
    },
    {
        id: 37,
        name: "QuillBot",
        category: "writing",
        description: "AI writing assistant for paraphrasing, grammar checking, and improving your writing style.",
        pricing: "freemium",
        icon: "fa-feather",
        url: "tools/quillbot.html",
        featured: false
    },
    {
        id: 38,
        name: "Otter.ai",
        category: "business",
        description: "AI meeting transcription and note-taking tool that captures and organizes conversations in real-time.",
        pricing: "freemium",
        icon: "fa-microphone-alt",
        url: "tools/otter-ai.html",
        featured: false
    },
    {
        id: 39,
        name: "Lumen5",
        category: "video",
        description: "AI-powered video creation platform that transforms blog posts and content into engaging videos.",
        pricing: "freemium",
        icon: "fa-video",
        url: "tools/lumen5.html",
        featured: false
    },
    {
        id: 40,
        name: "Pictory",
        category: "video",
        description: "Create short, branded videos from long-form content automatically with AI video editing.",
        pricing: "freemium",
        icon: "fa-play-circle",
        url: "tools/pictory.html",
        featured: false
    },
    {
        id: 41,
        name: "Jasper Art",
        category: "image",
        description: "AI image generator integrated with Jasper for creating unique artwork and visuals from text descriptions.",
        pricing: "paid",
        icon: "fa-paint-brush",
        url: "#",
        featured: false
    },
    {
        id: 42,
        name: "Writesonic",
        category: "writing",
        description: "AI writing assistant for creating SEO-optimized content, blog posts, ads, and marketing copy at scale.",
        pricing: "freemium",
        icon: "fa-pen-nib",
        url: "tools/writesonic.html",
        featured: false
    },
    // Trending AI Tools 2025
    {
        id: 43,
        name: "Grok",
        category: "favorites",
        description: "X's AI chatbot with real-time search, image generation, and conversational abilities. Access via X or standalone iOS app.",
        pricing: "freemium",
        icon: "fa-robot",
        url: "tools/grok.html",
        featured: true
    },
    {
        id: 44,
        name: "Meta AI",
        category: "chatbot",
        description: "AI assistant integrated across Facebook, Instagram, WhatsApp, and Messenger with conversation and image generation.",
        pricing: "free",
        icon: "fa-comment-dots",
        url: "#",
        featured: false
    },
    {
        id: 45,
        name: "DeepSeek",
        category: "code",
        description: "Open-source AI model with strong coding and reasoning capabilities, rising competitor in 2025.",
        pricing: "free",
        icon: "fa-code-branch",
        url: "tools/deepseek.html",
        featured: true
    },
    {
        id: 46,
        name: "Imagen 3",
        category: "image",
        description: "Google's AI image generator creating compelling, photorealistic images with advanced prompt understanding.",
        pricing: "freemium",
        icon: "fa-images",
        url: "#",
        featured: false
    },
    {
        id: 47,
        name: "Poe",
        category: "chatbot",
        description: "AI aggregator platform providing access to multiple AI models including GPT-4, Claude, Gemini, and more in one place.",
        pricing: "freemium",
        icon: "fa-layer-group",
        url: "#",
        featured: false
    },
    {
        id: 48,
        name: "HuggingChat",
        category: "chatbot",
        description: "Open-source AI chatbot by Hugging Face, free alternative to ChatGPT with customizable models.",
        pricing: "free",
        icon: "fa-smile",
        url: "#",
        featured: false
    },
    {
        id: 49,
        name: "You.com",
        category: "research",
        description: "AI-powered search engine with chat interface that provides sourced answers and real-time information.",
        pricing: "freemium",
        icon: "fa-globe",
        url: "#",
        featured: false
    },
    {
        id: 50,
        name: "Character.AI",
        category: "chatbot",
        description: "Create and chat with AI characters for entertainment, roleplay, and creative storytelling experiences.",
        pricing: "freemium",
        icon: "fa-user-friends",
        url: "#",
        featured: false
    },
    {
        id: 51,
        name: "Leonardo.AI",
        category: "image",
        description: "AI art generator with fine-tuned models for game assets, concept art, and creative illustrations.",
        pricing: "freemium",
        icon: "fa-dragon",
        url: "#",
        featured: false
    },
    {
        id: 52,
        name: "Codeium",
        category: "code",
        description: "Free AI code completion tool supporting 70+ languages with autocomplete, search, and chat features.",
        pricing: "free",
        icon: "fa-laptop-code",
        url: "#",
        featured: false
    },
    // Marketing AI Tools
    {
        id: 53,
        name: "Semrush",
        category: "marketing",
        description: "All-in-one AI marketing platform for SEO, content marketing, competitor research, PPC campaigns, and analytics.",
        pricing: "paid",
        icon: "fa-chart-bar",
        url: "tools/semrush.html",
        featured: true
    },
    {
        id: 54,
        name: "Hoppy Copy",
        category: "marketing",
        description: "AI email marketing tool for creating engaging campaigns with content converter, editor, and spam checker.",
        pricing: "paid",
        icon: "fa-envelope-open-text",
        url: "#",
        featured: false
    },
    {
        id: 55,
        name: "Sprout Social",
        category: "marketing",
        description: "AI-powered social media management platform for scheduling, analytics, and engagement across all networks.",
        pricing: "paid",
        icon: "fa-share-alt",
        url: "tools/sprout-social.html",
        featured: true
    },
    {
        id: 56,
        name: "Omnisend",
        category: "marketing",
        description: "eCommerce marketing platform with AI-powered email, SMS, and push campaigns for online stores.",
        pricing: "freemium",
        icon: "fa-shopping-bag",
        url: "#",
        featured: false
    },
    {
        id: 57,
        name: "Frase",
        category: "marketing",
        description: "AI SEO content optimization tool for research, writing, and optimizing content that ranks higher.",
        pricing: "paid",
        icon: "fa-search-plus",
        url: "#",
        featured: false
    },
    {
        id: 58,
        name: "AdCreative.ai",
        category: "marketing",
        description: "Generate high-converting ad creatives, banners, and social media posts using AI in seconds.",
        pricing: "paid",
        icon: "fa-ad",
        url: "tools/adcreative-ai.html",
        featured: true
    },
    {
        id: 59,
        name: "Surfer SEO",
        category: "marketing",
        description: "AI content editor and SEO tool for optimizing articles with data-driven insights and recommendations.",
        pricing: "paid",
        icon: "fa-file-alt",
        url: "#",
        featured: false
    },
    {
        id: 60,
        name: "MarketMuse",
        category: "marketing",
        description: "AI content intelligence platform for planning, researching, and optimizing content strategy at scale.",
        pricing: "paid",
        icon: "fa-brain",
        url: "#",
        featured: false
    },
    {
        id: 61,
        name: "Brandwatch",
        category: "marketing",
        description: "AI social listening and analytics platform for monitoring brand mentions, sentiment, and trends.",
        pricing: "paid",
        icon: "fa-eye",
        url: "#",
        featured: false
    },
    {
        id: 62,
        name: "Lately",
        category: "marketing",
        description: "AI social media content generator that transforms long-form content into optimized social posts automatically.",
        pricing: "paid",
        icon: "fa-calendar-alt",
        url: "#",
        featured: false
    },
    {
        id: 63,
        name: "Text Builder",
        category: "writing",
        description: "AI-powered bulk content generator for automated blog posts with images, WordPress integration, and SEO optimization at scale.",
        pricing: "paid",
        icon: "fa-edit",
        url: "https://www.textbuilder.ai/",
        featured: false
    },
    // Email Marketing AI Tools
    {
        id: 64,
        name: "ActiveCampaign",
        category: "email",
        description: "AI-driven email marketing platform with predictive sending, automation recommendations, and personalized campaigns.",
        pricing: "paid",
        icon: "fa-paper-plane",
        url: "tools/activecampaign.html",
        featured: true
    },
    {
        id: 65,
        name: "Brevo",
        category: "email",
        description: "All-in-one marketing platform with AI-powered subject lines, send-time optimization, and multi-channel messaging.",
        pricing: "freemium",
        icon: "fa-envelope-open",
        url: "tools/brevo.html",
        featured: true
    },
    {
        id: 66,
        name: "Beehiiv",
        category: "email",
        description: "AI-powered newsletter platform with content optimization, personalization, and automated workflow tools.",
        pricing: "freemium",
        icon: "fa-newspaper",
        url: "#",
        featured: false
    },
    {
        id: 67,
        name: "Rasa.io",
        category: "email",
        description: "AI-driven newsletter automation that curates personalized content for each subscriber based on interests and behavior.",
        pricing: "paid",
        icon: "fa-rss",
        url: "#",
        featured: false
    },
    {
        id: 68,
        name: "Mailchimp",
        category: "email",
        description: "Popular email marketing platform with AI-powered content creation, subject line optimization, and audience insights.",
        pricing: "freemium",
        icon: "fa-mailchimp",
        url: "tools/mailchimp.html",
        featured: true
    },
    {
        id: 69,
        name: "ConvertKit",
        category: "email",
        description: "Creator-focused email platform with AI automation, landing pages, and advanced segmentation for audience growth.",
        pricing: "freemium",
        icon: "fa-paper-plane",
        url: "#",
        featured: false
    },
    {
        id: 70,
        name: "GetResponse",
        category: "email",
        description: "All-in-one marketing platform with AI email generator, automation builder, and conversion funnel tools.",
        pricing: "freemium",
        icon: "fa-inbox",
        url: "#",
        featured: false
    },
    {
        id: 71,
        name: "Constant Contact",
        category: "email",
        description: "Small business email marketing with AI subject line suggestions, automation, and social media integration.",
        pricing: "paid",
        icon: "fa-envelope-square",
        url: "#",
        featured: false
    },
    {
        id: 72,
        name: "Klaviyo",
        category: "email",
        description: "eCommerce email and SMS platform with AI-powered personalization, predictive analytics, and automated flows.",
        pricing: "freemium",
        icon: "fa-shopping-cart",
        url: "#",
        featured: false
    },
    {
        id: 73,
        name: "Moosend",
        category: "email",
        description: "Email marketing automation with AI subject line optimization, behavior tracking, and conversion analytics.",
        pricing: "freemium",
        icon: "fa-at",
        url: "#",
        featured: false
    },
    {
        id: 74,
        name: "Instantly.ai",
        category: "email",
        description: "Cold email automation platform with unlimited email accounts, 200K+ warmup pool, 450M+ B2B leads database, and AI-powered sequences.",
        pricing: "freemium",
        icon: "fa-paper-plane",
        url: "https://instantly.ai/",
        featured: true
    },
    {
        id: 75,
        name: "EmailBison",
        category: "email",
        description: "White-label email sequencer for agencies with private hosting, dedicated IPs, unlimited workspaces, and enterprise deliverability.",
        pricing: "paid",
        icon: "fa-server",
        url: "https://emailbison.com/",
        featured: false
    },
    {
        id: 76,
        name: "Nano Banana",
        category: "favorites",
        description: "Google's Gemini 2.5 Flash Image - world's top AI image editing model with character consistency, multi-step transformations, and background replacement.",
        pricing: "freemium",
        icon: "fa-images",
        url: "tools/nano-banana.html",
        featured: true
    },
    {
        id: 77,
        name: "Whisk",
        category: "favorites",
        description: "Google's visual-first AI image generator using images as prompts. Create and remix images with Gemini and Imagen 3, plus animate with Veo 2.",
        pricing: "free",
        icon: "fa-paint-brush",
        url: "tools/whisk.html",
        featured: true
    },
    // Vibe Coding & AI Development Tools
    {
        id: 78,
        name: "Windsurf",
        category: "code",
        description: "The first AI agent-powered IDE by Codeium with Cascade AI agent. Features deep contextual understanding and works with 1M+ developers worldwide.",
        pricing: "freemium",
        icon: "fa-wind",
        url: "tools/windsurf.html",
        featured: true
    },
    {
        id: 79,
        name: "Aider",
        category: "code",
        description: "AI pair programming in your terminal. Open-source tool with top SWE Bench scores, supporting Claude, GPT-4, DeepSeek, and local models.",
        pricing: "freemium",
        icon: "fa-terminal",
        url: "tools/aider.html",
        featured: true
    },
    {
        id: 80,
        name: "Bolt.new",
        category: "code",
        description: "AI-powered full-stack web development by StackBlitz. Build and deploy complete apps in your browser with 5M+ users and $40M ARR.",
        pricing: "freemium",
        icon: "fa-bolt",
        url: "tools/bolt-new.html",
        featured: true
    },
    {
        id: 81,
        name: "v0 by Vercel",
        category: "code",
        description: "AI UI generator that converts prompts to production-ready React components with Tailwind CSS and Shadcn UI. Perfect for rapid prototyping.",
        pricing: "freemium",
        icon: "fa-layer-group",
        url: "tools/v0-vercel.html",
        featured: true
    },
    {
        id: 82,
        name: "Lovable",
        category: "code",
        description: "Create apps by chatting with AI. Vibe coding platform for building full-stack web applications through natural conversation with GitHub integration.",
        pricing: "freemium",
        icon: "fa-heart",
        url: "tools/lovable.html",
        featured: true
    },
    {
        id: 83,
        name: "Amazon Q Developer",
        category: "code",
        description: "AWS's AI coding assistant with 37% code acceptance rate. Enterprise-grade features, AWS integration, and up to 80% faster development.",
        pricing: "freemium",
        icon: "fa-aws",
        url: "tools/amazon-q-developer.html",
        featured: true
    }
];

// State Management
let state = {
    currentCategory: 'all',
    currentPricing: 'all',
    currentSort: 'popular',
    displayedTools: 12,
    filteredTools: [...aiTools]
};

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const featuredGrid = document.getElementById('featuredGrid');
const categoryCards = document.querySelectorAll('.category-card');
const pricingFilter = document.getElementById('pricingFilter');
const sortFilter = document.getElementById('sortFilter');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const submitForm = document.getElementById('submitForm');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Notification card
function showNotification(title, message, type) {
    const existing = document.querySelector('.notification-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';

    const icon = type === 'success'
        ? '<i class="fas fa-check-circle"></i>'
        : '<i class="fas fa-exclamation-circle"></i>';

    overlay.innerHTML = `
        <div class="notification-card notification-${type}">
            <div class="notification-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="notification-close">OK</button>
        </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));

    const close = () => {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.remove(), 300);
    };

    overlay.querySelector('.notification-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
}

// Webhook helper
async function sendToWebhook(data) {
    const response = await fetch(CONFIG.WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + CONFIG.WEBHOOK_AUTH_TOKEN
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('Webhook request failed');
    }
    return response;
}

// Initialize App
function init() {
    renderTools();
    renderFeaturedTools();
    attachEventListeners();
    updateResultsCount();
}

// Render Tools
function renderTools() {
    const toolsToDisplay = state.filteredTools.slice(0, state.displayedTools);

    if (toolsToDisplay.length === 0) {
        toolsGrid.style.display = 'none';
        noResults.style.display = 'block';
        loadMoreBtn.style.display = 'none';
        return;
    }

    toolsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    toolsGrid.innerHTML = toolsToDisplay.map(tool => createToolCard(tool)).join('');

    // Show/hide load more button
    if (state.displayedTools >= state.filteredTools.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

// Render Featured Tools
function renderFeaturedTools() {
    const featuredTools = aiTools.filter(tool => tool.featured).slice(0, 6);
    featuredGrid.innerHTML = featuredTools.map(tool => createToolCard(tool)).join('');
}

// Create Tool Card HTML
function createToolCard(tool) {
    const pricingClass = `pricing-${tool.pricing}`;
    const pricingText = tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1);

    // Determine if link is internal (detail page) or external
    const isInternalLink = tool.url.startsWith('tools/');
    const targetAttr = isInternalLink ? '' : 'target="_blank"';

    return `
        <div class="tool-card" data-tool-id="${tool.id}">
            <div class="tool-header">
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <div class="tool-info">
                    <h3 class="tool-name">${tool.name}</h3>
                    <span class="tool-category">${tool.category}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-footer">
                <div class="tool-pricing">
                    <span class="pricing-badge ${pricingClass}">${pricingText}</span>
                </div>
                <a href="${tool.url}" class="tool-link" ${targetAttr}>${isInternalLink ? 'Learn More' : 'Visit Tool'}</a>
            </div>
        </div>
    `;
}

// Filter Tools
function filterTools() {
    let filtered = [...aiTools];

    // Category filter
    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(tool => tool.category === state.currentCategory);
    }

    // Pricing filter
    if (state.currentPricing !== 'all') {
        filtered = filtered.filter(tool => tool.pricing === state.currentPricing);
    }

    // Sort
    switch (state.currentSort) {
        case 'newest':
            filtered.reverse();
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
        default:
            break;
    }

    state.filteredTools = filtered;
    state.displayedTools = 12;
    renderTools();
    updateResultsCount();
}

// Update Results Count
function updateResultsCount() {
    resultsCount.textContent = state.filteredTools.length;
}

// Event Listeners
function attachEventListeners() {
    // Category selection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            state.currentCategory = card.dataset.category;
            filterTools();

            // Smooth scroll to tools section
            document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Pricing filter
    pricingFilter.addEventListener('change', (e) => {
        state.currentPricing = e.target.value;
        filterTools();
    });

    // Sort filter
    sortFilter.addEventListener('change', (e) => {
        state.currentSort = e.target.value;
        filterTools();
    });

    // Load more
    loadMoreBtn.addEventListener('click', () => {
        state.displayedTools += 12;
        renderTools();
    });

    // Submit tool form — sends to webhook
    submitForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = submitForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Submitting...';

        const formData = {
            type: 'tool_submission',
            subject: 'AI Tools Hub consult request',
            name: document.getElementById('toolName').value,
            website: document.getElementById('toolWebsite').value,
            category: document.getElementById('toolCategory').value,
            pricing: document.getElementById('toolPricing').value,
            description: document.getElementById('toolDescription').value
        };

        try {
            await sendToWebhook(formData);
            submitForm.reset();
            showNotification('Tool Submitted!', 'Thank you for submitting your tool. We will review it shortly.', 'success');
        } catch (err) {
            showNotification('Submission Failed', 'Something went wrong. Please try again.', 'error');
            console.error('Webhook error:', err);
        } finally {
            btn.disabled = false;
            btn.textContent = 'Submit Tool';
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 968) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });

    // Handle window resize for mobile menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
}

// Add animation on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.tool-card, .category-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(el);
    });
}

// Header scroll effect — transparent at top, translucent when scrolled
function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    init();
    initHeaderScroll();
    setTimeout(animateOnScroll, 100);
});
