import { prompt } from 'inquirer';

import { getNames, Names, writeFile } from '../helpers';

export async function generateModule() {
  const { name } = await prompt([
    {
      message: 'Name',
      name: 'name',
      type: 'input',
    }
  ]);
  if (!name) {
    console.error('You must provide a name.');
    return;
  }
  renderModuleTemplates(name);
}

export function renderModuleTemplates(name: string, dir?: string) {
  const names = getNames(name);
  const indexTemplate = require('./templates/index.ts-t');
  const moduleTemplate = require('./templates/module.ts-t');
  writeFile(dir, `${names.kebabName}/index.ts`, indexTemplate, names);
  writeFile(dir, `${names.kebabName}/${names.kebabName}.modyke.ts`, moduleTemplate, names);
}
