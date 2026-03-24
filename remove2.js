const fs = require("fs");
const p = "src/Portfolio.jsx";
let s = fs.readFileSync(p, "utf8");

// 1) Remove second video imports
s = s.replace("import visualisations2Poster from './assets/video/visualisations-2-poster.jpg';\n", "");
s = s.replace("import output2Mp4 from './assets/video/output2.mp4';\n", "");

// 2) Remove second video JSX block
s = s.replace(`
      
      <div className="visualisations-video-wrap second">
        <video
          className="visualisations-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={visualisations2Poster}
        >
          <source src={output2Mp4} type="video/mp4" />
        </video>
      </div>

      `, `
      `);

// 3) Remove duplicate CSS block (second one)
const rule = `              /* ===== 3D & VISUALISATIONS SECTION ===== */
              .visualisations-section {
                padding: 6rem 0;
                background: #fff;
              }`;
const first = s.indexOf(rule);
const second = s.indexOf(rule, first + 1);
if (second !== -1) s = s.slice(0, second) + s.slice(second + rule.length);

// 4) Remove second video CSS rule
s = s.replace(`
              .visualisations-video-wrap.second .visualisations-video {
                max-width: 1430px;
              }`, "");

fs.writeFileSync(p, s, "utf8");
console.log("Done");
