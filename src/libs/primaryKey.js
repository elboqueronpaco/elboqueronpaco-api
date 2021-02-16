import { UUID, UUIDV4 } from "sequelize/types";

export const primaryKey = (UUID, UUIDV4) => ({
    primarykey: true,
    alloNull: false,
    type: UUID,
    defaultValue: UUIDV4()
})