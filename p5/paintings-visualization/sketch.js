let data;
const all_painters = ['Vincent_van_Gogh', 'Edgar_Degas', 'Pablo_Picasso',
                      'Pierre-Auguste_Renoir', 'Paul_Gauguin', 'Francisco_Goya', 'Rembrandt', 'Alfred_Sisley',
                      'Titian', 'Rene_Magritte','Amedeo_Modigliani', 'Paul_Klee',
                      'Henri_Matisse', 'Mikhail_Vrubel', 'Sandro_Botticelli', 'Salvador_Dali',
                      'Kazimir_Malevich', 'Frida_Kahlo', 'Gustav_Klimt', 'Joan_Miro', 'Camille_Pissarro',
                      'Edouard_Manet', 'Vasiliy_Kandinskiy', 'Piet_Mondrian', 'Claude_Monet']
      
let vincent_data = [];
let edgar_data = [];
let pablo_data = []
let pierre_data = []
let paul_data = []
let rembrandt_data = []
let alfred_data = []
let titian_data = []
let rene_data = []
let amedeo_data = []
let klee_data = []
let henri_data = []
let mikhail_data = []
let sandro_data = []
let salvador_data = []
let kazimir_data = []
let frida_data = []
let gustav_data = []
let joan_data = []
let camille_data = []
let manet_data = []
let vasiliy_data = []
let piet_data = []
let claude_data = []
let goya_data = []

// let all_csv = [vincent_data, edgar_data, pablo_data, pierre_data, paul_data, rembrandt_data, alfred_data, titian_data, rene_data,
//               amedeo_data, klee_data,henri_data, mikhail_data, sandro_data, salvador_data, kazimir_data, frida_data, gustav_data,
//               joan_data, camille_data, manet_data, vasiliy_data, piet_data, claude_data, goya_data]
let all_csv = []
let all_entries = []

var r;		//radius
var angle; 
var step;  //distance between steps in radians

function hexToRgb(hex) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return color(r, g, b);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  // data = loadTable('assets/Vincent_van_Gogh_Colors.csv', 'csv', 'header');
  vincent_data = loadTable('assets/Vincent_van_Gogh_Colors.csv', 'csv', 'header');
  edgar_data = loadTable('assets/Edgar_Degas_Colors.csv', 'csv', 'header');
  pablo_data = loadTable('assets/Pablo_Picasso_Colors.csv', 'csv', 'header');
  pierre_data = loadTable('assets/Pierre-Auguste_Renoir_Colors.csv', 'csv', 'header');
  paul_data = loadTable('assets/Paul_Gauguin_Colors.csv', 'csv', 'header');
  rembrandt_data = loadTable('assets/Rembrandt_Colors.csv', 'csv', 'header');
  alfred_data = loadTable('assets/Alfred_Sisley_Colors.csv', 'csv', 'header');
  titian_data = loadTable('assets/Titian_Colors.csv', 'csv', 'header');
  rene_data = loadTable('assets/Rene_Magritte_Colors.csv', 'csv', 'header');
  amedeo_data = loadTable('assets/Amedeo_Modigliani_Colors.csv', 'csv', 'header');
  klee_data = loadTable('assets/Paul_Klee_Colors.csv', 'csv', 'header');
  henri_data = loadTable('assets/Henri_Matisse_Colors.csv', 'csv', 'header');
  mikhail_data = loadTable('assets/Mikhail_Vrubel_Colors.csv', 'csv', 'header');
  sandro_data = loadTable('assets/Sandro_Botticelli_Colors.csv', 'csv', 'header');
  salvador_data = loadTable('assets/Salvador_Dali_Colors.csv', 'csv', 'header');
  kazimir_data = loadTable('assets/Kazimir_Malevich_Colors.csv', 'csv', 'header');
  frida_data = loadTable('assets/Frida_Kahlo_Colors.csv', 'csv', 'header');
  gustav_data = loadTable('assets/Gustav_Klimt_Colors.csv', 'csv', 'header');
  joan_data = loadTable('assets/Joan_Miro_Colors.csv', 'csv', 'header');
  camille_data = loadTable('assets/Camille_Pissarro_Colors.csv', 'csv', 'header');
  manet_data = loadTable('assets/Edouard_Manet_Colors.csv', 'csv', 'header');
  vasiliy_data = loadTable('assets/Vasiliy_Kandinskiy_Colors.csv', 'csv', 'header');
  piet_data = loadTable('assets/Piet_Mondrian_Colors.csv', 'csv', 'header');
  claude_data = loadTable('assets/Claude_Monet_Colors.csv', 'csv', 'header');
  goya_data = loadTable('assets/Francisco_Goya_Colors.csv', 'csv', 'header');
  
  all_entries = loadTable('assets/combined_csv.csv', 'csv', 'header');
  all_csv = [vincent_data, edgar_data, pablo_data, pierre_data, paul_data, goya_data, rembrandt_data, alfred_data, titian_data, rene_data,
    amedeo_data, klee_data,henri_data, mikhail_data, sandro_data, salvador_data, kazimir_data, frida_data, gustav_data,
    joan_data, camille_data, manet_data, vasiliy_data, piet_data, claude_data]
}

