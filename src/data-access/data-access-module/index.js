const createNewEntity = async (model, newEntity) => {
    try {
        const createdEntity = await model.create(newEntity);
        return createdEntity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const getAllEntities = async (model, attributes, order) => {
    try {
        const allEntities = await model.findAll({ order, attributes });
        return allEntities;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const getOneEntity = async (model, desc, entityId, cond, attributes) => {
    try {
        const entity = await model.findOne({ where: cond, attributes });
        if (!entity) {
            throw {
                status: 404,
                message: `Can't find ${desc.toLowerCase()} with the id '${entityId}'`,
            };
        }
        return entity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateOneEntity = async (model, cond, updateData) => {
    try {
        await model.update({ ...updateData }, { where: cond });
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const deleteOneEntity = async (model, desc, entityId, cond, attributes) => {
    try {
        const entity = await model.destroy({ where: cond, attributes });
        if (!entity) {
            throw {
                status: 400,
                message: `Can't find ${desc.toLowerCase()} with the id '${entityId}'`,
            };
        }
        return entity;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
};
