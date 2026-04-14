// Purpose: Configuration PostCSS; active le plugin Tailwind CSS utilise par l'application.
// Exports: objet `config` lu au build pour la transformation CSS.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
