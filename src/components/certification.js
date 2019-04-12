import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Certification extends Component {
  render(){
    return(
      <Grid>
        <Cell col={12}>
          <div className='certification-comp' style={{color:'#6a65d8'}}>{this.props.certification}</div>
        </Cell>
      </Grid>
    );
  }
}
export default Certification;
