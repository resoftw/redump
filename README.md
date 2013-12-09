redump
======

Simple object dump in JS, quite similar to print_r in PHP

This is the initial release, there are so many things to improve. 

Usage:
------
There's only one function: `redump(thevar)` outputs `string`

    var c= {
      a:10,
      b:true,
      c:[
        1,2,3,4
      ]
    }
    document.body.innerHTML=redump(c);

will produce:

    Object = {
      .a : Number = 10,
      .b : Boolean = true,
      .c : Array = [
        [0] : Number = 1,
        [1] : Number = 2,
        [2] : Number = 3,
        [3] : Number = 4,
      ],
    }
