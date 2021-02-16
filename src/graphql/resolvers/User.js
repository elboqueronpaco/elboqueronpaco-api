export default {
    Query: {
        getUsers: (parent, args, { models}) => {
            return models.User.findAll()
        }
    },
    Mutation: {
        createUser: (parent, {input}, {models}) => models.User.create({ ...input })
    }
}