const pruebaPublication = (req, res) =>{
    return res.status(200).send({
        message: "Mensaje enviado desde controller/publication.js"
    });
}

module.exports = {
    pruebaPublication
}