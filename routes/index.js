const express = require('express');
const router = express.Router();
const { propertyController } = require('../controller/controller');

/* GET home page. */
router.get('/', propertyController.myIndex );
router.get("/verPropiedades", propertyController.seeItems);
router.get("/verPropiedad/:id", propertyController.seeOneItem)

/* POST home page. */
router.post('/crearItem', propertyController.newItem);

/* PUT home page. */
router.put("/editarPropiedad/:id", propertyController.editItem);

/* DELETE home page. */
router.delete("/eliminarPropiedad/:id", propertyController.delItem)

module.exports = router;
