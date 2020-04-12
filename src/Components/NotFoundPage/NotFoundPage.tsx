import * as React from 'react';

export interface Props {
    
}
 
export interface State {
    
}
 
class NotFoundPage extends React.Component<Props, State> {
    render() { 
        return (<div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="bg-danger text-light">Sorry! Not found page...</h1>
                </div>
            </div>
        </div> );
    }
}
 
export default NotFoundPage;