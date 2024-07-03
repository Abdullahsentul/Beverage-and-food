let recipe;
function reqListener() {
  recipe = this.response;
  let i = 0; 
  while(i < recipe.length) {
    recipe[i].image = loadImage(recipe[i].Picture);
    i = i + 1;
  }
}

function preload() {
  let req = new XMLHttpRequest();
  req.addEventListener("load" , reqListener);
  req.open("GET" , " /pseudoserver/")
  req.responseType="json";
  req.send();
}

function setup() {
  createCanvas(1000, 20000);
  console.log(recipe);
  let i = 0; 
  while( i < recipe.length ) {
    textAlign(CENTER, CENTER);
    textSize(20);

    image(recipe[i].image, 700, i * 1725, 198, 200, 0, 0, 0, 0, CONTAIN);
    
    
    fill(12, 145, 100);
    text(recipe[i].title, 100, 73 + i * 1725);
    console.log(recipe[i].title, 100, 73 + i * 1725);
    text(recipe[i].tentacles,300, 73 + i * 1725);

    fill(216, 27, 27,);
    text(recipe[i].Name1, 100, 198 + i * 1725);
    text(recipe[i].Costing1, 300, 198 + i * 1725);
    text(recipe[i].Measurement1, 500, 198 + i * 1725);

    text(recipe[i].Name2, 100, 323 + i * 1725);
    text(recipe[i].Costing2, 300, 323 + i * 1725);
    text(recipe[i].Measurement2, 500, 323 + i * 1725);

    text(recipe[i].Name3, 100, 448 + i * 1725);
    text(recipe[i].Costing3, 300, 448 + i * 1725);
    text(recipe[i].Measurement3, 500, 448 + i * 1725);

    text(recipe[i].Name4, 100, 573 + i * 1725);
    text(recipe[i].Costing4, 300, 573 + i * 1725);
    text(recipe[i].Measurement4, 500, 573 + i * 1725);

    text(recipe[i].Name5, 100, 698 +  i * 1725);
    text(recipe[i].Costing5, 300, 698 + i * 1725);
    text(recipe[i].Measurement5, 500, 698 + i * 1725);

    text(recipe[i].Name6, 100, 823 + i * 1725);
    text(recipe[i].Costing6, 300, 823 + i * 1725);
    text(recipe[i].Measurement6, 500, 823 + i * 1725);

    text(recipe[i].Name7, 100, 948 + i * 1725);
    text(recipe[i].Costing7, 300, 948 + i * 1725);
    text(recipe[i].Measurement7, 500, 948 + i * 1725);

    text(recipe[i].Name8, 100, 1073 + i * 1725);
    text(recipe[i].Costing8, 300, 1073 + i * 1725);
    text(recipe[i].Measurement8, 500, 1073 + i * 1725);

    text(recipe[i].Name9, 100, 1198 + i * 1725);
    text(recipe[i].Costing9, 300, 1198 + i * 1725);
    text(recipe[i].Measurement9, 500, 1198 + i * 1725);

    text(recipe[i].Name10, 100, 1323 + i * 1725);
    text(recipe[i].Costing10, 300, 1323 + i * 1725);
    text(recipe[i].Measurement10, 500, 1323 + i * 1725);

    text(recipe[i].Name11, 100, 1448 + i * 1725);
    text(recipe[i].Costing11, 300, 1448 + i * 1725);
    text(recipe[i].Measurement11, 500, 1448 + i * 1725);

    text(recipe[i].Name12, 100, 1573 + i * 1725);
    text(recipe[i].Costing12, 300, 1573 + i * 1725);
    text(recipe[i].Measurement12, 500, 1573 + i * 1725);

    stroke ('magenta');
    strokeWeight(1);
    line(0, 135 + i * 1725, 0, 1625 + i * 1725);
    line(200, 135 + i * 1725, 200, 1625 + i * 1725);
    line(400, 135 + i * 1725, 400, 1625 + i * 1725);
    line(600, 135 + i * 1725, 600, 1625 + i * 1725);
    
    line(0, 135 + i * 1725, 600, 135 + i * 1725);
    line(0, 260 + i * 1725, 600, 260 + i * 1725);
    line(0, 385 + i * 1725, 600, 385 + i * 1725);
    line(0, 510 + i * 1725, 600, 510 + i * 1725);
    line(0, 635 + i * 1725, 600, 635 + i * 1725);
    line(0, 760 + i * 1725, 600, 760 + i * 1725);
    line(0, 885 + i * 1725, 600, 885 + i * 1725);
    line(0, 1000 + i * 1725, 600, 1000 + i * 1725);
    line(0, 1125 + i * 1725, 600, 1125 + i * 1725);
    line(0, 1250 + i * 1725, 600, 1250 + i * 1725);
    line(0, 1375 + i * 1725, 600, 1375 + i * 1725);
    line(0, 1500 + i * 1725, 600, 1500 + i * 1725);
    line(0, 1625 + i * 1725, 600, 1625 + i * 1725);
    noStroke();
    i = i + 1;     
  }    
}


