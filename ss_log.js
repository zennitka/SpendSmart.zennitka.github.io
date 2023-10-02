
let budget = 0;
let expenses = 0;

function submitBudget() {
    const budgetInput = document.getElementById("budget");
    budget = parseFloat(budgetInput.value);

    if (isNaN(budget) || budget <= 0) {
        alert("Please enter the correct budget amount.");
        return;
    }

    updateChart();
}

function submitExpenses() {
    const expensesInput = document.getElementById("expenses");
    const expense = parseFloat(expensesInput.value);

    if (isNaN(expense) || expense <= 0) {
        alert("Please enter the correct budget amount.");
        return;
    }

    expenses += expense;
    updateChart();
}

function updateChart() {
    const chartContainer = document.getElementById("canv");
    chartContainer.innerHTML = '<canvas id="budgetChart" width="400" height="400"></canvas>';

    const ctx = document.getElementById("budgetChart").getContext("2d");
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['budget', 'expenses'],
            datasets: [{
                data: [budget, expenses],
                backgroundColor: ['#36A2EB', '#FF6384']
            }]
        }
    });
}
