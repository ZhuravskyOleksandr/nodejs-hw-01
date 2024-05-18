import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await getAllContacts();
    for (let i = contacts.length; i !== 0; i--) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    }
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();

// export const removeAllContacts = async () => {
//   try {
//     await fs.writeFile(PATH_DB, JSON.stringify([]));
//   } catch (error) {
//     console.log(error);
//   }
// };
