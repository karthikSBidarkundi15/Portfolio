# Karthik Bidarkundi — AI/ML Portfolio

A responsive, single-page portfolio featuring AI/ML projects, skills, education, contact links, and a viewable/downloadable resume.

## Run locally

1. Install Node.js (version 20 or newer).
2. From this folder, run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.

## Deploy to Vercel

1. Extract this ZIP and push the contents of `karthik-portfolio` to a GitHub repository.
2. In Vercel, import that GitHub repository.
3. Keep the project root at the repository root. Vercel will use `vercel.json`; the build command is `npm run build` and the output directory is `dist`.

The original resume PDF is in `public/resume.pdf`. Update that file when your resume changes. Portfolio copy and project links are in `src/App.tsx`; page title and search metadata are in `index.html`.
