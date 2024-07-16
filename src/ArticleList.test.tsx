import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from './Articles-Listing/Articles-List';


const articles = [
  { id: 1, title: 'Article 1', abstract: 'Abstract 1' },
  { id: 2, title: 'Article 2', abstract: 'Abstract 2' }
];

test('renders articles', () => {
    const onSelectArticle = jest.fn();
    render(<ArticleList  onSelectArticle={onSelectArticle} />);
  expect(screen.getByText('Article 1')).toBeInTheDocument();
  expect(screen.getByText('Article 2')).toBeInTheDocument();
});

test('selects article', () => {
  const onSelectArticle = jest.fn();
  render(<ArticleList  onSelectArticle={onSelectArticle} />);
  fireEvent.click(screen.getByText('Article 1'));
  expect(onSelectArticle).toHaveBeenCalledWith(articles[0]);
});
