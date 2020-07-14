const hbjs = require('handbrake-js')

const { argv } = require('yargs')
    .option('i', {
        describe: 'provide a path for input file',
    })
    .option('o', {
        describe: 'provide a path for output dir',
    })
    .help();


hbjs.spawn({ input: argv.i, output: argv.o })
    .on('error', err => {
        console.log(err)
    });