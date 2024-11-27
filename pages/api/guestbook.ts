import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/util/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('guestbook');
  const collection = db.collection('entries');

  if (req.method === 'POST') {
    const { name, email, content } = req.body;

    if (!name || !email || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    await collection.insertOne({ name, email, content, createdAt: new Date() });
    res.status(201).json({ message: 'Entry saved' });
  } else if (req.method === 'GET') {
    try {
      const { page = '1', limit = '10' } = req.query; // 기본값 설정
      const pageNumber = parseInt(page as string, 10);
      const limitNumber = parseInt(limit as string, 10);

      // 데이터 쿼리: 페이지에 따라 데이터 제한
      const entries = await collection
        .find({})
        .sort({ createdAt: -1 }) // 최신순 정렬
        .skip((pageNumber - 1) * limitNumber) // 페이지에 해당하는 항목 건너뛰기
        .limit(limitNumber) // 한 페이지에 표시할 항목 수
        .toArray();

      // 총 데이터 개수
      const totalEntries = await collection.countDocuments();

      res.status(200).json({
        entries,
        totalEntries,
        totalPages: Math.ceil(totalEntries / limitNumber),
        currentPage: pageNumber,
      });
    } catch (error) {
      console.error('Error fetching paginated entries:', error);
      res.status(500).json({ message: 'Error fetching entries' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
