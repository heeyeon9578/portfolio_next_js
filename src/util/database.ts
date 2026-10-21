import { MongoClient } from 'mongodb';
let clientPromise: Promise<MongoClient> | undefined;
export default function getClient(): Promise<MongoClient> {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is required for guestbook requests.');
    clientPromise = new MongoClient(uri).connect().catch(error => {
      clientPromise = undefined;
      throw error;
    });
  }
  return clientPromise;
}
