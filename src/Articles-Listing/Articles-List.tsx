import React, { useState, useEffect } from 'react';
import { fetchPopularArticles } from '../Rest-Api/ApiCall';


interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
  media : any;
}

interface Props {
  onSelectArticle: (article: Article) => void;
}

const ArticleList: React.FC<Props> = ({ onSelectArticle }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchPopularArticles();
      setArticles(articles);
      setLoading(false);
    };

    getArticles();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <div
          key={article.id}
          className="p-4 bg-white rounded-lg shadow cursor-pointer"
          onClick={() => onSelectArticle(article)}
        >
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          {article.media.length > 0 && (
            <img src={article.media[0]['media-metadata'][0].url} alt={article.title}  className="p-4 bg-white rounded-lg shadow cursor-pointer" />
          )}
          <p className="text-gray-700">{article.abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
