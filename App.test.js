import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('App should be a View', () => {
  const tree = renderer.create(<App />).toJSON();
  const app_type = tree.type;

  expect(app_type).toEqual('View');
});

it('App has children', () => {
  const tree = renderer.create(<App />).toJSON();
  const children = tree.children.length > 0 ? true : false;

  expect(children).toBeTruthy();
});

it('App has two children', () => {
  const tree = renderer.create(<App />).toJSON();
  const children_length = tree.children.length;

  expect(children_length).toEqual(2);
});

it('App first child should be a View', () => {
  const tree = renderer.create(<App />).toJSON();
  const first_child = tree.children.shift().type;

  expect(first_child).toEqual('View');
});

it('App last child should be a RCTScrollView', () => {
  const tree = renderer.create(<App />).toJSON();
  const last_child = tree.children.pop().type;

  expect(last_child).toEqual('RCTScrollView');
});