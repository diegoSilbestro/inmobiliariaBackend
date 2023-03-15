const { Property } = require('../models/property');

const propertyController = {
    myIndex: (req, res) => {
        res.json({ msg: 'Esta base de datos guarda propiedades de una inmobiliaria' })
    },
    newItem: async (req, res) => {
        try {
            const item = new Property(req.body);
            await item.save();
            res.status(200).json({ msg: 'La propiedad fue guardada exitosamente' });
        } catch (err) {
            res.status(501).json({ msg: 'Error', err });
        }
    },
    seeItems: async (req, res) => {
        const items = await Property.find();
        res.json({ items });
    },
    seeOneItem: async (req, res) => {
        try {
            const item = await Property.findById(req.params.id);
            res.status(200).json({ item })
        } catch (err) {
            res.status(501).json({ err })
        }
    },
    editItem: async (req, res) => {
        try {
            await Property.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ msg: "Se actualizo la propiedad" });
        } catch (err) {
            res.status(501).json({ err })
        }
    },
    delItem: async (req,res) => {
        try {
            await Property.findByIdAndDelete(req.params.id);
            res.status(200).json({ msg:'Se elimino exitosamente la propiedad'})
        } catch (err) {
            res.status(501).json({ err })
        }
    }
}

module.exports = { propertyController };