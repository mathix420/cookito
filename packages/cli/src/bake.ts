import npmPkgRegex from 'package-name-regex';
import { OptionValues } from 'commander';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { exit } from 'process';
import fetch from 'node-fetch';
import YAML from 'yaml';

function _safeFileExist(path: string) {
  try {
    return existsSync(path);
  } catch (err) {
    console.error(err);
    return false;
  }
}

function parseRecipe(location: string) {
  if (_safeFileExist(location)) {
    return readFile(location, { encoding: 'utf-8' }).then(YAML.parse);
  } else if (/^https?:\/\//i.test(location)) {
    return fetch(location)
      .then((res) => res.text())
      .then(YAML.parse);
  } else if (npmPkgRegex.test(location)) {
    // TODO:
    console.error('Not implemented yet, sorry!');
    exit(1);
  } else {
    console.error("Recipe isn't a file, an url nor a npm package.");
    exit(1);
  }
}

export async function bakeHandler(options: OptionValues): Promise<void> {
  if (!options.recipe) {
    console.error('Not implemented, please use -r for now.');
    exit(1);
  }

  const recipe = parseRecipe(options.recipe);
  console.log(recipe);
}
