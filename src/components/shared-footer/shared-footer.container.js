import { connect } from 'react-redux';
import SharedFooter from './shared-footer.component';

import { searchBooks, asyncBookListSet } from '../../actions/book-list-actions';

const mapStateToProps = (state) => {
  return {
    keyword: ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setupSearch(keyword) {
      dispatch(searchBooks(keyword));
    },
    bookList(){
      dispatch(asyncBookListSet())
    }
  }
}

const SharedFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SharedFooter);

export default SharedFooterContainer;
