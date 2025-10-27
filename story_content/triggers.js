function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yAPQvcUx27":
        Script1();
        break;
      case "5yEQrTvWUvW":
        Script2();
        break;
      case "6HnQUdqQB1q":
        Script3();
        break;
      case "608wmBXikb2":
        Script4();
        break;
      case "5edU8GSafYV":
        Script5();
        break;
      case "6LnOTNXCumQ":
        Script6();
        break;
      case "68Vw7SCyKM2":
        Script7();
        break;
      case "6VdMQZSjipX":
        Script8();
        break;
      case "5wHdQ5HKc7M":
        Script9();
        break;
      case "5wYrfTWPGCV":
        Script10();
        break;
      case "5aHeO0Mx3JS":
        Script11();
        break;
      case "6ImHFNhH6df":
        Script12();
        break;
      case "5r5Xt06LckR":
        Script13();
        break;
      case "6XIznSfxsVi":
        Script14();
        break;
      case "5rQoQx2299i":
        Script15();
        break;
      case "6GHPJjjcMqQ":
        Script16();
        break;
      case "5e8Ej5uol0Q":
        Script17();
        break;
      case "5lbOBYWAcAj":
        Script18();
        break;
      case "5VyAqnQZETi":
        Script19();
        break;
      case "65eSntOwiZy":
        Script20();
        break;
      case "6ggrQjfeGWi":
        Script21();
        break;
      case "6QIxPhT1Lbu":
        Script22();
        break;
      case "66JGgcRUpk9":
        Script23();
        break;
      case "6r8sNfozTS5":
        Script24();
        break;
      case "60R6ONIwY0I":
        Script25();
        break;
      case "6KxiU57beLd":
        Script26();
        break;
      case "5jdlQOXZx7n":
        Script27();
        break;
      case "6bPr4HPu7yu":
        Script28();
        break;
      case "5eZ6lyZRtw5":
        Script29();
        break;
      case "6KkAbT58Cnn":
        Script30();
        break;
      case "6U98Rwor7lR":
        Script31();
        break;
      case "5bozsp10T1a":
        Script32();
        break;
      case "6GT94f7nFa7":
        Script33();
        break;
      case "6AWMYlbV419":
        Script34();
        break;
      case "5fJcrAup9Oj":
        Script35();
        break;
      case "62OcvbTxiim":
        Script36();
        break;
      case "5s94xahjLsb":
        Script37();
        break;
      case "5xLtO4nn1dE":
        Script38();
        break;
      case "5XOvpn7ldDj":
        Script39();
        break;
      case "5fjBAmRzwua":
        Script40();
        break;
      case "5tX2vWHx4Te":
        Script41();
        break;
      case "68ALXON0lRI":
        Script42();
        break;
      case "6RdsYVMbXZP":
        Script43();
        break;
      case "5ozQT5IIojF":
        Script44();
        break;
      case "5Wu1QNSxKuQ":
        Script45();
        break;
      case "6kdg1yiSEKG":
        Script46();
        break;
      case "5b6Jrhjkn7L":
        Script47();
        break;
      case "5g2eliTuRxJ":
        Script48();
        break;
      case "6NoIdJvulZc":
        Script49();
        break;
      case "6IPqt5JgwQy":
        Script50();
        break;
      case "5WfxlzXTXoS":
        Script51();
        break;
      case "65fcCpM8TPp":
        Script52();
        break;
      case "6msIjc6KQLX":
        Script53();
        break;
      case "5jq3rrlzUYB":
        Script54();
        break;
      case "5ajOwfYxn85":
        Script55();
        break;
      case "6rNLX2ipC0b":
        Script56();
        break;
      case "6R0zHFjgY0K":
        Script57();
        break;
      case "623GMhy6SyD":
        Script58();
        break;
      case "5n7weVRgq68":
        Script59();
        break;
      case "5pEnQiy1rnl":
        Script60();
        break;
      case "68LzQTDowtI":
        Script61();
        break;
      case "6CTlcpi1AwH":
        Script62();
        break;
      case "6XIIeh9SG3m":
        Script63();
        break;
      case "670qOThsRNP":
        Script64();
        break;
      case "6ULSfklMFPu":
        Script65();
        break;
      case "6OiX2qkuWLu":
        Script66();
        break;
      case "6l51S9ZPy2l":
        Script67();
        break;
      case "63Y2A7cGAE4":
        Script68();
        break;
      case "6bCNrUd6Yqk":
        Script69();
        break;
      case "6TpGcKrfwmD":
        Script70();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6WMtieGNDgQ');
