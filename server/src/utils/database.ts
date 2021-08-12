/* eslint-disable no-console */
import mongoose from 'mongoose';

export function dbConnect() {
  mongoose.connect(process.env.DB || ``, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  db.on(`error`, (err) => {
    console.log(`There was an error connecting to the database: ${err}`);
  });
  db.once(`open`, () => {
    console.log(`Connected to DB`);
  });
}
