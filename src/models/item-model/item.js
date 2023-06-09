const { DataTypes, Sequelize } = require("sequelize");

function itemModel(sequelize) {
    const Item = sequelize.define(
        "item",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            part_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT(11, 2),
                allowNull: false,
            },
            part_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "item",
        }
    );

    return Item;
}

module.exports = { itemModel };
