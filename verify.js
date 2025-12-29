const fs = require("fs");
const path = require("path");

// Liste des fichiers à vérifier
const requiredFiles = [
  "app/layout.tsx",
  "app/globals.css",
  "app/components/Navbar.tsx",
  "app/components/Footer.tsx",
  "app/components/Hero.tsx",
  "app/components/FlagSelector.tsx",
  "app/components/AgentCard.tsx",
  "app/components/ProductCard.tsx",
  "app/components/ServiceCard.tsx",
  "app/components/CTASection.tsx",
  "app/components/SEO.tsx",
  "hooks/useLang.ts",
  "hooks/useTheme.ts",
  "hooks/useResponsive.ts"
];

console.log("=== Vérification des fichiers du projet Deep_of_Fish ===\n");

requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ Présent: ${file}`);
  } else {
    console.log(`❌ Manquant: ${file}`);
  }
});

console.log("\n=== Vérification terminée ===");
