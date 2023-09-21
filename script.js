function insert_Row() {
  //Write your code here

  let tbody = document.getElementsByTagName("tbody")[0];
  let getTr = tbody.children[0];

  let tr = document.createElement("tr");

  tr.innerHTML = `<td>New Cell1</td> <td>New Cell2</td>`;

  tbody.insertBefore(tr, getTr);
}