var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post')

Post.add({
  title: { type: String, required: true, initial: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  content: {
		brief: { type: Types.Html, height: 150 },
		extended: { type: Types.Html, height: 400 },
	},
  categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.schema.pre('save', function (next) {
  let Post = this;
  if (Post.isModified('published') && Post.published) {
    this.publishDate = Date.now();
  }
  return next();
});

Post.defaultColumns = 'title, state|20%, publishedDate|20%';
Post.register();