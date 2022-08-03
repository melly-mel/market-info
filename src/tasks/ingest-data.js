import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import { DataStore } from '@aws-amplify/datastore';
import { Practices, Markets } from '../models/index.js';

const pathToData = path.resolve('src', 'data', 'market-reference-book.csv');

const results = [];
fs.createReadStream(pathToData)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)
  }).on('end', () => {
    const market = results[0];
    console.log(market);
    createPractice(market);
  });

const createPractice = async (args) => {
  const market = new Markets({
    "state": "AZ",
    "city": "Phoenix"
  });
  await DataStore.save(
    new Practices({
      "name": args['Practice Name'],
      "Market": market,
      "address": args['Address'],
      "county": args['County'],
      "website": args['Website'],
      "phone_number": translatePhoneNumber(args['Practice Phone Number']),
      "fax": translatePhoneNumber(args['Practice Fax']),
      "nearby_landmarks": args['Nearby Landmarks'],
      "humana_pcp_number": args['Humana PCP #']
    })
  );
};

const translatePhoneNumber = (val) => {
  const numbers = val.split('-');
  return `(${numbers[0]}) ${numbers[1]}-${numbers[2]}`
}