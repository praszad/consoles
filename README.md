<p align="center">
  <img alt="consoles" src="assets/terminal.jpg">
</p>
<p align="center">
  <strong>Consoles</strong> ✭ Dev tool for consoling  <a href="https://www.npmjs.com/package/consoles">Consoles</a> Package
</p>

# consoles
A simple package file for JavaScript applications to work with browser console. 

## console made simple here


Consoles helps your project to work with consoles and made it simpler to you:

1.  consoles as same as like console.log() with just an line of logs.C() //also customizable
2.  Consoles are available with color codes too.
3.  functional handling like to toLowerString , toUpperString && typeof are integrated as simple as never before.

## Why Consoles?

Consoles are used by each and every progmmer on js circle, hence there is no such a powerfull tool for console handling.
thus, we are making console.log into a simple one.
can simply import consoles into your project and had your naming defination eg:logs. That's enough to working with it.


### Getting started

Install via npm

```bash
npm install consoles@latest 

or

npm i consoles
```

#### How it's work?

```js
import log from 'consoles';

or 

const log = require('consoles');

var str = "Silver";
var numb = 36;

log.C(str) //C is a method to call console eg you can call C , c , consoles all are same
log.c(str) // produce "Silver" in console
log.console(numb) // produce "36" in console
log.log(numb) // produce "36" in console

log.T(str) //T is a method to call console typeof eg you can call T , t , types & type all are same.
log.t(numb) // produce "number" in console
log.types(str) // produce "string" in console
log.type(str) // produce "string" in console

even we can pass multiple inputs also...

log.c(str,numb) // produce "Silver" "36" in console

log.t(str,numb) // produce "string" "number" in console

```

### CONSOLES built in Method'S

Call your reference value in my case it would be log;

   #### CONSOLE LOGGING  

```bash

import log from 'consoles';
or 
const log = require('consoles');

log.C() 
log.c()
log.log();
log.console()

```

 #### CONSOLE LOGGING  Typeof

```bash
log.T() 
log.t()
log.types();
log.type()

```
  #### CONSOLE LOGGING  toLowerString

```bash
log.toL() 
log.tl()
log.tolow();
log.tolower();

```
  #### CONSOLE LOGGING  toUpperString

```bash
log.toU() 
log.tu()
log.toup();
log.toupper();

```
