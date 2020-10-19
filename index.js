const chalk = require('chalk');

// console.log
export const log = (...x) => {
    console.log(chalk.blue(...x))
}

// console.clear
export const clean = () => {
    console.clear();
    console.log(chalk.gray("console cleared"));
}

// console.error
export const errorlog = (...x) => {
    console.error(chalk.red(...x));
}

//console.warn
export const warnlog = (...x) => {
    console.warn(chalk.yellow(...x));
}

//console.info 
export const infolog = (...x) => {
    console.info(chalk.magenta(...x));
}

//console.trace
export const tracelog = () => {
    console.trace()
}


/* test 
// log("hello")
// errorlog("wrong input")
// warnlog("this is a warning")
// infolog("this is the info")
// tracelog()
*/