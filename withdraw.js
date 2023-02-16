// console.log("withdraw done");

// step1 add event handle with withdraw button
// get the withdraw amount from the withdraw input field
// also make sure to convert input into a number by parseflot number.

// *****
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("withdraw button clicked");

  // step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // console.log(newWithdrawAmount);

  // step-3
  const WithdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawString);
  // console.log(previousWithdrawTotal);

  // step-4 calculate total amount must

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  WithdrawTotalElement.innerText = currentWithdrawTotal;

  // step-5 set total withdraw amount
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  console.log(previousBalanceTotal);

  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  // step-7
  withdrawField.value = "";
});
