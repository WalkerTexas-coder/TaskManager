import PropTypes from 'prop-types'
import Button from'./Button.js'

const Header = ({ title, onAdd, showAddTask }) => {
    
    return (
        <header className='header'>
           <h1 >{title}</h1>
           <Button color={showAddTask ? 'Darkred' : 'Green'} text={showAddTask ? 'Close' : 'Add'} onClick = {onAdd}/>
        </header>
    )
}
Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}
const headingStyle ={
    color: 'red', 
    backgroundColor: 'black',
}

export default Header
