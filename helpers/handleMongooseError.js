const handleMongooseError = (err, data, next) => {
  const {name, code} = err;
  // Якщо ім'я помилки є MongoServerError і номер коду-помилки 11000 то помилка буде 409 а у всіх інших випадках - 400
  const status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
  err.status = status;
  next();
};

module.exports = handleMongooseError;