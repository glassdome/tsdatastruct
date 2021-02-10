import { evaluate, makeParseTree } from './simpleparser';

// TODO: More and better tests. Test floats.
describe('simpleparser', () => {
  test('evaluate() should parse a simple expression tree', () => {
    const tree1 = makeParseTree('(3 + (4 * 5))');
    const answer1 = evaluate(tree1);
    expect(answer1).toEqual(23);

    const tree2 = makeParseTree('( (5 * (2 + 3)) * (5 * 20) )');
    const answer2 = evaluate(tree2);
    expect(answer2).toEqual(2500);
  });
});
