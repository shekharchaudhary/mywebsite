import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
  render(){
    return(
      <Grid style={{textAlign:'justify', display:'tanl'}}>
        <Cell col={4}>
          <p>{this.props.startyear}-{this.props.eyear}</p>
          <p style={{color:'#2bb3c0'}}>{this.props.title}</p>
          <p>{this.props.company}</p>
        </Cell>
        <Cell col={8}>
          <p>{this.props.jobdescription}</p>
          <p>{this.props.jobdescription1}</p>
        </Cell>
      </Grid>
    );
  }
}
export default Experience;
