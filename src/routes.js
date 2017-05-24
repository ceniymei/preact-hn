import {h} from 'preact';
import {Router} from 'preact-router';
import RoutedView from './core/routedView.js';
import LoadingView from './core/loadingView.js';
import {LIST_TYPES} from './lists/constants.js';

const ROUTE_BUNDLE_LIST = require('bundle-loader?lazy&name=ListHome!./lists/views/list.js');

export default function(props) {
  return (
    <Router>
      <RoutedView path='/top/:page' default listType={LIST_TYPES.top} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/new' listType={LIST_TYPES.new} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/new/:page' listType={LIST_TYPES.new} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/show' listType={LIST_TYPES.show} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/show/:page' listType={LIST_TYPES.show} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/ask' listType={LIST_TYPES.ask} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/ask/:page' listType={LIST_TYPES.ask} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/jobs' listType={LIST_TYPES.jobs} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/jobs/:page' listType={LIST_TYPES.jobs} load={ROUTE_BUNDLE_LIST} {...props} />
      <RoutedView path='/about' load={require('bundle-loader?lazy&name=AboutHome!./about/views/about.js')} {...props} />
      <RoutedView path='/item/:id' load={require('bundle-loader?lazy&name=ItemHome!./item/views/item.js')} {...props} />
      <RoutedView path='/user/:id' load={require('bundle-loader?lazy&name=UserHome!./lists/views/user.js')} {...props} />
    </Router>
  );
}