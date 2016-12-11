import * as constants from '../../../search/constants';
import * as actions from '../../../search/actions/searchTerm';

describe('search action creators', () => {
  it('should create an action to update searchTerm', () => {
    const searchTerm = 'victoria';

    const expectedAction = {
      type: constants.UPDATE_SEARCH_TERM,
      searchTerm
    };

    expect(actions.updateSearchTerm(searchTerm)).toEqual(expectedAction);
  });
});
