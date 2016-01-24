module.exports = (req, res) => {
  if (req.statusCode === 404) {
    res.redirect('/404');
  }
};
