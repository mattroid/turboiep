/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import fs from 'fs';
import { join } from 'path';
import { Router } from 'express';
import Promise from 'bluebird';
import jade from 'jade';
import fm from 'front-matter';

// A folder with Jade/Markdown/HTML content pages
const CONTENT_DIR = join(__dirname, './content');

// Extract 'front matter' metadata and generate HTML
const parseJade = (path, jadeContent) => {
  const fmContent = fm(jadeContent);
  const htmlContent = jade.render(fmContent.body);
  return Object.assign({ path, content: htmlContent }, fmContent.attributes);
};

const readFile = Promise.promisify(fs.readFile);
const fileExists = filename => new Promise(resolve => {
  fs.exists(filename, resolve);
});

const router = new Router();

const students = [];

router.post('/add', async (req, res, next) => {
  console.log('received student');
  try {
    console.log(req.body)
    let newStudent = JSON.parse(req.body);
    students.push(newStudent);

    res.status(200).json(newStudent);

  } catch(err){
    next(err);
  }
});
router.get('/', async (req, res, next) => {
  try {
    res.status(200).json(students);
  } catch(err){
    next(err);
  }
});

export default router;
