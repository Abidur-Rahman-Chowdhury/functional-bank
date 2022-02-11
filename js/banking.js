function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  // reset deposit input field
  depositInput.value = "";
  return depositAmount;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  //   const depositInput = document.getElementById("deposit-input");
  //   const depositAmountText = depositInput.value;
  //   const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();
  console.log(depositAmount);

  // get current  deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = depositAmount + previousDepositTotal;
  console.log(depositTotalText);

  // update balance

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;
});

// handel withdraw btn

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawAmountText);

  console.log(withdrawAmountText);

  // update withdraw total
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(withdrawTotalText);

  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

  // update balance after withdraw
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  // reset withdraw input field
  withdrawInput.value = "";
});
