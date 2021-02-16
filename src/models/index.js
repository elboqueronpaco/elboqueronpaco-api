import Sequelize from 'sequelize'
import { $db } from '@config'

const { database, username, password, dialect, host, port } = $db()
const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize( uri )

const models = {
    User: require('./User').default(sequelize, Sequelize)
}


models.sequelize = sequelize
export default models