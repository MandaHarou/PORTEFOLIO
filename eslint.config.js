import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended, // Utilise les règles recommandées par JavaScript
  {
    languageOptions: {
      ecmaVersion: "latest", // Permet d'utiliser le JS moderne
      sourceType: "module",  // Indique que tu utilises les modules (import/export)
      globals: {
        ...globals.browser,  // Permet d'utiliser `window`, `document`, etc., sans erreur
        ...globals.node      // Optionnel, mais évite les erreurs sur `process` ou `module`
      }
    },
    rules: {
      // Tu pourras ajouter ou personnaliser tes propres règles ici plus tard
      "no-unused-vars": "warn", // Les variables non utilisées seront de simples alertes (jaunes) au lieu de bloquer le build
    }
  }
];