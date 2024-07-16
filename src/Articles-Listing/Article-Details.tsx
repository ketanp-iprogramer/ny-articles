import React from 'react';

interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
}

interface Props {
  article: Article | null;
  onBack: () => void;
}

const ArticleDetails: React.FC<Props> = ({ article, onBack }) => {
  if (!article) {
    return null;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <button onClick={onBack} className="text-blue-500 mb-4">Back</button>
      <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-700 mb-4">{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetails;
