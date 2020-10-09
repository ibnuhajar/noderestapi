let response = require('./res');
let connection = require('./koneksi')

exports.index = (req,res) => {
    response.ok('aplikasi rest Api berjalan')
}