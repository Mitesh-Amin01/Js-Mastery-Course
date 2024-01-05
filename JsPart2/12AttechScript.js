// ==> parsing ==> Load ==> Execute


// inside of head tag worng way
// 1} <script src="./12AttechScript.js"></script>
// Browser is read line by line html file (pharseing)
// when html is find this tag stop and excute js file
// js file miss dom element
// producing js error 

// bottom of body
// 2} <script src="./12AttechScript.js"></script> 
// ==> parsing ==> Load ==> Execute
// Problem is Time
// pars html  ---  time consuming
// js load  ---  time consuming
// execute  ---  time consuming


// inside of head tag
// 3} <script src="./12AttechScript.js" async></script>
// read html file and js load file same time
// do not stop parsing
// but loading is done then stop parsing and excute js file first
// hafe file parsing so it have chance to produsing error
// async keyword is create paraller processing

// inside of head tag best way
// 3} <script src="./12AttechScript.js" defer></script>

// this method parsing and loading both same time run
// loading done after not stop for execution
// first parsing html code and then execute js file


