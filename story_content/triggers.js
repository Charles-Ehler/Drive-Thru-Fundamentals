function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61Ikw9NuxIG":
        Script1();
        break;
      case "6WoHFnrtbni":
        Script2();
        break;
      case "6lZq6dnuH1q":
        Script3();
        break;
      case "6lnNhbCmNkw":
        Script4();
        break;
      case "65b3w37Zlc2":
        Script5();
        break;
      case "6AMQOphKDWw":
        Script6();
        break;
      case "6qvhXN0h7pq":
        Script7();
        break;
      case "6Zab12Gj8xy":
        Script8();
        break;
      case "6dJNPdXQmn1":
        Script9();
        break;
      case "5umxqEK5e15":
        Script10();
        break;
      case "5jRIRSfo5Ap":
        Script11();
        break;
      case "5n1KhKKAnlo":
        Script12();
        break;
      case "6cCVBSGnjHM":
        Script13();
        break;
      case "5aqSonRLdt4":
        Script14();
        break;
      case "5eiPqIlduzk":
        Script15();
        break;
      case "6QPH3isykQ9":
        Script16();
        break;
      case "6c5fg60zSmh":
        Script17();
        break;
      case "6WiALtRqxGT":
        Script18();
        break;
      case "60FEW1T8pGy":
        Script19();
        break;
      case "6EpfDI7wHRe":
        Script20();
        break;
      case "64aQgbtH1Pb":
        Script21();
        break;
      case "6dCjSIzFVHy":
        Script22();
        break;
      case "6br50WlYS2j":
        Script23();
        break;
      case "6KS5xG9hvGu":
        Script24();
        break;
      case "5gpfbPWbpeD":
        Script25();
        break;
      case "6D8X8Hxv2Ww":
        Script26();
        break;
      case "6cwRWt5terA":
        Script27();
        break;
      case "6eiOpy0e8sP":
        Script28();
        break;
      case "5Y09Hovmi0y":
        Script29();
        break;
      case "60nVueuA8pc":
        Script30();
        break;
      case "6KydlGq9yEb":
        Script31();
        break;
      case "6Q5jDB2OoeU":
        Script32();
        break;
      case "66jwBtwvIAl":
        Script33();
        break;
      case "662WHre8sIl":
        Script34();
        break;
      case "6GkPWn8Xz3I":
        Script35();
        break;
      case "5ei0d4K2dMc":
        Script36();
        break;
      case "5xjYLmivXd5":
        Script37();
        break;
      case "6DY4GXCn0jQ":
        Script38();
        break;
      case "6A41bl5QPgz":
        Script39();
        break;
      case "6RvC8SNs0wD":
        Script40();
        break;
      case "5c1XbmrjOOL":
        Script41();
        break;
      case "5fqm3BzJAo6":
        Script42();
        break;
      case "5iYh22pMvjT":
        Script43();
        break;
      case "6SHUdJ5YZ7T":
        Script44();
        break;
      case "5eA53hKQHxJ":
        Script45();
        break;
      case "5Y3oUVsQmsQ":
        Script46();
        break;
      case "6rmOsElFzFU":
        Script47();
        break;
      case "6R3KSHaFqE5":
        Script48();
        break;
      case "6pC1kSKdUaP":
        Script49();
        break;
      case "65dtGdiUcSQ":
        Script50();
        break;
      case "6XBRGWQHIng":
        Script51();
        break;
      case "6K8fWQsUKsL":
        Script52();
        break;
      case "5wJOmfxcMbH":
        Script53();
        break;
      case "6EApdNvd9kC":
        Script54();
        break;
      case "6mN1UKcjnDx":
        Script55();
        break;
      case "6oUKBWIHQft":
        Script56();
        break;
      case "6WpJESquNJ7":
        Script57();
        break;
      case "62AFg1jAmxt":
        Script58();
        break;
      case "6ZXvXjZPIy0":
        Script59();
        break;
      case "616kvVwP2Aq":
        Script60();
        break;
      case "6lkd50nKEga":
        Script61();
        break;
      case "5YsJSHqbH5R":
        Script62();
        break;
      case "63eEwuFH8QG":
        Script63();
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

window.Script47 = function()
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

window.Script48 = function()
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

window.Script49 = function()
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

window.Script50 = function()
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

window.Script51 = function()
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

window.Script52 = function()
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

window.Script53 = function()
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

window.Script54 = function()
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

window.Script55 = function()
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

window.Script56 = function()
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

window.Script57 = function()
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

window.Script58 = function()
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

window.Script59 = function()
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

window.Script60 = function()
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

window.Script61 = function()
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

window.Script62 = function()
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

window.Script63 = function()
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
