let runs = 0;
let HC1 = 0;
let HC2 = 0;
let TC1 = 0;
let TC1point5 = 0;
let TC2 = 0;
let TC2point5 = 0;
let HC3 = 0;
let HC4 = 0;
let TC3 = 0;
let TC3point5 = 0;
let IMP1 = 0;
let IMP2 = 0;
let TC4 = 0;
let TC4point5 = 0;
let BREAK = 0;
let B1 = 0;
let B1point5 = 0;
let B2 = 0;
let B2point5 = 0;
let RAY1 = 0;
let RAY1point5 = 0;
let RAY2 = 0;
let RAY2point5 = 0;
let RAY3 = 0;
let SLOW1 = 0;
let SLOW2 = 0;
let PENG = 0;
let SWEEP = 0;
let FC1 = 0;
let FC1point5 = 0;
let FC2 = 0;
let FC1point5 = 0;
let FC3 = 0;
let Section = 0;
const SectionName = {
    0: "Hard Chords 1", 1: "Hard Chords 2", 2: "Tricky Chords 1", 3: "Tricky Chords 1.5", 4: "Tricky Chords 2", 5: "Tricky Chords 2.5", 6: "Hard Chords 3", 
  7: "Hard Chords 4", 8: "Tricky Chords 3", 9: "Tricky Chords 3.5", 10: "Impossible 1", 11: "Impossible 2", 12: "Tricky Chords 4", 13: "Tricky Chords 4.5",
  14: "Break", 15: "Blooming 1", 16: "Blooming 1.5", 17: "Blooming 2", 18: "Blooming 2.5", 19: "Rays 1", 20: "Rays 1.5", 21: "Rays 2", 22: "Rays 2.5", 
  23: "Rays 3", 24: "Slow Melody 1", 25: "Slow Melody 2", 26: "Not Penger", 27: "Slow Sweeps", 28: "Final Chords 1", 29: "Final Chords 1.5", 
  30: "Final Chords 2", 31: "Final Chords 2.5", 32: "Final Chords 3", 33: "FC", 34: "N/A"
};
if (key === "Start") {
                StartRun();
}
if (key === "PageDown") {
                nextSect();
}
if (key === "End") {
                EndRun();
}

function StartRun() {
    Section = 1;
    SectionName = 1;
}

function nextSect() {
    Section += 1; 
    SectionName += 1;
}
function EndRun() {
    if (Section >= 0) { HC1 += 1; }
    if (Section >= 1) { HC2 += 1; }
    if (Section >= 2) { TC1 += 1; }
    if (Section >= 3) { TC1point5 += 1; }
    if (Section >= 4) { TC2 += 1; }
    if (Section >= 5) { TC2point5 += 1; }
    if (Section >= 6) { HC3 += 1; }
    if (Section >= 7) { HC4 += 1; }
    if (Section >= 8) { TC3 += 1; }
    if (Section >= 9) { TC3point5 += 1; }
    if (Section >= 10) { IMP1 += 1; }
    if (Section >= 11) { IMP2 += 1; }
    if (Section >= 12) { TC4 += 1; }
    if (Section >= 13) { TC4point5 += 1; }
    if (Section >= 14) { BREAK += 1; }
    if (Section >= 15) { B1 += 1; }
    if (Section >= 16) { B1point5 += 1; }
    if (Section >= 17) { B2 += 1; }
    if (Section >= 18) { B2point5 += 1; }
    if (Section >= 19) { RAY1 += 1; }
    if (Section >= 20) { RAY1point5 += 1; }
    if (Section >= 21) { RAY2 += 1; }
    if (Section >= 22) { RAY2point5 += 1; }
    if (Section >= 23) { RAY3 += 1; }
    if (Section >= 24) { SLOW1 += 1; }
    if (Section >= 25) { SLOW2 += 1; }
    if (Section >= 26) { PENG += 1; }
    if (Section >= 27) { SWEEP += 1; }
    if (Section >= 28) { FC1 += 1; }
    if (Section >= 29) { FC1point5 += 1; }
    if (Section >= 30) { FC2 += 1; }
    if (Section >= 31) { FC2point5 += 1; }
    if (Section >= 32) { FC3 += 1; }
}
