import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const thanos = async () => {
  const random = Math.round(Math.random() * 10);

  try {
    const contacts = await getAllContacts();
    if (!contacts.length) return;

    for (let i = 0; i < contacts.length; i++) {
      if (random > 5) {
        contacts.pop();
      }
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
