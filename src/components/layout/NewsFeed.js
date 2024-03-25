// // components/NewsFeed.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Card, Row, Col } from 'antd';
// import { fetchNews } from '../../redux/actions/allActions';

// const { Meta } = Card;

// const NewsFeed = () => {
//   const dispatch = useDispatch();
//   const news = useSelector(state => state.news);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Latest News</h2>
//       <Row gutter={[16, 16]}>
//         {news && news.map(article => (
//           <Col key={article.id} xs={24} sm={12} md={8} lg={6}>
//             <Card
//               hoverable
//               cover={<img alt="example" src={article.image} />}
//             >
//               <Meta title={article.title} description={article.description} />
//               <p>Source: {article.source}</p>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
  
// };

// export default NewsFeed;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col } from 'antd';
import { fetchNews } from '../../redux/actions/allActions';

const { Meta } = Card;

const NewsFeed = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      <h2>Latest News</h2>
      <Row gutter={[16, 16]}>
        {news && news.length > 0 ? (
          news.map(article => (
            <Col key={article.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt="example" src={article.image} />}
              >
                <Meta title={article.title} description={article.description} />
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <p>No news available</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default NewsFeed;
