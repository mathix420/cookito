#!/usr/bin/env node

import { version } from '../package.json';
import { Command } from 'commander';

const program = new Command();

program
  .version(version)
  .description('Cook your perfect boilerplate.')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);
