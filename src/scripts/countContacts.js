import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
