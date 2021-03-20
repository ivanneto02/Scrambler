var timeWait = 30;
var numArr = [];

for (var i = 1; i < 76; i++) {

  numArr.push(i);
  console.log(numArr[i - 1]);
}

function initScramble() {

    document.getElementById('square').style.color = 'rgb(53, 110, 235)';
    document.getElementById('square').style.fontSize = '200px';

    if (timeWait == 300) {

        timeWait = 30;

        var num = (Math.floor(Math.random() * 100)) % (numArr.length + 1);//#Check;
        
        var numChoice = numArr[num];

        /*
        while (num in numArr) {
          
          if (numArr.length() == 76) {

            document.getElementById('square').innerHTML = 'OUT';
            return;
          }
          
          num = (Math.floor(Math.random() * 100)) % 76;

        }
        */

        numArr.splice(num, 1);//removes from the array

        document.getElementById('square').innerHTML = numChoice.toString();
        document.getElementById('square').style.color = 'red';
        document.getElementById('square').style.fontSize = '300px';
        
        return 0;
    }

    var num = (Math.floor(Math.random() * 100)) % (numArr.length + 1);
    document.getElementById('square').innerHTML = num.toString();

    timeWait = timeWait + 10;

    console.log('test' + timeWait.toString());
    setTimeout(initScramble, timeWait);
}

/*
function initAll() {

  var timeWait = 30;

  initScramble(timeWait);
  //resetSquare();
}
*/
