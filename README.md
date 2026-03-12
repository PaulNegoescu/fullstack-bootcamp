# Fullstack Bootcamp

A beginner-friendly repository for learning and experimenting with HTML, CSS, and JavaScript. This project provides a simple setup to get started with web development fundamentals. It was set up using vite and its built in Vanilla Typescript template.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fullstack-bootcamp.git
   cd fullstack-bootcamp
   ```

2. **Set up pnpm (optional, but recommended):**
   ```bash
   # Install pnpm globally
   npm install -g pnpm
   # or using other package managers
   # macOS/Linux: curl -fsSL https://get.pnpm.io/install.sh | sh -
   # Windows Powershell: iwr https://get.pnpm.io/install.ps1 -useb | iex
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   # or if you prefer npm: npm install
   ```

4. **Start the development server:**
   ```bash
   pnpm run dev
   # or if you prefer npm: npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Project Structure

```
fullstack-bootcamp/
├── .git/                   # Git repository data
├── .gitignore              # Files and folders to ignore in Git
├── .vscode/                # VS Code configuration files
│   ├── extensions.json     # Recommended VS Code extensions
│   └── settings.json       # Workspace-specific VS Code settings
├── index.html              # Main HTML file (entry point)
├── package.json            # Node.js project configuration and dependencies
├── public/                 # Static assets served directly
│   └── vite.svg            # Vite logo (example static asset)
├── src/                    # Source code directory
└── tsconfig.json           # TypeScript configuration (if using TypeScript)
```

## File and Folder Descriptions

- **`.git/`**: Contains Git version control data. This folder is automatically created when you initialize a Git repository.

- **`.gitignore`**: Specifies files and folders that Git should ignore (not track). Common entries include `node_modules/`, build outputs, and temporary files.

- **`.vscode/`**: Contains Visual Studio Code configuration files:
  - `extensions.json`: Lists recommended extensions for this project (e.g., HTML, CSS, JavaScript support)
  - `settings.json`: Defines workspace-specific settings like formatting preferences, linting rules, and editor behavior

- **`index.html`**: The main HTML file that serves as the entry point for your web application. This is where your web page structure begins.

- **`package.json`**: Defines your Node.js project, including dependencies, scripts, and metadata. It specifies what packages are needed and how to run the project.

- **`public/`**: Directory for static assets that are served directly by the web server. Files here are accessible at the root URL of your application.

- **`src/`**: Contains your source code files (HTML, CSS, JavaScript, TypeScript, etc.). This is where you'll write your application logic.

- **`tsconfig.json`**: Configuration file for TypeScript compilation settings, including compiler options and file inclusions.

## Getting Started

This repository is designed for beginners to practice HTML, CSS, and JavaScript. Start by:

1. Opening `index.html` in your browser or editor
2. Modifying the HTML structure in `index.html`
3. Adding styles in CSS files within the `src/` directory
4. Writing JavaScript logic in JS files within the `src/` directory

Experiment freely and use this as a sandbox for learning web development fundamentals!

## Technologies Used

- **HTML5**: For structuring web content
- **CSS3**: For styling and layout
- **JavaScript**: For interactivity and dynamic behavior
- **Vite**: For fast development and building
- **TypeScript** (optional): For type-safe JavaScript development
