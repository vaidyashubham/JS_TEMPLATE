
let empName = document.querySelector('#name');
let empAge = document.querySelector('#age');
let empDesignation = document.querySelector('#designation');
let addEmpBtn = document.querySelector('#add-emp');

let empNo = document.querySelector('#sr-no');


addEmpBtn.addEventListener('click',function () {
        let tableBody = document.querySelector('#table-body');
        let row = document.createElement('tr');
        row.style.textAlign = 'center';
        row.innerHTML = `<td>${empNo.value}</td>
                         <td>${empName.value}</td>
                         <td>${empAge.value}</td>
                         <td>${empDesignation.value}</td>`;
        tableBody.appendChild(row);
});

