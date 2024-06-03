import path from 'path';
import { } from '../models/queries.js';

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
};

export {
    home
}