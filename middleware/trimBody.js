const trimBodyElements = (req, res, next) => {
  if (req.body.title) {
    req.body.title = req.body.title.trim();
  }
  if (req.body.slug) {
    req.body.slug = encodeURIComponent(req.body.slug.trim());
  }
  if (req.body.metaDescription) {
    req.body.metaDescription = req.body.metaDescription.trim();
  }
  if (req.body.excerpt) {
    req.body.excerpt = req.body.excerpt.trim();
  }
  next();
};
export { trimBodyElements };
