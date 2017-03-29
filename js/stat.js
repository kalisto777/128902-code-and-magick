'use strict';

window.renderStatistics = function(ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeRect (110, 20, 420, 270);
	ctx.fillRect (110, 20, 420, 270);

	ctx.fillStyle = 'white';
	ctx.strokeRect (100, 10, 420, 270);
	ctx.fillRect (100, 10, 420, 270);

	ctx.fillStyle = '#000';
	ctx.font = '14px PT Mono';
	ctx.fillText ('Ура, вы победили!', 120, 40);
	ctx.fillText ('Список результатов:', 120, 60);

	var max = -1;
	var maxIndex = -1;

  	for(var i = 0 ; i < times.length; i++) {
    	var time = times[i];
    	if (time > max) {
      	max = time;
      	maxIndex = i;
    }
  }
  	var histogramHeight = 150;
  	var step = histogramHeight / (max);
  
    var barWidth = 40; // px; 
    var indent = 50;    // px;
    var initialX = 150; // px;
    var initialY = 240;  // px;
 
    ctx.textBaseline = 'bottom';
 	for (var i = 0; i < times.length; i++) {
 		if (names[i] === 'Вы') {
 			ctx.fillStyle = 'red';
 		} else {
 			var r = Math.round(Math.random()*255);
 			var g = Math.round(Math.random()*255);
 			var b = Math.round(Math.random()*255);

 			ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', 1)';
 		}

    	ctx.fillRect(initialX + (indent + barWidth) * i, initialY, barWidth, - times[i] * step);
    	ctx.fillStyle = 'black';
    	ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + 20);
    	ctx.fillText(times[i].toFixed(0), initialX + (indent + barWidth) * i, initialY - times[i] * step - 10);
  	}


};
