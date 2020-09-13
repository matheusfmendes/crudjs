var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Nome"] = document.getElementById("Nome").value;
    formData["Cpf"] = document.getElementById("Cpf").value;
    formData["Email"] = document.getElementById("Email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Cpf;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("Nome").value = "";
    document.getElementById("Cpf").value = "";
    document.getElementById("Email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Cpf").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nome;
    selectedRow.cells[1].innerHTML = formData.Cpf;
    selectedRow.cells[2].innerHTML = formData.Email;
}

function onDelete(td) {
    if (confirm('Tem certeza de que deseja excluir este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
