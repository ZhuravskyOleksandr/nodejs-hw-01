import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  if (number <= 0) return;

  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    for (let i = 0; i <= number; i++) {
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
