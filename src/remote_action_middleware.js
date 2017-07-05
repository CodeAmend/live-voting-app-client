export default store => next => action => {
  console.log("Middleware", action);
  return next(action);
}
