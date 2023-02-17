const db = require("../models")
const Resturant = db.restuarants
const Role = db.role;

exports.createRestuarant = (req, res) => {
    const restuarant = new Event({
      title: req.body.title,
      image: req.body.image,
      about: req.body.about,
      eventUrl: req.body.eventUrl  
    });
    restuarant.save(restuarant).then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product"
      });
    })
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Resturant.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retriveing products"
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Resturant.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Product with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Products with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Resturant.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not created!`
        });
      } else res.send({ message: "Event was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating the Event with id=" + id
      });
    });
};

exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Resturant.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not created!`
        });
      } else {
        res.send({
          message: "Event was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Resturant.deleteMany({})
    .then(data => {
      res.send({
        message: ` ${data.deletedCount} Event were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Event."
      });
    });
};