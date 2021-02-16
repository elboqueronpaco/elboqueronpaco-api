

export default (sequlize, { BOOLEAN, STRING, UUID, UUIDV4 }) => {
    const User =  sequlize.define('User', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: UUID,
            defaultValue: UUIDV4()
        },
        username: {
            type: STRING,
            alloNull: false,
            unique: true,
            validate:{
                isAlphanumeric: {
                    args: true,
                    msg: 'The username just accepts alphanumiric characters'
                },
                len: {
                    args: [8, 50],
                    msg: 'The username must be from 8 to 50 characters'
                }
            }
        },
        password: {
            type: STRING,
            alloNull: false,
            validate: {
                len: {
                    args: [8, 20],
                    msg: 'The username must be from 8 to 20 characters'
                }
            }
        },
        email: {
            type: STRING,
            alloNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email'
                }
            }
        },
        privilege: {
            type: STRING,
            alloNull: false,
            defaultValue: 'user'
        },
        active: {
            type: BOOLEAN,
            alloNull: false,
            defaultValue: false
        }
    })
     return User
}
