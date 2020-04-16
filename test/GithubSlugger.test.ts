import { GithubSlugger } from '../src';

describe('GithubSlugger', () => {
  it('basic usage', () => {
    const slugger = new GithubSlugger();
    expect(slugger.slug('foo')).toEqual('foo');
    expect(slugger.slug('foo bar')).toEqual('foo-bar');
    expect(slugger.slug('foo')).toEqual('foo-1');
  });
});
