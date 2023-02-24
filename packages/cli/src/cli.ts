#!/usr/bin/env node

import { version } from '../package.json';
import { bakeHandler } from './bake.js';
import { Command } from 'commander';

const program = new Command();

// Program infos
program
  .version(version)
  .description('Cook your perfect boilerplate.')
  .option('-v, --verbose', 'verbose');

// Bake command
program
  .command('bake')
  .description('bake your recipe')
  .option('-r, --recipe <source>', 'load recipe from file/url/npm')
  .action(bakeHandler);

program.parse(process.argv);
