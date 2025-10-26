function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RZJxO9ZX8B":
        Script1();
        break;
      case "5x2VfGhJSKj":
        Script2();
        break;
      case "6VvtXsYIBmR":
        Script3();
        break;
      case "6NvKkLe4GNu":
        Script4();
        break;
      case "6nHyQu5hPjF":
        Script5();
        break;
      case "6bCV0KmqLXw":
        Script6();
        break;
      case "6HCyjsOM2xi":
        Script7();
        break;
      case "6kNEfvS3qyY":
        Script8();
        break;
      case "6INOQATx7cq":
        Script9();
        break;
      case "6FXM8fT0NPU":
        Script10();
        break;
      case "6E2xUJzWZLj":
        Script11();
        break;
      case "6SRvoQGT6Iz":
        Script12();
        break;
      case "6pRGEKRPtRz":
        Script13();
        break;
      case "6KBpvxMt8k9":
        Script14();
        break;
      case "6ZSaQsehMui":
        Script15();
        break;
      case "5licK9z6uuP":
        Script16();
        break;
      case "5aCj4CFhmuk":
        Script17();
        break;
      case "6LLftj7xxNo":
        Script18();
        break;
      case "5jU4obrtaEv":
        Script19();
        break;
      case "5p9K8uFnmyb":
        Script20();
        break;
      case "6LVtaeMqjBX":
        Script21();
        break;
      case "5i3FNvHy2vT":
        Script22();
        break;
      case "649N6X8mGiV":
        Script23();
        break;
      case "6jw4DXe6G3B":
        Script24();
        break;
      case "69fowSpq21e":
        Script25();
        break;
      case "6igw6PRI0bA":
        Script26();
        break;
      case "60zfZ1gnyvJ":
        Script27();
        break;
      case "65TQxJ6NptR":
        Script28();
        break;
      case "6AFitHhPUCY":
        Script29();
        break;
      case "6BCVRgwlKtR":
        Script30();
        break;
      case "62fmQ9VNz8L":
        Script31();
        break;
      case "5jiNkqpK00Y":
        Script32();
        break;
      case "6b42AMPMQlJ":
        Script33();
        break;
      case "5qOv4cnuh3d":
        Script34();
        break;
      case "6mfe3GatuLh":
        Script35();
        break;
      case "5l67JaVFh46":
        Script36();
        break;
      case "5m1EkuKltRy":
        Script37();
        break;
      case "6URnlCfh3or":
        Script38();
        break;
      case "64tOSeMd0wQ":
        Script39();
        break;
      case "6AnIoJp4qiW":
        Script40();
        break;
      case "5zbGDrlGzUE":
        Script41();
        break;
      case "6i5g6OvjjhZ":
        Script42();
        break;
      case "6B1oUWH5HQn":
        Script43();
        break;
      case "5awAR2lIC93":
        Script44();
        break;
      case "5kZi3PWxH0l":
        Script45();
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
  const target = object('6SPVcKWhbzY');
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

window.Script44 = function()
{
  const target = object('6SPVcKWhbzY');
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

window.Script45 = function()
{
  const target = object('6SPVcKWhbzY');
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
