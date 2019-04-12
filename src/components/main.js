import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './homepage';
import About from './about';
import Contact from './contact';
import Labs from './labs';
import Resume from './resume';

const Main = () => (
  <Switch>
    < Route exact path='/' component={HomePage} />
    < Route path='/about' component={About} />
    < Route path='/contact' component={Contact} />
    < Route path='/labs' component={Labs} />
    < Route path='/resume' component={Resume} />
  </Switch>
)
export default Main;
