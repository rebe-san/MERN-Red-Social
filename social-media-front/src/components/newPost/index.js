import React, { Component } from 'react';


class NewPost extends Component {
    render() {
        return (
            <section id='new-post'>
                <form onSubmit={this.handleSubmit}>
                      {/* user field */}
                      <h3>Crear publicación</h3>
                      <textarea id="input-write-post"
                            type='textfield'
                            placeholder='¿Qué hay de nuevo?'
                            className='form-control'
                            cols={40} rows={10}
                            // value={this.state.user}
                            onChange={this.handleChange}
                            />
                </form>
            </section>
        )
    }
}

export default NewPost;


