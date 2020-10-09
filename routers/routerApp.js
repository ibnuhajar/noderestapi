module.exports = (app) => {
    let jsonku = require('../controllers/controller')

    app.route('/')
        .get(jsonku.index)
}