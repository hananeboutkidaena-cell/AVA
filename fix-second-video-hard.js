// filepath: c:\Users\user\Desktop\react-portfolio\fix-second-video-hard.js
const fs = require("fs");
const p = "src/Portfolio.jsx";
let s = fs.readFileSync(p, "utf8");

// 1) remove second video imports
s = s.replace(/^import visualisations2Poster from .*;\r?\n/m, "");
s = s.replace(/^import output2Mp4 from .*;\r?\n/m, "");

// 2) replace whole Visualisations3DSection with single-video version
const sectionRegex = /const Visualisations3DSection = \(\) => \{[\s\S]*?\n\};\n\/\/ ============= CONTACT SECTION =============/m;
const sectionReplacement = `const Visualisations3DSection = () => {
  return (
    <section className="visualisations-section" id="visualisations-3d">
      <div className="container">
        <h2 className="section-title section-title--filters">3D & Visualisations</h2>
      </div>

      <div className="visualisations-video-wrap first">
        <video
          className="visualisations-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={visualisationsPoster}
        >
          <source src={visualisationsMp4} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
// ============= CONTACT SECTION =============`;

if (!sectionRegex.test(s)) {
  console.error("Visualisations3DSection block not found.");
  process.exit(1);
}
s = s.replace(sectionRegex, sectionReplacement);

// 3) remove CSS rule for second video if present
s = s.replace(/\n\s*\.visualisations-video-wrap\.second \.visualisations-video \{[\s\S]*?\}\s*/m, "\n");

fs.writeFileSync(p, s, "utf8");
console.log("✅ second video removed cleanly");
