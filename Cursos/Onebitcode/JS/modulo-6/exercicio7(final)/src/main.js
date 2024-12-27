let transactions = [];

// Função para carregar as transações do servidor
async function loadTransactions() {
    transactions = await fetch("http://localhost:3000/transactions").then(res => res.json());
    renderAllTransactions();
    updateBalance();
}

// Função para calcular o saldo
function calculateBalance() {
    return transactions.reduce((sum, transaction) => sum + parseFloat(transaction.value), 0);
}

// Função para atualizar o saldo na tela
async function updateBalance() {
    const balance = calculateBalance();
    document.getElementById('balance').textContent = `R$ ${balance.toFixed(2)}`;
}

// Função para renderizar todas as transações
function renderAllTransactions() {
    document.querySelector("#transactionsDiv").innerHTML = '';
    transactions.forEach(renderTransaction);
}

// Função para renderizar uma transação individual
function renderTransaction(transactionData) {
    const art = document.createElement('article');
    art.classList.add('transaction');
    art.id = `transaction-${transactionData.id}`;

    const title = document.createElement('h3');
    title.classList.add('transactionTitle');
    title.textContent = transactionData.name;

    const value = document.createElement('p');
    value.classList.add('value');
    value.textContent = "R$" + transactionData.value;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'Deletar';
    delBtn.classList.add('delB');
    delBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${transactionData.id}`, {
            method: 'DELETE'
        });
        transactions = transactions.filter(t => t.id !== transactionData.id);
        updateBalance();
        document.getElementById(art.id).remove();
    });

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Editar';
    editBtn.classList.add('edtB');
    editBtn.addEventListener('click', () => {
        showEditForm(transactionData);
    });

    art.append(title, value, delBtn, editBtn);
    document.querySelector("#transactionsDiv").appendChild(art);
}

// Função para mostrar o formulário de edição
function showEditForm(transactionData) {
    const editForm = document.createElement('form');
    editForm.classList.add('editForm');
    editForm.method = ''

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = transactionData.name;
    nameInput.placeholder = 'Nome';
    nameInput.classList.add('input');

    const valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.value = transactionData.value;
    valueInput.placeholder = 'Valor';
    valueInput.classList.add('input');

    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Salvar';
    saveBtn.classList.add('saveB');
    saveBtn.type = 'submit';

    editForm.append(nameInput, valueInput, saveBtn);
    document.body.append(editForm);

    editForm.addEventListener('submit', async (evt) => {
        evt.preventDefault();
        const updatedTransactionData = {
            ...transactionData,
            name: nameInput.value,
            value: parseFloat(valueInput.value)
        };

        const response = await fetch(`http://localhost:3000/transactions/${transactionData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTransactionData)
        });

        if (response.ok) {
            const updatedTransaction = await response.json();
            transactions = transactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t);
            renderAllTransactions();
            updateBalance();
            editForm.remove();
        } else {
            console.error('Erro ao atualizar a transação!');
        }
    });
}

// Função para carregar as transações quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadTransactions);

// Função para adicionar uma nova transação
const form = document.querySelector('form');
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const transactionData = {
        name: document.querySelector('#name').value,
        value: parseFloat(document.querySelector('#value').value)
    };

    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    });

    const savedTransaction = await response.json();
    transactions.push(savedTransaction);
    renderTransaction(savedTransaction);
    updateBalance();
    form.reset();
});