function setup() {
  // console.log("Vincent: ", vincent_data.getRowCount());
  // put setup code here
  // createCanvas(7016, 4961);
  // createCanvas(4961, 7016, SVG); // Create SVG Canvas
  createCanvas(4961, 7016, SVG);
  background('#ffffff');

  console.log(all_painters.length);

  //initialize variables
  // r     = 100;
  // angle = 0;
  // step  = TWO_PI/6; //in radians equivalent of 360/6 in degrees

  // while (angle < 360) {
  //convert polar coordinates to cartesian coordinates
  // var x = r * sin(angle);
  // var y = r * cos(angle);

  //   //draw ellipse at every x,y point
  //   circle(x, y, 30);

  //   //increase angle by step size
  //   angle = angle + step;
  // }

  // one instance
  // if (vincent_data) {
  //   r = vincent_data.getRowCount() * 3.5; // depending on the amount of paintings
  //   step = TWO_PI/vincent_data.getRowCount();
  //   let index = 0;

  //   while (index < vincent_data.getRowCount()) {
  //     // get row contents
  //     let top_color = vincent_data.getString(index, 2)
  //     // console.log(top_color);
  //     let size = vincent_data.getString(index, 5)/18000;

  //     // placement
  //     var x = r * sin(angle);
  //     var y = r * cos(angle);
  //     fill(top_color);
  //     circle(x, y, size); //(x,y, diameter)

  //     angle = angle + step;
  //     index = index + 1;
  //   }  
  // }
  //move 0,0 to the center of the screen
  // translate(width/2, height/2);
  // fill('#555555');
  // circle(width/2, height/2, 100);
  // shift everything to the middle
  translate(width/2, height/2.8);
  noStroke();
  let prev_angle = 0;
  r = all_csv[0].getRowCount() * 2.3;
  let r_diff = r / 25;
  angle = 0;
  // console.log(r, r_diff);
  // let cur_r = r;

  // console.log("len: ", all_painters.length)
  // all of them
  for (var artist = 0; artist < all_painters.length; artist++) { 
    // prev_angle = 0; //reset prev_angle
    // const painter_name = all_painters[artist];
    // console.log(painter_name);
    const cur_data = all_csv[artist];
    if (cur_data) {
      //move 0,0 to the center of the screen
      // console.log(cur_data);
      // r = cur_data.getRowCount() * 2.2;
      // console.log(all_painters[artist], ": ", r)
      step = TWO_PI/cur_data.getRowCount();
      let index = 0;

      // draw axis circle
      strokeWeight(5);
      noFill();
      stroke(255, 255, 255, 150);
      circle(0, 0, r*2);
      // let line_index = 0;

      while (index < cur_data.getRowCount()) {
        // console.log("hello")
        // console.log("prev angle: ", prev_angle);
        // console.log("angle: ", angle);
        let top_color = cur_data.getString(index, 2)
        const rgba = hexToRgb(top_color)
        // console.log(rgba);
        let size = cur_data.getString(index, 5)/11000;

        // placement
        var x = r * sin(angle);
        var y = r * cos(angle);
        // console.log(x,y)
        // if (line_index === artist*5) {
        //   strokeWeight(5);
        //   setLineDash([10, 20]);
        //   stroke('#ffffff');
        //   line(0, 0, x, y);
        // }
        // blendMode(DARKEST);
        noStroke();
        fill(rgba['levels'][0], rgba['levels'][1], rgba['levels'][2], 170);
        circle(x, y, size); //(x,y, diameter)
        // noFill();
        // strokeWeight(5);
        // stroke(rgba['levels'][0], rgba['levels'][1], rgba['levels'][2]);
        // arc(0, 0, r*2, r*2, prev_angle, angle);

        angle = angle + step;
        // prev_angle = angle;
        index = index + 1;
        // line_index = line_index + 1;
      }  
      r = r - r_diff
    }

    //add number of paintings
    // const cur_data = all_csv[0];
    let radius = all_csv[0].getRowCount() * 2.2 * 2
    let section = radius / 8;
    while (radius > 0) {
      strokeWeight(3);
      noFill();
      stroke(255, 255, 255, 3);
      circle(0,0, radius);
      radius = radius - section;
    }

    // timeline at the bottom
    const timeline_length = all_csv[0].getRowCount() * 2.2;
    strokeWeight(3);
    stroke('#ffffff');
    line(0 - timeline_length/2, 3700, timeline_length/2, 3700)

    let step_line = all_csv[0].getRowCount() * 2.2 / 11;
    let cur = 0 - timeline_length/2;
    while (cur <= timeline_length/2) {
      // draw line
      strokeWeight(2);
      stroke('#ffffff');
      line(cur, 3680, cur, 3730);
      cur = cur + step_line;
    }

  }
  // put drawing code here
  // rect(10,20,30,40);
  // let x = 50;
  // let y = 50;
  // noStroke();

  // if (all_entries) {
  //   let painter = ""
  //   for (let r = 0; r < 10; r++){
  //     let cur_painter = all_entries.getString(r, 0)
  //     if (cur_painter !== painter) {
  //       // reset position
  //       x = 50;
  //       y = y + 100;
  //       painter = cur_painter
  //     }
  //     for (let c = 0; c < all_entries.getColumnCount(); c++) {
  //       let top_color = all_entries.getString(r, 2)
  //       let size = all_entries.getString(r, 5)/10000;
  //       // console.log("size: ", size);
  //       fill(top_color);
  //       circle(x, y, size); //(x,y, diameter)
  //       x = x + 150;
  //     }
  //   }
}

function draw() {
  
}

function mouseReleased() {
  save();
}