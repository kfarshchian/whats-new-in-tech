const User = require('./User');
const Blogpost = require('./blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogpost.hasMany(Comment,{
  foreignKey: 'blog_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
module.exports = { User, Blogpost, Comment };
