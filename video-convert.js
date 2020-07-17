#! /usr/bin/env node
const hbjs = require('handbrake-js');

const { argv } = require('yargs')
    .option('i', {
        describe: 'provide a path for input file',
    })
    .option('o', {
        describe: 'provide a path for output dir',
    })
    .help();

if (argv.i === undefined) {
    console.log('Input file is not provided!');
    console.log('vidcon --help for more information.');
    return;
}

if (argv.o === undefined) {
    console.log('Output file is not provided!');
    console.log('vidcon --help for more information.');
    return;
}

hbjs.spawn({ input: argv.i, output: argv.o })
    .on('error', err => {
        console.log(err);
    }).on('complete', () => {
        console.log('Done!');
    });