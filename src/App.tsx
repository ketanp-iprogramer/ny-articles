import React, { useState } from 'react';
import ArticleDetails from './Articles-Listing/Article-Details';
import ArticleList from './Articles-Listing/Articles-List';


interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
}

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">NY Times Most Popular Articles List</h1>
      {selectedArticle ? (
        <ArticleDetails article={selectedArticle} onBack={handleBack} />
      ) : (
        <ArticleList onSelectArticle={handleSelectArticle} />
      )}
    </div>
  );
};

export default App;
