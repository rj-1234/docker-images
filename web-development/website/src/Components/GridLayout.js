import React, {Component} from 'react';

class GridLayout extends Component {
    
    render() {
        const style_row = {color:'red', border:'solid black'}
        const style_col1 = {color:'blue', border:'dotted black'}
        const style_col2 = {color:'green', border:'dotted black'}

        return (
            <div >
                <div className="row" style={style_row}>
                    <div className="col-1" style={style_col1}>
                        Column 1
                    </div>
                    <div className="col-11" style={style_col2}>
                        Column 2
                    </div>
                </div>
            </div>
          );
    }
}

export default GridLayout