const chalk = require('chalk');

// console.log
const log = (...x) => {
    console.log(chalk.blue(...x))
}

// console.clear
const clean = () => {
    console.clear();
    console.log(chalk.gray("console cleared"));
}

// console.error
const errorlog = (...x) => {
    console.error(chalk.red(...x));
}

//console.warn
 const warnlog = (...x) => {
    console.warn(chalk.yellow(...x));
}

//console.info 
 const infolog = (...x) => {
    console.info(chalk.magenta(...x));
}

//console.trace
const tracelog = () => {
    console.trace()
}


module.exports = {
    log,
    clean,
    errorlog,
    warnlog,
    infolog,
    tracelog,
}

/* test 
// log("hello")
// errorlog("wrong input")
// warnlog("this is a warning")
// infolog("this is the info")
// tracelog()
*/