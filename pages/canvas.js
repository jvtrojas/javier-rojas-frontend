import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import CanvasComponent from '../components/canvas';
import { render } from 'react-dom';
class Canvas extends React.Component {
    componentDidMount(){
        render(<CanvasComponent />, document.getElementById('root'));
    }

    render() {
        return (
            <BaseLayout {...this.props.auth} >
                <BasePage>
                <div id="root"></div>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Canvas;