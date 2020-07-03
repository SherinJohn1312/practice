const viewPath = 'blogs';
const Blog = require('../models/blog');
//const User = require('../models/user');

exports.index =  (req, res) => {
  res.render(`Hi Index`)
};

exports.show = (req, res) => {
  res.render(`Hi Show`)
};


exports.new = (req, res) => {
res.render(`${viewPath}/new`,
{pageTitle: `Hi New Blog`})
};

exports.create =  (req, res) => {
  console.log(req.body);
  Blog.create(req.body)
  .then(blog => {
    console.log(blog)
  })
  .catch(err => {
    console.error(`Error: ${err}`);
  })
  res.send(`Hi create`)
 
}; 

exports.edit = (req, res) => {
  res.render(`Hi edit`)
};

exports.update =  (req, res) => {
  res.render(`Hi update`)
};

exports.delete =  (req, res) => {
  res.render(`Hi delete`)
};
