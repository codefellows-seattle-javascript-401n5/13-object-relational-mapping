'use strict';

import express from 'express';
const router = express.Router();

import modelFinder from '../middleware/models';
router.param('model', modelFinder);

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/', (req,res,next) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write('hello');
  res.end();
});

router.get('/api/v1/:model', (req,res,next) => {
  req.model.find({})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.get('/api/v1/:model/:id', (req,res,next) => {
  req.model.findById(req.params.id)
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.post('/api/v1/:model', (req,res,next) => {
  let record = new req.model(req.body);
  record.save()
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.put('/api/v1/:models/:id', (req, res, next) => {
  if(Object.keys(req.body).length){
  req.models.findbyidandupdate(req.params.id, req.body, {new:true})
    .then(data => sendJSON(res, data))
    .catch(next);
    } else {
      return notFound;
    };
});

router.delete('/api/v1/:models/:dogs', (req, res, next) => {
  if (req.params.id) {
  req.models.findbyidanddelete(req.params.id)
    .then(() => {
    res.statusCode = 206;
    res.end();
  })
    .catch(() => {
      next();
    });
  }
});

export default router;
