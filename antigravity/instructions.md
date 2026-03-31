🧠 Project Instructions
🎯 Objective

Build a multimedia tourist guide web application for Costa Rica using only native web technologies.

The application should allow users to explore destinations through an interactive experience that includes:

Images
Audio
Video
Dynamically loaded data
⚙️ Tech Constraints (Strict)

Use ONLY:

HTML5
CSS3
JavaScript (ES6+)
Native Web Components:
Custom Elements
Shadow DOM
HTML Templates
ES Modules

Do NOT use:

Frameworks (React, Vue, Angular, etc.)
External UI libraries
CSS frameworks (Tailwind, Bootstrap, etc.)
🧩 Core Architecture

The application must be built using reusable Web Components.

General expectations:

Components must encapsulate their styles using Shadow DOM
Components must communicate using Custom Events
The UI must be modular and component-based
Navigation between views must be handled within the app
📁 Required Project Structure

Maintain this structure:

proyecto-guia-turistica/
├── index.html
├── data/
│   └── destinos.json
├── components/
├── assets/
│   ├── img/
│   ├── audio/
│   └── video/
├── css/
│   └── global.css
└── docs/
📦 Data Management
All destination data must come from a JSON file
Do NOT hardcode destinations in HTML
Load data dynamically using fetch()
Required JSON structure:
{
  "id": "string",
  "nombre": "string",
  "region": "string",
  "descripcion": "string",
  "imagen_portada": "string",
  "galeria": ["string"],
  "audio": "string",
  "video": "string",
  "actividades": ["string"],
  "lat": number,
  "lng": number
}
🌎 Content Requirements
Include multiple regions of Costa Rica
Each region must contain multiple destinations
Each destination must include:
Cover image
Image gallery
Audio guide
(Optional) Video
🎨 UI / UX Expectations
Clean and modern interface
Consistent visual design (colors, spacing, typography)
Responsive design (desktop + mobile)
Intuitive navigation (no instructions needed)
🎬 Multimedia Integration

Each destination should integrate multimedia in a meaningful way:

Images → galleries or previews
Audio → guided narration or description
Video → optional but recommended

Use native HTML elements:

<img>
<audio>
<video>
🔄 Behavior & Interaction
UI must be interactive and dynamic
Use JavaScript for:
Rendering components
Handling events
Updating views
Use Custom Events for communication between components
📌 Key Rules
Do NOT hardcode UI content that belongs in JSON
Do NOT break component encapsulation
Keep code modular and reusable
Keep logic separated from presentation
Prefer composition over duplication
🧠 Goal

The final result should feel like a modern interactive multimedia experience, not a static website.

Focus on:

Component-based architecture
Dynamic data rendering
Clean and maintainable code
Smooth user experience