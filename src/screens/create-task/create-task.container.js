import { connect } from 'react-redux'
import CreateTask from './create-task.component'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

const CreateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTask);
export default CreateTaskContainer;