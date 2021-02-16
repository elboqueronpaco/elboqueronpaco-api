import { fileLoader, mergeTypes} from 'merge-graphql-schemas'
import { join } from 'path'
const typesArray = fileLoader(join(__dirname, './'))

export default mergeTypes(typesArray, { all: true })