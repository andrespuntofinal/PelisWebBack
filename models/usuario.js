const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    nombre:{

        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    correo:{

        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },

    rol:{

        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },

    estado:{

        type: Boolean,
        default: true
    }



});

module.exports = model('Usuario', UserSchema );