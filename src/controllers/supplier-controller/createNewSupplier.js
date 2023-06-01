const supplierService = require("../../services/supplier-service");
const { createEntity } = require("../controller-module");

const createNewSupplier = (req, res) => {
    createEntity(req, res, supplierService.createNewSupplier);
};

module.exports = { createNewSupplier };
