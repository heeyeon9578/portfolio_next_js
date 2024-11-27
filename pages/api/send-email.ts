import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Nodemailer 설정
    const transporter = nodemailer.createTransport({
      host: 'smtp.naver.com',
      port: 587,
      secure: false, // TLS 사용
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 이메일 전송
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`, // 발신자는 Naver 계정
      to: process.env.EMAIL_USER, // 관리자 본인에게 발송
      subject: `[Inquiry] ${subject}`, // 방문자가 입력한 제목
      text: `You have received a new message from your website contact form:\n\n
        From: ${email}\n
        Subject: ${subject}\n
        Message:\n${message}`,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
};

export default handler;
