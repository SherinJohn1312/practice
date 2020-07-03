const viewPath = ('blogs');
const Blog = require('../models/blog');
//const User = require('../models/user');

exports.index =async(req, res) => {
  const blogs =await Blog.find();
  res.render(`${viewPath}/index`, {
    pageTitle: 'Archive',
    blogs: blogs
  });
  
};

exports.show = async(req, res) => {
  console.log(req.params);
  const blog = await Blog.findById(req.params.id)
  //console.log(blog);
  res.render(`${viewPath}/show`,
  {
    pageTitle: blog.title,
    blog: blog
  })
  res.send(`Hi Show`)
};


exports.new = (req, res) => {
res.render(`${viewPath}/new`,
{pageTitle: `Hi New Blog`})
};

exports.create = async (req, res) => {
  console.log(req.body);
  try{
    const blog = await Blog.create(req.body)
    res.redirect(`/blogs/${blog.id}`);
  }catch(error) {
    res.send(err);
  }
  
  
  
 
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
