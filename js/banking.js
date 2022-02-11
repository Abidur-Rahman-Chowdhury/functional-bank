function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const inputAmount = parseFloat(inputFieldText);
  // reset deposit input field
  inputField.value = "";
  return inputAmount;
}

function updateTotalField(totalId, amount) {
  const totalField = document.getElementById(totalId);
  const totalFieldText = totalField.innerText;
  const previousTotal = parseFloat(totalFieldText);
  totalField.innerText = amount + previousTotal;
}
function updateBalance(balanceId, amount) {
  const balanceTotal = document.getElementById("balance-total");
//   const balanceTotalText = balanceTotal.innerText;
//   const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
  balanceTotal.innerText = previousBalanceTotal + amount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInputValue("deposit-input");
  if (depositAmount > 0) {
    updateTotalField("deposit-total", depositAmount);
    updateBalance("balance-total", depositAmount);
  }

  // get current  deposit
  // update balance

  //   const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const previousBalanceTotal = parseFloat(balanceTotalText);
  //   balanceTotal.innerText = previousBalanceTotal + depositAmount;
});

// handel withdraw btn

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && currentBalance> withdrawAmount) {
    updateBalance("balance-total", -withdrawAmount);

    updateTotalField("withdraw-total", withdrawAmount);
  }

  // update withdraw total
  //   const withdrawTotal = document.getElementById("withdraw-total");
  //   const withdrawTotalText = withdrawTotal.innerText;
  //   const previousWithdrawTotal = parseFloat(withdrawTotalText);

  //   withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

  // update balance after withdraw
  //   const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const previousBalanceTotal = parseFloat(balanceTotalText);
  //   balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
});
