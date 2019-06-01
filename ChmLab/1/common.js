var h = 0.5, a = 0, b = 1 ;

function generateTable(h1){
		var i = 0;
		var y = 0, x = a, y0 = 0;
		var yi;
		var E = 0;
		var table = '<table class="simple-little-table">';
		table += '<tr>';
		table +='<td>i</td> <td>x</td> <td>y</td> <td>Ftoch</td> <td>D</td>'
		table += '</tr>';
		do{
		
			//draw
			table += '<tr>';
			table += '<td>' +i +'</td>'
			table += '<td>' +x.toFixed(6) +'</td>'
			table += '<td>' + y.toFixed(6) +'</td>'
			table += '<td>' +ftoch(x).toFixed(6) +'</td>'
			table += '<td>' +E.toFixed(5) +'</td>'
			table += '</tr>';
				//calc
			y0 = y + h1 * calc(y)
			yi = y + h1/2 * (calc(y) + calc(y0));
			y = yi;
			E = Math.abs(y - ftoch(x));
			x+=h1;
			i++;
		}while(x<=b)
		table += '</table>';
		document.getElementById('table').innerHTML = table;
}

function calc (y)
{
 return Math.sqrt(1-y*y);
}

function ftoch (x)
{
	return Math.sin(x);
}