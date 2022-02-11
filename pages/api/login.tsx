import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function login(req: NextApiRequest, res: NextApiResponse): void {
  const key = process.env.JWT_SECRET_KEY;
  if (!req.body) {
    res.statusCode = 400;
    res.json({ message: 'No data provided' });
    return;
  }
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    res.statusCode = 400;
    res.json({ message: 'No data provided' });
    return;
  }

  res.json({
    token: jwt.sign({ username, tamanhoDoPeDoSapato: 43, admin: false }, key),
  });
}
