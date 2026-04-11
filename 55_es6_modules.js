/*
es6 modules:
an external file that contains reusable code that can be imported into other JS files
write reusable code for many different apps
can contain variables, classes, functions ... and more
introduced as part of ECMAScript 2015 update
*/

import {PI, get_circumference, get_area} from "./test/math_util.js"

const print = console.log

print(PI)
print(get_circumference(4))
print(get_area(4))