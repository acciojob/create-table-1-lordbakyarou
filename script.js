
const table = document.getElementById("sampleTable");
const td = table.children[0];



function insert_Row(){

	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	td1.innerText = "New Cell1";
	
	td2.innerText = "New Cell2"
	tr.append(td1,td2);
	table.insertBefore(tr,td);
}