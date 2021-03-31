/* eslint-disable import/no-anonymous-default-export */
 const handler = (
  cb
) => (req, res, next) =>
  cb({ ...req.query, ...req.params, ...req.body })
    .then((r) => res.json(r))
    .catch((err) => next(err));

module.exports = handler;
