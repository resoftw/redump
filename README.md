redump
======

Simple object dump in JS, quite similar to print_r in PHP 
Usage:
------
    var c= {
      a:10,
      b:true,
      c:[
        1,2,3,4
      ]
    }
    document.body.innerHTML=redump(c);

