const errorHandler = (err, req, res, next) => {
    console.log(`ERROR ===> ${err.message}`);
    res.status(500).send('Auf dem Server ist ein Fehler aufgetreten!');
};

const notFoundHandler = (req, res, next) => {
    console.log(`NOT FOUND ===> ${req.originalUrl}`);
    res.status(404).send('Die Ressource wurde nicht auf diesem Server gefunden!');
    next();
};

export { errorHandler, notFoundHandler };