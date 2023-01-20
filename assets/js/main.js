const table = document.querySelector('.table');

const form = document.querySelector('form').addEventListener('submit',printTable)

const inputs = document.querySelectorAll('input')

window.addEventListener('load',printTable)

function printTable(e) {

    let number= parseInt(document.querySelector('#numStart').value || 5) ;

    range= parseInt(document.querySelector('#numEnd').value || 5);

    table.innerHTML = `

        <tr>

            <th>Multiplication for ${number}</th><th>Results</th>

        </tr>
        
    `
    for(let i = 1; i<= range;i++) {

        const result = i * number;

        table.innerHTML += `

            <tr>

                <td> ${number} x ${i}</td>

                <td>${result}</td>

            </tr>

        `

    }

     e.preventDefault();

    inputs.forEach(input=>input.value = '')

}