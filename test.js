document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const table = document.getElementById('submissionsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const messageCell = newRow.insertCell(2);

    nameCell.textContent = name;
    emailCell.textContent = email;
    messageCell.textContent = message;

    document.getElementById('contactForm').reset();
});

