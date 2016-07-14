var drawing = document.getElementById('drawing');
	var ctx = drawing.getContext('2d');
	drawBlock(10);
	
	//canvas绘制方格
	function drawBlock(count){
		console.log(drawing.width);
		var blockWidth = Math.floor(drawing.width / count);
		console.log(blockWidth);
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#eee';
		for(var i = 1; i < count; i++){
			ctx.beginPath();

			ctx.moveTo(blockWidth * i,0);
			ctx.lineTo(blockWidth * i,drawing.height);

			ctx.moveTo(0, blockWidth*i);
			ctx.lineTo(drawing.width,blockWidth*i);

			ctx.stroke();
		}
	}
	
var block = new Block(document.getElementById('walk'));
block.init(document.getElementById('walk'));
