export function verifyInformations(req, res, next) {
  const informations = req.body
  const { name, job } = informations;
  
  if (name.length !== 0 && job.length !== 0) {
    return next();
  }
  return res.status(404).json("Digite nome/trabalho válidos.");
}