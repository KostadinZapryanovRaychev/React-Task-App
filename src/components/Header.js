import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import classes from "../App.css";

const Header = (props) => {
    const onClicked = () => {
        console.log("clicked")
    }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick={props.onAdd} color={props.showAdd ? "red" : "green"} text={props.showAdd ? "Close" : "Add"}></Button>
            {/* <h2>{props.title}</h2> */}
        </header>
    )
}


Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string

}

export default Header