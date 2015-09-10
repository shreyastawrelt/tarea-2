//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
_INPUT = "2\n3 9\n17 24";
x = _INPUT.split('\n');

function check_sqrt(num1, num2){
  sqrts = 0;
  for (i = num1; i <= num2; i++) {
    x = Math.sqrt(i);
    if(Math.floor(x) == x){
      sqrts++;
    }
  }
  return sqrts;
}

lim = parseInt(x[0]);
for (j = 1; j <= lim; j++) {
  p1 = x[j].split('');
  num1 = parseInt(p1[0]);
  num2 = parseInt(p1[1]);
  console.log(check_sqrt(num1, num2));
}
