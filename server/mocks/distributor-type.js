module.exports = function(app) {
  var express = require('express');
  var distributorTypeRouter = express.Router();

  distributorTypeRouter.get('/', function(req, res) {
    res.send({
      'distributor-type': [{id: "1", name: "brian"}]
    });
  });

  distributorTypeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  distributorTypeRouter.get('/:id', function(req, res) {
    res.send({
      'distributor-type': {
        id: req.params.id
      }
    });
  });

  distributorTypeRouter.put('/:id', function(req, res) {
    res.send({
      'distributor-type': {
        id: req.params.id
      }
    });
  });

  distributorTypeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/services/masterdata/distributorTypes', distributorTypeRouter);
};
