import { slug } from '../src';

describe('slug', () => {
  it('basic usage', () => {
    expect(slug("foo")).toEqual("foo");
    expect(slug("foo bar")).toEqual("foo-bar");
    expect(slug("foo")).toEqual("foo");
  });
});
