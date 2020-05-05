/* CRUD USER */

const User = require('../models/User');
const bcrypt = require('bcrypt');


module.exports = {

    //login
    async login(req, res) {
        const { password, email, islogged } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user.id || !bcrypt.compareSync(password, user.password)) {
            return res.status('400').send({
                status: ' :( ',
                message: 'E-mail e/ou senha incorreta!'
            });
        }

        await User.update({
            islogged
        }, {
            where: {
                id: user.id,
            }
        });

        user.password = undefined;

        return res.status(200).send({
            status: ' ;) ',
            message: "Usuário logado com sucesso!",
            user
        });
    },

    //buscas
    async index(req, res) {
        const users = await User.findAll();

        if (users == "" || users == null) {
            return res.status(200).send({ message: "Nenhum usuário cadastrado" });
        }

        return res.status(200).send({ users });

    },
    //salvar
    async store(req, res) {
        const { name, password, email } = req.body;
        const user = await User.create({ name, password, email });
        return res.status(200).send({
            status: 'OK',
            message: 'Usuário cadastrado com sucesso!',
            user
        })
    },
    //atualizar
    async update(req, res) {
        const { name, password, email } = req.body;
        const { user_id } = req.params;
        await User.update({ name, password, email }, {
            where: {
                id: user_id
            }
        });
        return res.status(200).send({
            status: "OK",
            message: "Usuário " + name + " atualizado com sucesso",
        })
    },
    //delete
    async delete(req, res) {
        const { user_id } = req.params;
        await User.destroy({
            where: {
                id: user_id
            }
        });
        return res.status(200).send({
            status: "OK",
            message: "Usuário DELETADO com sucesso",
        })
    }
}
