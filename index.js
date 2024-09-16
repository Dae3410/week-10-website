document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.getElementById('form-submit');
    let number = 0;

    formButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Variables to hold the values of the form
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let favoriteColor = document.getElementById('favoriteColor').value;

        // Created a new table row
        let newTableRow = document.createElement('tr');

   
        let numberNode = document.createElement('td');
        numberNode.innerHTML = number;
        newTableRow.appendChild(numberNode);


        let firstNameNode = document.createElement('td');
        firstNameNode.innerHTML = firstName;
        newTableRow.appendChild(firstNameNode);

        
        let lastNameNode = document.createElement('td');
        lastNameNode.innerHTML = lastName;
        newTableRow.appendChild(lastNameNode);

        let favoriteColorNode = document.createElement('td');
        favoriteColorNode.innerHTML = favoriteColor;
        newTableRow.appendChild(favoriteColorNode);

        
        document.getElementById('table-body').appendChild(newTableRow);

        document.getElementById(`firstName`).value = ''
        document.getElementById(`lastName`).value = ''
        document.getElementById(`favoriteColor`).value = ''
  
        number++;
    });
});


