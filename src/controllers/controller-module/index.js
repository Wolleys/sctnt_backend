const createEntity = async (req, res, service) => {
    const body = req.body;
    const model = req.models;

    try {
        const createdEntity = await service(model, body);
        res.status(201).send({ status: "OK", data: createdEntity });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

const getAllEntities = async (req, res, service) => {
    const model = req.models;

    try {
        const allEntities = await service(model);
        res.send({ status: "OK", data: allEntities });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

const getOneEntity = async (req, res, idName, service) => {
    const model = req.models;
    const entityId = req.params[idName];

    try {
        const entity = await service(model, entityId);
        res.send({ status: "OK", data: entity });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", error: error?.message || error });
    }
};

module.exports = { createEntity, getAllEntities, getOneEntity };
