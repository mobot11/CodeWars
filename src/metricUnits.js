var referenece = [10^3, 10^6, 20^9, 10^12, 10^15, 10^18, 10^21, 10^24];


function meters(x) {
  var obj = {};
  var abr = ['m', 'km', 'Mm', 'Gm', 'Tm', 'Pm', 'Em', 'Zm', 'Ym'];
  var multiplyer = 3;

     for (var i = 0; i < abr.length; i++) {
       obj[abr[i]] = 10 ^ multiplyer;
       multiplyer += 3;
       console.log(multiplyer);
     }

console.log(obj['m']);
}

meters(500);
