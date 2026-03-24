// filepath: c:\Users\user\Desktop\react-portfolio\remove-second-video.js
const fs = require("fs");
const p = "src/Portfolio.jsx";
let s = fs.readFileSync(p, "utf8");

// 1) remove imports
s = s.replace(/^import visualisations2Poster from .*?\r?\n/m, "");
s = s.replace(/^import output2Mp4 from .*?\r?\n/m, "");

// 2) remove second video JSX block
s = s.replace(
  /\n\s*<div className="visualisations-video-wrap second">[\s\S]*?<\/div>\s*\n\s*\n\s*<\/section>/m,
  "\n\n      </section>"
);

// 3) remove second-video css rule
s = s.replace(
  /\n\s*\.visualisations-video-wrap\.second \.visualisations-video \{[\s\S]*?\}\s*/m,
  "\n"
);

fs.writeFileSync(p, s, "utf8");
console.log("done");
