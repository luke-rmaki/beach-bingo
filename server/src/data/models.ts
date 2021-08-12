import { Schema, model } from 'mongoose';

const SectionSchema = new Schema({
  word: String,
});

const BoardSchema = new Schema({
  row: SectionSchema,
  column: SectionSchema,
});

const UserSchema = new Schema({
  name: String,
  board: BoardSchema,
});

export const Section = model(`Section`, SectionSchema);
export const Board = model(`Board`, BoardSchema);
export const User = model(`User`, UserSchema);
