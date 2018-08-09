import React from 'react';
import renderer from 'react-test-renderer';

import TwittesList from '../components/TwittesList';
import twittes from '../models/twittes.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

it('TwittesList renders without crashing', () => {
  const rendered = renderer.create(<TwittesList />).toJSON();
  expect(rendered).toBeTruthy();
});

it('TwittesList renders correctly', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TwittesList should be a RCTScrollView', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const twittesList_type = tree.type;

  expect(twittesList_type).toEqual('RCTScrollView');
});

it('TwittesList has children', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const children = tree.children.length > 0 ? true : false;

  expect(children).toBeTruthy();
});

it('TwittesList has one child', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const children_length = tree.children.length;

  expect(children_length).toEqual(1);
});

it('TwittesList child should be a View', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const child = tree.children.shift().type;

  expect(child).toEqual('View');
});

it('TwittesList should have twittes', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const twittes = tree.props.dataSource._cachedRowCount > 0 ? true : false;

  expect(twittes).toBeTruthy();
});

it('TwittesList twittes should have the same length as the datasource', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const twittes_length = tree.props.dataSource._cachedRowCount;

  expect(twittes_length).toEqual(twittes.length)
});

it('TwittesList twittes should contain the same random row from datasource', () => {
  const tree = renderer.create(<TwittesList />).toJSON();
  const random_int = getRandomInt(tree.props.dataSource._cachedRowCount);
  const random_twitte = tree.props.dataSource._dataBlob.s1[random_int];

  expect(twittes).toContain(random_twitte);
});
