import searchReducer from '../../../search/reducers';
import * as constants from '../../../search/constants';

describe('search reducer', () => {
  it('should handle the UPDATE_SEARCH_TERM action', () => {
    const action = {
      type: constants.UPDATE_SEARCH_TERM,
      searchTerm: 'victoria'
    };

    const result = searchReducer('', action);

    expect(result).toEqual('victoria');
  });
});
