import React from 'react';
import PostItem from '../PostItem';
import renderer from 'react-test-renderer';

const post = {
  title: 'My Post',
  author: 'Alice Bob',
  summary:
    'This a test summary that is more than 60 characters long by a few characters',
  date: '2021-07-16',
};

test('Renders a table for posts and authors', () => {
  const tree = renderer.create(
    <PostItem
      title={post.title}
      author={post.author}
      summary={post.summary}
      date={post.date}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
