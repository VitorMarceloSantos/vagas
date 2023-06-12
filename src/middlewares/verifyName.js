export function validateName(req, res, next) {
  const name = req.query.name;
  // Verificando se o campo name está vazio.
  // Poderia ser realizada algumas verificações extras: quantidade de caracteres, string, ...
  if (name.length !== 0) {
    return next();
  }
  return res.status(404).json("Digite um nome válido.");
}