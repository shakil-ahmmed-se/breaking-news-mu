import './App.css';
import AppMu from './components/AppMu/AppMu';

import News from './components/News/News';
import { useEffect, useState } from 'react';


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c4d553cdf344431951f181d49422e2c')
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    
    <>
      <AppMu></AppMu>
   
     
      <h2>Headline :{articles.length}</h2>
      {
        articles.map(article => <News article={article} key={article.url}></News>)
      }
      </>
    
  );
}

export default App;
