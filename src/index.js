import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import reducers from './reducers';

const API_KEY = ''

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video:[],
      selectedVideo: null
    };

    this.videoSearch('surfboards');


  }
}

videoSearch(term) {
  YTSearch({key: API_KEY, term:'surf'}, (videos)=>{
    this.setState({
      videos:videos,
      selectedVideo: videos[0]
    });
  });
}
// functional component can contain a class based component
// const App = () => {
//   return (
//     <div>
      
//       <SearchBar/>
//       {/* like passing props in REact */}
//       <VideoList video={this.state.videos}/>
//     </div>
//   )
// }


render() {
  const videoSearch = _.debounce(
    (term) => {this.videoSearch(term)},300
    );
  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
      onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
      videos={this.state.videos}/>
    </div>
  )

}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
