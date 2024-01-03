const errMiddleware = (err, req, res, next) => {
  // Si el error tiene un código de estado, utilizarlo
  if (err.statusCode) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  // Si no, enviar un mensaje de error genérico
  res.status(500).send("Error interno del servidor");
};

module.exports = errMiddleware;
