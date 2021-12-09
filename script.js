const canvas = document.getElementById('canvas-to-draw');
canvas.height = (this.innerHeight - 50);
canvas.width = (this.innerWidth - 200);
const ctx = canvas.getContext('2d');

// //testing
// ctx.fillStyle = 'green';
// ctx.fillRect(5, 5, 150, 100);
let isDrawing = false;

canvas.addEventListener('mousedown',(e) =>
{
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mousemove', (e) =>{
   if(isDrawing === true){
   draw(ctx,x,y,e.offsetX,e.offsetY);
   x = e.offsetX;
   y = e.offsetY;
   }
});

this.addEventListener('mouseup', (e) =>
{
  if(isDrawing === true)
  {
    draw(ctx,x,y,e.offsetX,e.offsetY);
      x = 0
      y = 0; 
      isDrawing = false;
  }
});

function draw(context, x1, y1 , x2 , y2) 
{
    context.beginPath();
    // context.strokeStyle = 'black';
    // context.lineWidth = 5;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath(); 
}


const btn1 = document.getElementById('switch');
const nav = document.getElementById('nav');

btn1.addEventListener('click',() => nav.classList.toggle('active'))

let colorIndicator = document.getElementById('color-indicator');
const color_picker = new iro.ColorPicker('#color-picker', {
  width :180,color:"#f00"
});

color_picker.on('color:change', function(color){
  colorIndicator.style.backgroundColor = color.hexString
   ctx.strokeStyle = color.hexString;
});

let Select = document.getElementById("line-width");
// let choose;

// for (let i = 0 ; i < Select.length ; i++)
// {
//   choose = Select[i];
//   if (choose.selected)
//   {
//     alert(choose.value)
//   }
// }

Select.addEventListener('change', (e) =>{
    ctx.lineWidth =Select.options[Select.selectedIndex].value;
});

let clear = document.getElementById('clear');

clear.addEventListener('click',() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// function download(){
//   document.getElementById("downloader").download = "image.png";
//   document.getElementById("downloader").href = document.getElementById("canvas").
//                  toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
// }

let saveBtn = document.getElementById('save')
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})
