const cinemasModel = require('../models/cinemas');
module.exports = {
  getById: function (req, res, next) {
    console.log(req.body);
    cinemasModel.findById(req.params.cinemasId, function(err, cinemasInfo){
      if (err) {
        next(err);
      } else {
        res.status(200).json({
          status: 'success',
          message: 'Cinema found!!!',
          data: {
            cinemas: cinemasInfo
          }
        });
      }
    });
  },

  getAll: function (req, res, next) {
    let cinemasList = [];
    cinemasModel.find({}, function(err, cinemas) {
      if (err) {
        next(err);
      } else {
        for (let cinema of cinemas) {
          cinemasList.push({
            id: cinema._id,
            name: cinema.name,
            released_on: cinema.released_on
          });
        }

        res.status(200).json({
          status: 'success',
          message: 'Cinemas list found!!',
          data: {
            cinemas: cinemasList
          }
        });
      }
    });
  },
  updateById: function (req, res, next) {
   cinemasModel.findByIdAndUpdate(req.params.cinemaId, {
     name: req.body.name
   }, function (err, cinemaInfo) {
     if (err)
      next(err);
    else res.status(201).json({ status: 'success', message: 'Cinema deleted successsfully', data: null});
   });
  },
  deleteById: function (req, res, next) {
    cinemasModel.findByIdAndRemove(req.params.cinemaId, function (err, cinemaInfo) {
        if (err)
            next(err);
        else {
            res.status(201).json({ status: "success", message: "Cinema deleted successfully!!!", data: null });
        }
    });
  },
  create: function (req, res, next) {
      cinemasModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
          if (err)
              next(err);
          else
              res.status(201).json({ status: "success", message: "Cinema added successfully!!!", data: null });

      });
  },
}