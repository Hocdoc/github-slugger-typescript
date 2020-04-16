import emoji from 'emoji-regex';

const whitespace = /\s/g;
const specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;

export class GithubSlugger {
  ids: Set<string> = new Set();

  slug(text: string): string {
    const slugText = slug(text);
    let result = '';
    let nr = 0;

    do {
      result = slugText + (nr === 0 ? '' : `-` + nr);
      nr++;
    } while (this.ids.has(result));

    this.ids.add(result);
    return result;
  }
}

export function slug(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(specials, '')
    .replace(emoji(), '')
    .replace(whitespace, '-');
}
