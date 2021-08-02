const { Post } = require('../models');

const postData = [{
        title: 'Title 1',
        content: 'This is the content for title 1.',
        user_id: 1

    },
    {
        title: 'Title 2',
        content: 'This is content for title 2.',
        user_id: 2
    },
    {
        title: 'Title 3',
        content: 'This is content for title 3.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;