import { connect } from 'react-redux';
import SharedFooter from './shared-footer.component';

import { searchBooks, asyncBookListSet } from '../../actions/book-list-actions';
import { Toast } from 'native-base';

const mapStateToProps = (state) => {
  return {
    keyword: ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setupSearch(keyword) {
      const callback = () => {
     Toast.show({
       text: 'Caderno não encontrado, verifique se você digitou corretamente!',
       position: 'center',
       buttonText: 'Ok'
     })

      }
      dispatch(searchBooks(keyword, callback));
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
