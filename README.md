<p align="center">
  <img alt="consoles" src="assets/terminal.jpg">
</p>
<p align="center">
  <strong>Consoles</strong> ✭ Dev tool for consoling  <a href="https://www.npmjs.com/package/consoles">Consoles</a> Package
</p>

# consoles
A simple package file for JavaScript applications to work with browser console. 

## console made simple here


Consoles helps your project to work with consoles and made it simpler ti you:

1.  consoles as same as like console.log() with just an line of logs.C() //also customizable
2.  Can also use chalk for color consoles
3.  functional handling like to lower , to upper && typeof are integrated with it

## Why Consoles?

Consoles are used by each and every progmmer on js circle, hence there is no such a powerfull tool for console handling.
thus, we are making console.log into a simple one.
can simply import consoles into your project and had your naming defination eg:logs. That's enough to working with it.


### Getting started

Install via npm

```bash
npm install consoles
```

#### How it's work?

```js
import logs from 'consoles';

or 

const logs = require('consoles');

var str = "Silver";
var numb = 36;

logs.C(str) //C is a method to call console eg you can call C , c , consoles all are same
logs.c(str) // produce "Silver" in console
logs.consoles(numb) // produce "36" in console

logs.T(str) //T is a method to call console typeof eg you can call T , t , types & type all are same.
logs.t(numb) // produce "number" in console
logs.types(str) // produce "string" in console
logs.type(str) // produce "string" in console

even we can pass multiple inputs also...

logs.c(str,numb) // produce "Silver" "36" in console

logs.t(str,numb) // produce "string" "number" in console

```
