import typeDefs from '../../../src/graphql/types';

describe('#typeDefs', () => {
  it('should match the GraphQL schema', () => {
    expect(typeDefs).toMatchSnapshot()
  })
})