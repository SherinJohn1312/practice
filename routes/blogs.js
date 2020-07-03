const { new: _new, index,show,create,edit,update,delete: _delete} = require('../controllers/BlogsController');
/*
function auth (req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('danger', 'You need to login first.');
    return res.redirect('/login');
  }
  next();
}
*/

module.exports = router => {
//  router.get('/blogs', index); // public
  
  router.get('/blogs', index); // authenticated
  router.get('/blogs/new', _new); // authenticated
  
  router.post('/blogs', create); // authenticated
  router.post('/blogs/update', update); // authenticated
  router.post('/blogs/delete', _delete); // authenticated
  
  router.get('/blogs/:id/edit', edit); // authenticated
  router.get('/blogs/:id', show); // authenticated
  
};