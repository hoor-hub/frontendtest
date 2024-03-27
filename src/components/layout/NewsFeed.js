import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/actions/allActions';
import { Card, Row, Col } from 'antd';
import SearchAndFilterComponent from '../SearchAndFilter/SearchAndFilterComponent';

const { Meta } = Card;

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { loading, news, error } = useSelector(state => state.news);
  const searchKeyword = useSelector(state => state.searchKeyword);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading === undefined || news === undefined || error === undefined) {
    return <p>Loading...</p>;
  }

  // Filter the news only if searchKeyword is defined
  const filteredNews = searchKeyword ? news.filter(article =>
    article.title && article.title.toLowerCase().includes(searchKeyword.toLowerCase())
  ) : news;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <SearchAndFilterComponent />
      {news && (
        <Row gutter={[16, 16]}>
          {filteredNews.map(article => (
            <Col key={article.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={article.title} src={article.image} />}
              >
                <Meta title={article.title} description={article.description} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default NewsFeed;