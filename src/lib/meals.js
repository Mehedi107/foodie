import sql from 'better-sqlite3';
import DOMPurify from 'isomorphic-dompurify';
import slug from 'slug';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Something went wrong...');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function saveMeal(meal) {
  meal.slug = slug(meal.title);
  meal.instructions = DOMPurify.sanitize(meal.instructions);
}
