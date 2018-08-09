import React from 'react';
import renderer from 'react-test-renderer';

import TwitteCard from '../components/TwitteCard';
import twittes from '../models/twittes.json';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomTwitte(twittes, random_int) {
	return twittes[random_int];
}

const twitte = getRandomTwitte(twittes, 0);

it('TwitteCard renders without crashing', () => {
  const rendered = renderer.create(<TwitteCard twitte={twitte} />).toJSON();
  expect(rendered).toBeTruthy();
});

it('TwitteCard renders correctly', () => {
  const tree = renderer.create(<TwitteCard twitte={twitte} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TwitteCard should be a View', () => {
  const tree = renderer.create(<TwitteCard twitte={twitte} />).toJSON();
  const twittesList_type = tree.type;

  expect(twittesList_type).toEqual('View');
});

it('TwitteCard has children', () => {
  const tree = renderer.create(<TwitteCard twitte={twitte} />).toJSON();
  const children = tree.children.length > 0 ? true : false;

  expect(children).toBeTruthy();
});

it('TwitteCard has one child', () => {
  const tree = renderer.create(<TwitteCard twitte={twitte} />).toJSON();
  const children_length = tree.children.length;

  expect(children_length).toEqual(1);
});

it('TwitteCard child should be a View', () => {
  const tree = renderer.create(<TwitteCard twitte={twitte} />).toJSON();
  const child = tree.children.shift().type;

  expect(child).toEqual('View');
});

it('TwitteCard twitte should be contained in twittes', () => {
  const tree = <TwitteCard twitte={twitte} />;
  const props_twitte = tree.props.twitte;

  expect(twittes).toContain(props_twitte)
});