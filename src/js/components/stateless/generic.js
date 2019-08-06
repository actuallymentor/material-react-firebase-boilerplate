import React from 'react'
import ReactDOM from 'react-dom'

// Better root component
export class Component extends React.Component {

  constructor( props ) {
    super( props )

    // Class-wide functions
    // Update the state in an async way
    this.promiseState = newState => new Promise( resolve => this.setState( newState, resolve ) )
    // A helper to update the state without replacing it
    this.updateState = updates => this.promiseState( { ...this.state, ...updates } )

  }

}

// Placeholder
export const other = true