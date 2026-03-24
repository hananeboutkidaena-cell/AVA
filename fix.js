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

      `, "\n      ");

// 3) Remove duplicate visualisations CSS block (first one)
s = s.replace(`                                                        /* ===== 3D & VISUALISATIONS SECTION ===== */
              .visualisations-section {
                padding: 6rem 0;
                background: #fff;
              }
              `, "");

// 4) Remove second video CSS rule
s = s.replace(`
              .visualisations-video-wrap.second .visualisations-video {
                max-width: 1430px;
              }
`, "\n");

fs.writeFileSync(p, s, "utf8");
const check = s.includes("output2Mp4") ? "❌ still present" : "✅ removed";
console.log("Second video: " + check);
