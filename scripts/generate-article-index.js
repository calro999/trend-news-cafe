// scripts/generate-article-index.js
// Node.js スクリプトで JSON 記事ファイルの index.ts を自動生成する

const fs = require("fs");
const path = require("path");

const CATEGORY_DIRS = ["news", "entertainment", "sports", "economy", "column"];
const BASE_PATH = path.join(__dirname, "../app");

CATEGORY_DIRS.forEach((category) => {
  const articlesPath = path.join(BASE_PATH, category, "articles");
  const indexFilePath = path.join(articlesPath, "index.ts");

  if (!fs.existsSync(articlesPath)) {
    console.warn(`❌ Not found: ${articlesPath}`);
    return;
  }

  const files = fs
    .readdirSync(articlesPath)
    .filter((file) => file.endsWith(".json"));

  const imports = files
    .map((file, i) => `import article${i} from "./${file}";`)
    .join("\n");
  const exports =
    "export {\n" +
    files.map((_, i) => `  article${i},`).join("\n") +
    "\n};\n";

  const content = `${imports}\n\n${exports}`;
  fs.writeFileSync(indexFilePath, content);
  console.log(`✅ Updated: ${indexFilePath}`);
});
