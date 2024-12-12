// src/components/TrendingSection.tsx
// import React from 'react';
import '../styles/TrendingSection.css';

interface TrendItem {
  id: number;
  name: string;
  description: string;
  image: string;
  author: string;
  date: Date;
}

const trends: TrendItem[] = [
  { id: 1, name: 'Mẫu bao bì đẹp hot nhất trong tháng 10/2024', description: '"Tháng 10/2024 chứng kiến sự bùng nổ của các mẫu bao bì với thiết kế tối giản.', image: '/DUE-web/images/trnding.png', author: 'On Ideas',  date: new Date('2024-10-30')},
  { id: 2, name: 'Mẫu bao bì đẹp hot nhất trong tháng 10/2024', description: '"Tháng 10/2024 chứng kiến sự bùng nổ của các mẫu bao bì với thiết kế tối giản.', image: '/DUE-web/images/trnding.png', author: 'On Ideas',  date: new Date('2024-10-30')},
  { id: 3, name: 'Mẫu bao bì đẹp hot nhất trong tháng 10/2024', description: '"Tháng 10/2024 chứng kiến sự bùng nổ của các mẫu bao bì với thiết kế tối giản.', image: '/DUE-web/images/trnding.png', author: 'On Ideas',  date: new Date('2024-10-30')},
];

const TrendingSection: React.FC = () => {
  return (
    <section className="trending-section">
      <h1>Xu hướng tuần qua</h1>
      <div className="trend-grid">
        {trends.map((trend) => (
          <div key={trend.id} className="trend-item">
            <img src={trend.image} alt={trend.name} className="trend-item-image" />
            <div className="trend-name-box">
              <h3 className="trend-name">{trend.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
