function middlewareFunction(request, response, next) {
  console.log("Middleware 2");
  next();
}

module.exports = middlewareFunction;
