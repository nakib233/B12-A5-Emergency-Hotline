const callHistory = [];

// Reusable Function
function heartadd(id) {
  const heartNumber = parseInt(document.getElementById(id).innerText);
  document.getElementById(id).innerText = heartNumber + 1;
}

function copyAdd(id) {
  const copyNum = parseInt(document.getElementById(id).innerText);
  console.log(copyNum + 1);
  document.getElementById(id).innerText = copyNum + 1;
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

// Reusable function for calling
function callFunction(sector, hotLine) {
  const data = {
    service: sector,
    number: hotLine,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);

  // call history adding section
  const historycontainer = document.getElementById("call_history_container");

  for (const call of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = `
    
     <div
            class="flex justify-between p-[16px] mx-[24px] my-[20px] bg-[#fafafa] rounded-[12px]"
          >
            <div>
              <h1 class="font-bold">${data.service}</h1>
              <h4>${data.number}</h4>
            </div>
            <div>${data.date}</div>
          </div>
    `;
    historycontainer.appendChild(div);
  }

  coin_decreasement("coin_num", `Calling ${sector} ${hotLine}`);
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

const call_btns = document.getElementsByClassName("call_btn");

// Button 1

call_btns[0].addEventListener("click", function () {
  callFunction("National Emergency Number", 999);
});

call_btns[1].addEventListener("click", function () {
  callFunction(" Police Helpline Number", 999);
});
call_btns[2].addEventListener("click", function () {
  callFunction("Fire Service Number", 999);
});
call_btns[3].addEventListener("click", function () {
  callFunction("Emergency Ambulance Service Number", 1994 - 999999);
});
call_btns[4].addEventListener("click", function () {
  callFunction("Women & Child Helpline Number", 109);
});
call_btns[5].addEventListener("click", function () {
  callFunction("Anti-Corruption Helpline Number", 106);
});
call_btns[6].addEventListener("click", function () {
  callFunction("Electricity Helpline Number", 16216);
});
call_btns[7].addEventListener("click", function () {
  callFunction("Brac Helpline Number", 16445);
});
call_btns[8].addEventListener("click", function () {
  callFunction("Bangladesh Railway Helpline Number", 163);
});

// Copying functionality
document.getElementById("button1").addEventListener("click", function () {
  alert("Number Copied: 999");
  navigator.clipboard.writeText("999");
  copyAdd("increase_copy");
});

document.getElementById("button2").addEventListener("click", function () {
  alert("Number Copied: 999");
  navigator.clipboard.writeText("999");
  copyAdd("increase_copy");
});

document.getElementById("button3").addEventListener("click", function () {
  alert("Number Copied: 999");
  navigator.clipboard.writeText("999");
  copyAdd("increase_copy");
});
document.getElementById("button4").addEventListener("click", function () {
  alert("Number Copied:1994-999999");
  navigator.clipboard.writeText("1994-999999");
  copyAdd("increase_copy");
});
document.getElementById("button5").addEventListener("click", function () {
  alert("Number Copied: 109");
  navigator.clipboard.writeText("109");
  copyAdd("increase_copy");
});
document.getElementById("button1").addEventListener("click", function () {
  alert("Number Copied: 106");
  navigator.clipboard.writeText("106");
  copyAdd("increase_copy");
});
document.getElementById("button1").addEventListener("click", function () {
  alert("Number Copied: 16216");
  navigator.clipboard.writeText("16216");
  copyAdd("increase_copy");
});
document.getElementById("button1").addEventListener("click", function () {
  alert("Number Copied: 16445");
  navigator.clipboard.writeText("16445");
  copyAdd("increase_copy");
});
document.getElementById("button1").addEventListener("click", function () {
  alert("Number Copied: 163");
  navigator.clipboard.writeText("163");
  copyAdd("increase_copy");
});
// Clearing the call history section

document.getElementById("clear_button").addEventListener("click", function () {
  callHistory.length = 0;

  const historyContainer = document.getElementById("call_history_container");
  historyContainer.innerHTML = "";
});
