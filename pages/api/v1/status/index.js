function status(request, response) {
  response.status(200).json({ chave: "Teste" });
}
export default status;
