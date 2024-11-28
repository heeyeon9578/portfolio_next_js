import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // 환경 변수 설정 필요
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  alert('Please add your MongoDB URI to .env.local')
  throw new Error('Please add your MongoDB URI to .env.local');
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
