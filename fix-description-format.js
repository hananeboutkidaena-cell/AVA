// filepath: c:\Users\user\Desktop\react-portfolio\fix-description-format.js
const fs = require("fs");
const p = "src/Portfolio.jsx";
let s = fs.readFileSync(p, "utf8");

// 1) Add formatter helper once
if (!s.includes("const renderProjectDescription = (text) => {")) {
  const helper = `const renderProjectDescription = (text) => {
  const blocks = text.split("\\n\\n").map(b => b.trim()).filter(Boolean);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\\n").map(l => l.trim()).filter(Boolean);
    const allMeta = lines.every(line => line.includes(":"));

    if (allMeta) {
      return (
        <ul key={\`meta-\${blockIndex}\`} className="project-description-list">
          {lines.map((line, i) => {
            const idx = line.indexOf(":");
            const label = line.slice(0, idx + 1);
            const value = line.slice(idx + 1).trim();
            return (
              <li key={i}>
                <strong>{label}</strong> {value}
              </li>
            );
          })}
        </ul>
      );
    }

    return <p key={\`p-\${blockIndex}\`}>{block}</p>;
  });
};

`;
  s = s.replace("// ============= PROJECT DETAIL =============", helper + "// ============= PROJECT DETAIL =============");
}

// 2) Use helper in ProjectDetail (replace plain paragraph)
s = s.replace(
`            <div className="project-description">
              <p>{project.descriptionLongue}</p>
            </div>`,
`            <div className="project-description">
              {renderProjectDescription(project.descriptionLongue)}
            </div>`
);

// 3) Add CSS once
if (!s.includes(".project-description-list {")) {
  s = s.replace(
`              .project-description p strong {
                font-family: var(--font-display);
                font-weight: 600;
                font-size: 1.05rem;
              }`,
`              .project-description p strong {
                font-family: var(--font-display);
                font-weight: 600;
                font-size: 1.05rem;
              }

              .project-description-list {
                margin: 0 0 1rem 1.2rem;
                padding: 0;
              }

              .project-description-list li {
                list-style: disc;
                margin-bottom: 0.35rem;
                font-family: var(--font-display);
                font-size: 1.05rem;
                line-height: 1.7;
              }

              .project-description-list strong {
                font-weight: 600;
              }`
  );
}

fs.writeFileSync(p, s, "utf8");
console.log("✅ bullets + bold restored in project descriptions");
