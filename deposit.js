document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;
  // console.log(depositAmount);
  // step-3
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  // console.log(depositTotal);
  depositTotalElement.innerText = depositAmount;
});
