import { Route, Switch } from "react-router-dom";

import Learn from './learn';
import Shop from './shop';
import Home from "./home";

export default () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/learn' component={Learn} />
            <Route path='/shop' component={Shop} />
        </Switch>
    )
}