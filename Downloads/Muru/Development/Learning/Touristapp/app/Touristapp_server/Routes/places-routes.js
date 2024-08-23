const express = require("express");

const validate = require("express-validator");
const routes = express.Router();

const placeController = require("../Controller/place-controller");

routes.get('/', placeController.getallplaced);
routes.get('/:pid', placeController.getPlaceById);

routes.get('/user/:uid', placeController.getPlacebyUserId);
routes.get('/:uid/:pid', placeController.getPlaceandUserId);



routes.post('/', [validate.check('title').notEmpty(), 
    validate.check('description').isLength({ min: 5 }), 
    validate.check('address').notEmpty()], 
    placeController.createPlace);

routes.patch('/:pid',[validate.check('title').notEmpty,validate.check('description').isLength({min:5})], placeController.updatePlaces);

routes.delete('/:pid', placeController.deletePlaces);
module.exports = routes;