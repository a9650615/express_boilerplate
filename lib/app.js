import express from 'express';
import PrettyError from 'pretty-error';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const prettyError = new PrettyError();
prettyError.skipNodeFiles();
prettyError.skipPackage('express');

app.use((err, req, res, next) => {
  process.stderr.write(prettyError.render(err));
  next();
});

export default app;
