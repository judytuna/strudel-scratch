// s("[bd <hh oh>]*2").bank("tr909").
let noMoreHiding = arrange([1, "E4 G4 C5 B4"]);
let nowImShining = arrange([1, "D4 F#4 E5 D5"]);
let likeImBornToBe = arrange([1, "B4 D5 A5 <F#5 G5>*2"]);

let chorus1 = arrange(
  [1, noMoreHiding],
  [1, nowImShining],
  [1, likeImBornToBe],
  [1, "[- - - -]"]
).note().sound("piano");

let bass = arrange(
  [1, "<E3>*1"],
  [1, "<F#3>*1"],
  [1, "<D3>*1"],
  [1, "<E3>*1"]
).note().sound("piano");

let tenor = arrange(
  [1, "<G3>*1"],
  [1, "<A3>*1"],
  [1, "<F#3>*1"],
  [1, "<G3>*1"]
).note().sound("piano");

stack(chorus1, bass, tenor);

// charli xcx 360 example
// // section 1: intro
// let lead_synth = arrange(
//   [3, "<[[e3,b3] - c4 -] [e3 - f3 c4] [- c4 a4 -] [- - - -]>*4"],
//   [1, "<[- - [g3,b3] -] [g3 - a3 c4] [- c4 c5 -] [c4 - g4 -]>*4"]
// )
//   .note().sound("sawtooth")
//   .attack(0).decay(.25).sustain(0).release(.3)
//   .lpf(300).lpq(0).lpenv(3).lpa(0).lpd(.15).lps(0)
//   .delay(.2).delaytime(.25).delayfeedback(.1);

// let chorus = arrange(
//   [1, noMoreHiding],
//   [1, nowImShining],
//   [1, likeImBornToBe]
// );

// arrange([1, chorus]);



// samples({
// bassdrum: 'bd/BT0AADA.wav',
// hihat: 'hh27/000_hh27closedhh.wav',
// snaredrum: ['sd/rytm-01-classic.wav', 'sd/rytm-00-hard.wav'],
// }, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');

// s("bassdrum snaredrum:0 bassdrum snaredrum:1, hihat*16")
// setcpm(60)
// samples({
// 'moog': {
//   'g2': 'moog/004_Mighty%20Moog%20G2.wav',
//   'g3': 'moog/005_Mighty%20Moog%20G3.wav',
//   'g4': 'moog/006_Mighty%20Moog%20G4.wav',
// }}, 'github:tidalcycles/dirt-samples')

// note("g2!2 <bb2 c3>!2, <c4@3 [<eb4 bb3> g4 f4]>")
// .s('moog').clip(1)
// .gain(.5)
