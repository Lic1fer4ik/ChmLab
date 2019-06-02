var h = 0.2, a = 0, b = 1 ;
var k = 0.05;
var massXH = [];
var massXH5 = [];
var massXH21 = [];
var massH = [];
var massH5 =[];
var massH21 = [];

 draw(generateTable(h,massH,massXH),'table1');
 draw(generateTable(h/5,massH5,massXH5),'table2');
 draw(generateTable(h/21,massH21,massXH21),'table3');

function generateTable(h1,massE, massX){
		var i = 1;
		var y = 10, x = a, y0 = 0;
		var yi;
		var E = 0;
		var percent = 0;
		var table = '<h1> h = '+h1+'</h1> <br />'
		table += '<table class="simple-little-table">';
		table += '<tr>';
		table +='<td>i</td> <td>x</td> <td>y</td> <td>Ftoch</td> <td>e(x)</td>  <td>%</td>'
		table += '</tr>';
		do{
			
			//draw
			table += '<tr>';
			table += '<td>' +i +'</td>'
			table += '<td>' +x.toFixed(6) +'</td>'
			table += '<td>' +y.toFixed(6) +'</td>'
			table += '<td>' +ftoch(x).toFixed(6) +'</td>'
			table += '<td>' +E.toFixed(5) +'</td>'
			table += '<td>' +percent.toFixed(5) +'</td>'
			table += '</tr>';
				//calc
			y0 = y + h1 * calc(y)
			yi = y + h1/2 * (calc(y) + calc(y0));
			y = yi;
			massX.push(x);
			x+=h1;
			E = Math.abs(y - ftoch(x));
			massE.push(E);
			percent = (E/ftoch(x))*100;
			i++;
		}while(x<=b+0.01)
		table += '</table>';
		return table;
}

function draw(table,id)
{
	if(id == 'table1')
	document.getElementById('table1').innerHTML = table;
	if(id == 'table2')
	document.getElementById('table2').innerHTML = table;
	if(id == 'table3')
	document.getElementById('table3').innerHTML = table;
}

function calc (y)
{
 return -2*k*y*y;
}

function ftoch (x)
{
	return 10/(1+20*k*x);
}



    var trace1 = {
        x: massXH,
        y: massH,
        type: 'scatter',
        name: "h"
    };
    var trace2 = {
        x: massXH5,
        y: massH5,
        type: 'scatter',
        name: "h/5"
    };
    var trace3={
        x: massXH21,
        y: massH21,
        type: 'scatter',
        name: "h/21"
    }
    var data = [trace1, trace2,trace3];
    Plotly.newPlot('tester', data);
