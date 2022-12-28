const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const healthCheck = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send({ live: true });
});

module.exports = {
  healthCheck,
};