const duration = 1500;
const easing = 'ease-out';
const id = '5j9iLkQV524';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6WMtieGNDgQ');
const duration = 750;
const easing = 'ease-out';
const id = '6C7pW9Ty1AT';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6WMtieGNDgQ');
const duration = 1500;
const easing = 'ease-out';
const id = '5j9iLkQV524';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6d1a8qHdcPx');
const duration = 750;
const easing = 'ease-out';
const id = '6a4sY158ARO';
const tiltAmount = 6;
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6d1a8qHdcPx');
const duration = 750;
const easing = 'ease-out';
const id = '6a4sY158ARO_reverse';
const tiltAmount = 0;
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('61tQUubg41V');
const duration = 750;
const easing = 'ease-out';
const id = '5sT7BYFk814';
const tiltAmount = 6;
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('61tQUubg41V');
const duration = 750;
const easing = 'ease-out';
const id = '5sT7BYFk814_reverse';
const tiltAmount = 0;
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5jtudlD5ZPY');
const duration = 750;
const easing = 'ease-out';
const id = '5VSG8xcpuYW';
const tiltAmount = 6;
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5jtudlD5ZPY');
const duration = 750;
const easing = 'ease-out';
const id = '5VSG8xcpuYW_reverse';
const tiltAmount = 0;
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6FhlPzRlPKe');
const duration = 1500;
const easing = 'ease-out';
const id = '6C4mbKHmdPT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6FhlPzRlPKe');
const duration = 750;
const easing = 'ease-out';
const id = '6cktZZTm6LO';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6FhlPzRlPKe');
const duration = 1500;
const easing = 'ease-out';
const id = '6C4mbKHmdPT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5WQUtEKa81e');
const duration = 750;
const easing = 'ease-out';
const id = '6dHxjLhN1L5';
const tiltAmount = 6;
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5WQUtEKa81e');
const duration = 750;
const easing = 'ease-out';
const id = '6dHxjLhN1L5_reverse';
const tiltAmount = 0;
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5lXaHoLVFhb');
const duration = 750;
const easing = 'ease-out';
const id = '66lXZv6og9X';
const tiltAmount = 6;
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('5lXaHoLVFhb');
const duration = 750;
const easing = 'ease-out';
const id = '66lXZv6og9X_reverse';
const tiltAmount = 0;
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6nI5jz8oYvZ');
const duration = 750;
const easing = 'ease-out';
const id = '6MUW0a7VEIa';
const tiltAmount = 6;
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6nI5jz8oYvZ');
const duration = 750;
const easing = 'ease-out';
const id = '6MUW0a7VEIa_reverse';
const tiltAmount = 0;
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {rotate: `-${tiltAmount}deg`, scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6nCMtrWgYP4');
const duration = 1500;
const easing = 'ease-out';
const id = '5tciUW9yexH';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6nCMtrWgYP4');
const duration = 750;
const easing = 'ease-out';
const id = '6cRaQMmkxdZ';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6nCMtrWgYP4');
const duration = 1500;
const easing = 'ease-out';
const id = '5tciUW9yexH';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6rUiyrU6u6c');
const duration = 1500;
const easing = 'ease-out';
const id = '6XblOt23qsn';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6rUiyrU6u6c');
const duration = 750;
const easing = 'ease-out';
const id = '6r4eHp9SXwH';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6rUiyrU6u6c');
const duration = 1500;
const easing = 'ease-out';
const id = '6XblOt23qsn';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6Xv6kEZqdnI');
const duration = 1500;
const easing = 'ease-out';
const id = '5W5WVfQBoYX';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6Xv6kEZqdnI');
const duration = 750;
const easing = 'ease-out';
const id = '6MZhV7CqlEU';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6Xv6kEZqdnI');
const duration = 1500;
const easing = 'ease-out';
const id = '5W5WVfQBoYX';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5l9QTUI1rCB');
const duration = 1500;
const easing = 'ease-out';
const id = '6l7zjrVJ2Gr';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5l9QTUI1rCB');
const duration = 750;
const easing = 'ease-out';
const id = '5sSvomyeXcX';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5l9QTUI1rCB');
const duration = 1500;
const easing = 'ease-out';
const id = '6l7zjrVJ2Gr';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6phrEUlHoCw');
const duration = 1500;
const easing = 'ease-out';
const id = '5iv9ClPaFJG';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6phrEUlHoCw');
const duration = 750;
const easing = 'ease-out';
const id = '5dSblTu1p1R';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6phrEUlHoCw');
const duration = 1500;
const easing = 'ease-out';
const id = '5iv9ClPaFJG';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('5p2QbCRvaGZ');
const duration = 1500;
const easing = 'ease-out';
const id = '6JCIyDDKvPl';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('5p2QbCRvaGZ');
const duration = 750;
const easing = 'ease-out';
const id = '5WEwnsUvEg1';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5p2QbCRvaGZ');
const duration = 1500;
const easing = 'ease-out';
const id = '6JCIyDDKvPl';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6JGPq8QSgbi');
const duration = 1500;
const easing = 'ease-out';
const id = '6kg1yKBUJ5X';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6JGPq8QSgbi');
const duration = 750;
const easing = 'ease-out';
const id = '6Hz3PxEsl2V';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6JGPq8QSgbi');
const duration = 1500;
const easing = 'ease-out';
const id = '6kg1yKBUJ5X';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('6DEnKe731kB');
const duration = 1500;
const easing = 'ease-out';
const id = '6KyTeslvhES';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('6DEnKe731kB');
const duration = 750;
const easing = 'ease-out';
const id = '6a7yFTgCaMy';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6DEnKe731kB');
const duration = 1500;
const easing = 'ease-out';
const id = '6KyTeslvhES';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('5kgKjeYpfpd');
const duration = 1500;
const easing = 'ease-out';
const id = '67feHkm8Xza';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('5kgKjeYpfpd');
const duration = 750;
const easing = 'ease-out';
const id = '6Ux4mdiMHEU';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('5kgKjeYpfpd');
const duration = 1500;
const easing = 'ease-out';
const id = '67feHkm8Xza';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6HWdEntajEu');
const duration = 1500;
const easing = 'ease-out';
const id = '6CyvV7d6deN';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('6HWdEntajEu');
const duration = 750;
const easing = 'ease-out';
const id = '5WQV7fwThyC';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('6HWdEntajEu');
const duration = 1500;
const easing = 'ease-out';
const id = '6CyvV7d6deN';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('5xoGbSmVoCq');
const duration = 750;
const easing = 'ease-out';
const id = '6cfQGWaxtTq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('5rz8qoOS5O2');
const duration = 1500;
const easing = 'ease-out';
const id = '6gpmAsKC22i';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('5rz8qoOS5O2');
const duration = 750;
const easing = 'ease-out';
const id = '5vcaRwIruDO';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('5rz8qoOS5O2');
const duration = 1500;
const easing = 'ease-out';
const id = '6gpmAsKC22i';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6WOLOONEmL9');
const duration = 1500;
const easing = 'ease-out';
const id = '6C4mbKHmdPT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6WOLOONEmL9');
const duration = 750;
const easing = 'ease-out';
const id = '6cktZZTm6LO';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('6WOLOONEmL9');
const duration = 1500;
const easing = 'ease-out';
const id = '6C4mbKHmdPT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6VejXoh7J1z');
const duration = 1500;
const easing = 'ease-out';
const id = '6IhcHUb527F';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('6VejXoh7J1z');
const duration = 750;
const easing = 'ease-out';
const id = '6reVuXK2pFm';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('6VejXoh7J1z');
const duration = 1500;
const easing = 'ease-out';
const id = '6IhcHUb527F';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('6Sg5bPF5HMp');
const duration = 1500;
const easing = 'ease-out';
const id = '6g6dIhqZTRw';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('6Sg5bPF5HMp');
const duration = 750;
const easing = 'ease-out';
const id = '5zKQPq9of4C';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  const target = object('6Sg5bPF5HMp');
const duration = 1500;
const easing = 'ease-out';
const id = '6g6dIhqZTRw';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('6X1LhOCI88X');
const duration = 1500;
const easing = 'ease-out';
const id = '6IkmCENF07j';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('6X1LhOCI88X');
const duration = 750;
const easing = 'ease-out';
const id = '6qhtfj42dc6';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  const target = object('6X1LhOCI88X');
const duration = 1500;
const easing = 'ease-out';
const id = '6IkmCENF07j';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script65 = function()
{
  const target = object('6CIhmQtdB8T');
const duration = 750;
const easing = 'ease-out';
const id = '6b3dIT0uRvP';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('6CIhmQtdB8T');
const duration = 750;
const easing = 'ease-out';
const id = '5mFtDDLIu1u';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  const target = object('6CIhmQtdB8T');
const duration = 750;
const easing = 'ease-out';
const id = '6b3dIT0uRvP';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script68 = function()
{
  const target = object('6DANyGxY6f0');
const duration = 1500;
const easing = 'ease-out';
const id = '6C4mbKHmdPT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script69 = function()
{
  const target = object('6DANyGxY6f0');
const duration = 750;
const easing = 'ease-out';
const id = '6cktZZTm6LO';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script70 = function()
{
  const target = object('6DANyGxY6f0');
const duration = 1500;
const easing = 'ease-out';
const id = '6C4mbKHmdPT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
