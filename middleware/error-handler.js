const { CustomAPIError } = require('../errors/custom-error')

// Error handler function
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'an error occured, please try again' })
}

module.exports = errorHandler
