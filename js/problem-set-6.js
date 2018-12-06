/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
	const canv = document.getElementById("canvas1")
	const ctxt = canv.getContext('2d');
	ctxt.clearRect(0, 0, canv.width, canv.height);
	ctxt.font = '48px sans-serif';
	ctxt.strokeText("Hello, World!", 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

	const canv = document.getElementById("canvas2")
	const ctxt = canv.getContext('2d');
	ctxt.clearRect(0, 0, canv.width, canv.height);
	let usrx;
	let usry;
	let usrh;
	let usrw;

	while(true) {
		usrx = Number(prompt("Enter X Value"));
		usry = Number(prompt("Enter Y Value"));
		usrh = Number(prompt("Enter Height"));
		usrw = Number(prompt("Enter Width"));

		if(usrx >= 5 && usry >= 5 && usrh >= 1 && usrw >= 1 && 
			usrx+usrw <= canv.width && usry+usrh <= canv.height) {
			//console.log("1")
			break;
		}
		alert("Your inputs are invalid");
	}

	ctxt.strokeRect(usrx, usry, usrw, usrh);



}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

	const canv = document.getElementById("canvas3")
	const ctxt = canv.getContext('2d');
	ctxt.clearRect(0, 0, canv.width, canv.height);
	let usrcol;

	while(true) {
		usrcol = prompt("Enter a Color");
		if(usrcol == "black" || usrcol == "blue" || 
			usrcol == "green" || usrcol == "orange" || usrcol == "purple" 
			|| usrcol == "red" || usrcol == "yellow") {
			break;
		}
		alert("Your inputs are invalid");

	}
	ctxt.fillStyle=usrcol;
	ctxt.fillRect(10, 10, 100, 50);

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
	const canv = document.getElementById("canvas4")
	const ctxt = canv.getContext('2d');
	ctxt.clearRect(0, 0, canv.width, canv.height);
	let strx = 10;
	let stry = 10;
	let usrl1;
	let usrl2;
	let usrl3;
	while (true) {
		usrl1 = Number(prompt("Enter Line Length"));
		usrl2 = Number(prompt("Enter Line Length"));
		usrl3 = Number(prompt("Enter Hypotenuse Length"));
		if ((usrl1*usrl1 + usrl2*usrl2 == usrl3*usrl3) && 
			usrl1>0 && usrl2>0 && usrl3>0 && 
			canv.width-strx-usrl1>=0 && canv.height-stry-usrl2>=0) {

			break;
		}
		else {alert("That is not a valid triangle");}
	}

	ctxt.beginPath();
	ctxt.moveTo(strx, stry);
	ctxt.lineTo(strx, stry+usrl2);
	ctxt.stroke();

	ctxt.beginPath();
	ctxt.moveTo(strx, stry+usrl2)
	ctxt.lineTo(strx+usrl1, stry);
	ctxt.stroke();

	ctxt.beginPath();
	ctxt.moveTo(strx+usrl1, stry);
	ctxt.lineTo(strx, stry);
	ctxt.stroke();

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
	const canv = document.getElementById("canvas6")
	const ctxt = canv.getContext('2d');
	ctxt.clearRect(0, 0, canv.width, canv.height);
	
	let inrad;
	let outrad;
	let ctrx = 125;
	let ctry = 125;
	let numpoints = 5;
	let pointouty = [];
	let pointoutx = [];
	let pointiny = [];
	let pointinx = [];

	while (true) {
		outrad = Number(prompt("Enter Outer Radius"));
		inrad = Number(prompt("Enter Inner Radius"));
		console.log(outrad);
		console.log(inrad);
		if(outrad>inrad && canv.width >= outrad + 125 && canv.height >= outrad + 125) {
			break;
		}
		else {alert("Invalid Inputs");}
	}

	for (let i=0;i<numpoints;i++) {
		pointoutx.push(125+outrad*(Math.cos(Math.PI*i/5)));
		pointouty.push(125+outrad*(Math.sin(Math.PI*i/5)));
	}
	for (let i=0;i<numpoints;i++) {
		pointinx.push(125+inrad*(Math.cos(Math.PI*i/5 + 36)));
		pointiny.push(125+inrad*(Math.sin(Math.PI*i/5 + 36)));
	}

	for(let j=0;j<numpoints;j++) {
		ctxt.beginPath();
		ctxt.moveTo(pointoutx[j], pointouty[j]);
		ctxt.lineTo(pointinx[j], pointiny[j]);
		ctxt.lineTo(pointoutx[j+1], pointouty[j+1]);
		ctxt.stroke();
	}

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
