import * as React from 'react';

export interface Props {
    
}
 
export interface State {
    
}
 
class NewsPage extends React.Component<Props, State> {
    render() { 
        return (<div className="container">
            <div className="row">
                <div className="col">Newws</div>
            </div>
        </div> );
    }
}
 
export default NewsPage;