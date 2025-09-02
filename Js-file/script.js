// Reusable Function
function heartadd(id) {
  const heartNumber = parseInt(document.getElementById(id).innerText);
  document.getElementById(id).innerText = heartNumber + 1;
}
// Reusable function for coin decreasement
function coin_decreasement(id, message) {
  const coin = parseInt(document.getElementById(id).innerText);
  if (coin > 0) {
    alert(message);
  }
  if (coin === 0) {
    alert("You don't have sufficient coins to call.");
    return;
  }
  document.getElementById(id).innerText = coin - 20;
}

// heart1
document.getElementById("heart-btn1").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn2").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn3").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn4").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn5").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn6").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn7").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn8").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});
document.getElementById("heart-btn9").addEventListener("click", function () {
  heartadd("heart-increaseBtn");
});

// Calling Functionality

// document.getElementById("call_button").addEventListener("click", function () {
//   coin_decreasement("coin_num", "📞Calling National Emergency Number 999");
// });

const call_btns = document.getElementsByClassName("call_btn");

call_btns[0].addEventListener("click", function () {
  coin_decreasement("coin_num", "📞Calling National Emergency Number 999");
});
call_btns[1].addEventListener("click", function () {
  coin_decreasement("coin_num", "📞Calling Police Helpline Number 999");
});
call_btns[2].addEventListener("click", function () {
  coin_decreasement("coin_num", "📞Calling Fire Service Number 999");
});
call_btns[3].addEventListener("click", function () {
  coin_decreasement(
    "coin_num",
    "📞Calling Emergency Ambulance Service Number 1994-999999"
  );
});
call_btns[4].addEventListener("click", function () {
  coin_decreasement("coin_num", "📞Calling Women & Child Helpline Number 109");
});
call_btns[5].addEventListener("click", function () {
  coin_decreasement(
    "coin_num",
    "📞Calling Anti-Corruption Helpline Number 106"
  );
});
call_btns[6].addEventListener("click", function () {
  coin_decreasement("coin_num", "📞Calling Electricity Helpline Number 16216");
});
call_btns[7].addEventListener("click", function () {
  coin_decreasement("coin_num", "📞Calling Brac Helpline Number 16445");
});
call_btns[8].addEventListener("click", function () {
  coin_decreasement(
    "coin_num",
    "📞Calling Bangladesh Railway Helpline Number 163"
  );
});
