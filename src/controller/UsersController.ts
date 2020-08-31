import { Request, Response } from 'express';
import axios from 'axios';
import db from '../database';

class UsersController {
  async index(request: Request, response: Response) {
    const all = await db('connections').select('*');
    return response.json(all);
  }

  create(request: Request, response: Response) {
    const { phone } = request.body;
    const data = {
      phone,
      body: 'mensagem teste',
    };
    axios
      .post(
        `http://api3.megabotwpp.com:${process.env.megabotPort}/sendmessage?token=${process.env.token}`,
        data
      )
      .then(async (res) => {
        await db('connections').insert({ phone });
        return response.status(200).json(res.data.message);
      })
      .catch((err) => response.status(500).json(err));
  }
}

export default new UsersController();
