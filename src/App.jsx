import { Route,Switch } from 'wouter';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import CursorSpotlight from './components/CursorSpotlight';
import Home from './pages/Home';
import Watches from './pages/Watches';
import WatchDetails from './pages/WatchDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
export default function App(){return <><Loader/><CursorSpotlight/><MainLayout><Switch><Route path="/" component={Home}/><Route path="/collection" component={Watches}/><Route path="/watch/:id" component={WatchDetails}/><Route path="/cart" component={Cart}/><Route path="/checkout" component={Checkout}/><Route path="/login" component={Login}/><Route path="/signup" component={Signup}/><Route path="/account" component={Login}/><Route component={NotFound}/></Switch></MainLayout></>}
