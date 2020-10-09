exports.ok = (values, res) => {
    let data = {
        'status': 200,
        'values': values
    }

    console.log(values)
    res.json(data)
    res.end()
}