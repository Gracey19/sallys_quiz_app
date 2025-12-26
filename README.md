# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# THE BEGINNING

# Project description

I built an interactive, German language quiz app that tests beginner German grammar through short conversations and multiple‑choice questions. I used JSON format to load quiz content showing dialogue between two characters, i structured it to give immediate feedback on answers, and display a final score. This README documents what I implemented, the development steps I followed, the bugs I encountered, and how I fixed them.

# Features and tech stack
Features

Dialogue driven quizzes with speaker labels and inline questions.

Immediate correct/incorrect feedback (green for right answer, red for wrong answer).

After completing the questions from a topic you get a total score calculation.

Navigation between pages (Home, Test Yourself, About).

Reusable footer component and circular avatar placeholder (still in the works)

JSON content files for easy authoring of new topics.

# Step 1- Initial layout and data model

Created a JSON structure for each topic with fields: level, topic, context, and dialogue_and_questions.

Structured GutenTag.jsx as my topic page so it renders Guten tag topic content

# Step 2- Fetching quiz content

Decided to fetch the JSON at runtime from public/data/GutenTag.json using fetch("/data/GutenTag.json").

Normalized the response so the app can handle either a single object or an array of quizzes.

# Step 3- Rendering in GutenTag.jsx

Context display: Renders topic and the intro description at the top.

Dialogue loop: Iterates over quiz.dialogue, showing each speaker’s line.

Options rendering: For entries that include options, renders multiple‑choice buttons styled with Tailwind (border and text color #335E40, hover states, etc.).

Click handling: Uses per‑question state (answers keyed by index) so each question gives feedback independently:

Right answer selections turn the chosen button light green.

Wrong answer selections turn it light red.

Buttons disable after first selection to prevent re‑clicking.

Score reveal: When all option‑based questions are answered, shows total score and navigation buttons (Back and Next Topic).

# Step 4- Score handling and bug fix

Problem: Score displayed incorrectly (e.g., 14/7 or 114/7) because I was incrementing a score state value directly and React updates were causing double counts or unexpected values.

Root cause: Manual increments combined with batched state updates and re-renders led to double counting.

Fix: Stop incrementing score imperatively. Instead, store each question’s answer in an answers object and compute the score from that object.

# Step 5- UI polish and layout fixes
Added a circular image illustration in placeholder to make the page more engaging with visuals under the GutenTag topic heading using Tailwind:

jsx
<div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-[#335E40] overflow-hidden">
  <img
            src="/images/illustrations/Guten_Tag.png"
            alt="Illustrations"
            className="w-full h-full object-cover"
          />
</div>

Button spacing: Used Tailwind’s flex layout with space-x-12 to evenly separate the Back and Next Topic buttons.

Consistent styling: Applied px-6 py-2 rounded bg-[#335E40] text-white font-semibold hover:bg-[#264C32] transition-colors for both buttons to ensure uniform look and hover feedback.

Alternative placement: Experimented with justify-between to push buttons to opposite ends and absolute left-8 to anchor the Back button on the far left when needed.

# Step 6- Navigation and routing

Wired React Router routes in App.jsx to handle navigation across pages:

Landing page: / → loads LandingPage.

Navigation pages: /home → HomePage, /test → TestYourself, /a1 → A1Page.

Quiz page: /gutentag → loads the GutenTag component, which fetches and renders quiz content from GutenTag.json.

Placeholder tile: Clicking the Guten Tag tile routes directly to /gutentag, displaying the dialogue and questions.

# Step 7 - Adding Dark Mode and Cleaning up the Design

Dark Mode Toggle: I built a theme switch in App.jsx using useState and useEffect. It works by adding a "dark" class to the very top of the app, which Tailwind uses to switch colors everywhere at once.

To Remember: I used localStorage so the app remembers if the user picked Light or Dark mode, even if they refresh the page or come back later.

Fixing the Backgrounds: I moved the background colors out of the individual pages and put them into one "Main Shell" in App.jsx. This fixed the annoying white "flashes" that happened when switching between pages.

Color Palette Adjustement: I changed the main background from pinkish (#F0E2DF) to a clean white. It looks much more modern, cleaner and makes the texts more visible.

Interactiveness:

I added a "pop" effect to the A1 category cards. Now, when you hover over them, they grow slightly (hover:scale-105), making them feel more like a real deck of cards.

In Dark Mode, I boosted the brightness of the images slightly so they don't look dull against the dark green background.

Quiz Page Updates:

I updated the quiz buttons to use bright green for "Correct" and bright red for "Wrong." These colors pop much better in both light and dark modes.

Faster Navigation: I changed regular links for React Router <Link> tags. This makes moving between pages feel smoother, without the browser having to reload the whole site.