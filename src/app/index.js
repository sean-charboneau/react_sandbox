import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        var user = {
            name: 'Sean',
            hobbies: ['Games', 'Food']
        };
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10 col-md-offset-1'>
                        <Home name={'Sean'} age={27}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));