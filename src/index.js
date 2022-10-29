import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


import reducers from './reducers';

// API does not change
const API_KEY = 'AIzaSyCoWtZq2HWLhJHEX2MehFBDxMkjvRaUc9o'

// functional component can contain a class based component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[],

      // ????????????????????
      selectedVideo: null 
    };
    this.videoSearch('surf')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term:term}, (videos)=>{
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }
    

  render() {
  const videoSearch = _.debounce(
      (term) => {this.videoSearch(term)}, 500
    );
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/* like passing props in REact */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
        videos = {this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


// const App = () => {
//   return (
//     <div>
      
//       <SearchBar/>
//       {/* like passing props in REact */}
//       <VideoList video={this.state.videos}/>
//     </div>
//   )
// }


// render() {
//   const videoSearch = _.debounce(
//     (term) => {this.videoSearch(term)},300
//     );
//   return (
//     <div>
//       <SearchBar onSearchTermChange={videoSearch} />
//       <VideoDetail video={this.state.selectedVideo}/>
//       <VideoList
//       onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
//       videos={this.state.videos}/>
//     </div>
//   )

// }

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
