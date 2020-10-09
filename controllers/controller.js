let response = require('../config/res');
let connection = require('../database/koneksi')

exports.index = (req,res) => {
    response.ok('aplikasi rest Api berjalan',res)
}