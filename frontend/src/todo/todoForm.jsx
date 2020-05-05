import React, { Component } from 'react'

import Grid from '../template/grid'

import IconButton from '../template/iconButton'

export default class TodoForm extends Component {
    
    constructor(props) {
        super(props)
        this.keyHandle = this.keyHandle.bind(this)

    }

    keyHandle(e) {
        console.log(e.target.value)
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' 
                            onChange={this.props.handleChange}
                            placeholder='Adicione uma tarefas'
                            value={this.props.description}
                            onKeyUp={this.keyHandle}
                        />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'  onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='info' icon='close'  onClick={this.props.handleClear}></IconButton>
                    
                </Grid>
                
            </div>
        )
    }
}