document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let selectedColor = "#000000"; // Default color
  
    // Set canvas width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }
  
    function stopDrawing() {
      isDrawing = false;
      ctx.beginPath();
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = selectedColor;
  
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  
    // Event listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  
    // Color picker
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.addEventListener("input", function(e) {
      selectedColor = e.target.value;
    });
  
    // Append color picker to the body
    document.body.appendChild(colorPicker);
  });
  