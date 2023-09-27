
const table = document.getElementById("sampleTable");
const td = table.children[0];



function insert_Row(){

	const tr = document.createElement("tr");
	tr.innerHTML = "<td>New Cell1</td><td>New Cell2</td>"
	table.insertBefore(tr,td);
}