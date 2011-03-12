# Facemelt.js

Facemelt.js provides the power necessary to let you build face melting templates for your javascript applications effectively with maximum frustration.

Facemelt is based on [Brainfuck](http://en.wikipedia.org/wiki/Brainfuck), an esoteric programming language noted for its extreme minimalism. 

## Getting Started

Facemelt templates are conceptually simple. Anything which isn't a Facemelt command will be ignored. In order to print something to the output, you must at least use `.`.

    ,MY>, >,FACE>, >,IS>, >,MELTING<<<<<<.>.>.>.>.>.>.

The API is simple. Simply call `Facemelt.to_html` with your template and your initial data array. Data can be printed using `.`, and modified at any time with any of `+-,`. You can also navigate the data array by using any of `>` or `<`.

    var source = ",HELLO., .>."
    var data = ["", "WORLD"]
    var result = Facemelt.to_html(source, data) // "HELLO WORLD"

## Commands

Facemelt provides you with the minimal set of commands, ensuring you can get the maximal amount of work done.

    >    increment the data pointer (to point to the next cell to the right).
    <    decrement the data pointer (to point to the next cell to the left).
    +    increment (increase by one) the data at the data pointer.
    -    decrement (decrease by one) the data at the data pointer.
    .    output the value of the data at the current data pointer.
    ,    read text up to the next Facemelt command and store it at the current data pointer.
    [    if the value at the data pointer is zero, then instead of moving the instruction pointer 
         forward to the next command, jump it forward to the command after the matching ] command*.
    ]    if the value at the data pointer is nonzero, then instead of moving the instruction pointer 
         forward to the next command, jump it back to the command after the matching [ command*.

