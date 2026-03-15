import React from 'react';
import './App.css';

// 状态栏组件
const StatusBar: React.FC = () => {
  return (
    <div className="status-bar">
      <div className="status-bar-content">
        <div className="status-left">
          <span className="time">9:41</span>
        </div>
        <div className="status-right">
          <div className="signal-icon">
            <svg width="17" height="10.67" viewBox="0 0 17 10.67" fill="none">
              <rect x="0" y="6.67" width="3" height="4" rx="1" fill="black"/>
              <rect x="4" y="4.67" width="3" height="6" rx="1" fill="black"/>
              <rect x="8" y="2.33" width="3" height="8.33" rx="1" fill="black"/>
              <rect x="12" y="0" width="3" height="10.67" rx="1" fill="black"/>
            </svg>
          </div>
          <div className="wifi-icon">
            <svg width="15.27" height="10.97" viewBox="0 0 15.27 10.97" fill="none">
              <path d="M7.64 10.97a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="black"/>
              <path d="M4.64 7.64a4.5 4.5 0 016 0" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2.14 5.14a8 8 0 0111 0" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="battery-icon">
            <svg width="24.33" height="11.33" viewBox="0 0 24.33 11.33" fill="none">
              <rect x="0" y="0" width="22" height="11.33" rx="2.67" stroke="black" strokeWidth="1"/>
              <rect x="1.5" y="2" width="18" height="7.33" rx="1.33" fill="black"/>
              <rect x="23" y="3.67" width="1.33" height="4" rx="0.67" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="notch"></div>
    </div>
  );
};

// 底部导航项组件
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="nav-icon">{icon}</div>
      <span className="nav-label">{label}</span>
    </div>
  );
};

// 创作图标
const CreateIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 16V20H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8V4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 4L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 20L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 我的图标
const MineIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// 寻梦图标（激活状态）
const DreamIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={active ? '#6caaf5' : '#999'} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 8l4 2v4l-4 2-4-2v-4l4-2z" fill={active ? '#6caaf5' : '#999'}/>
  </svg>
);

// 卡片等级配置
const cardLevels = [
  { level: 'SS', color: '#f5bf57', text: 'SS级卡片等待解锁', width: 180 },
  { level: 'S', color: '#e13b4f', text: 'S级卡片等待解锁', width: 171 },
  { level: 'A', color: '#389ae9', text: 'A级卡片等待解锁', width: 171 },
  { level: 'B', color: '#59c15b', text: 'B级卡片等待解锁', width: 171 },
  { level: '?', color: '#999999', text: '未知等级卡片等待解锁', width: 204 },
];

// 卡片项组件
interface CardItemProps {
  level: string;
  color: string;
  text: string;
  width: number;
}

const CardItem: React.FC<CardItemProps> = ({ level, color, text, width }) => {
  return (
    <div className="card-item" style={{ width: width }}>
      <div className="card-content">
        <div className="card-badge" style={{ backgroundColor: color }}>
          <span>{level}</span>
        </div>
        <div className="card-text">{text}</div>
        <div className="card-arrow">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 3L12 9L6 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

// 底部导航栏组件
const BottomNavBar: React.FC = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-container">
        <NavItem icon={<CreateIcon />} label="创作" />
        <NavItem icon={<DreamIcon active={true} />} label="寻梦" active={true} />
        <NavItem icon={<MineIcon />} label="我的" />
      </div>
    </div>
  );
};

// 主内容区域
const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <div className="section-header">
        <h1 className="section-title">寻梦周边</h1>
      </div>
      <div className="cards-container">
        {cardLevels.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

// Home Indicator
const HomeIndicator: React.FC = () => (
  <div className="home-indicator">
    <div className="indicator-bar"></div>
  </div>
);

// 主应用组件
const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="phone-frame">
        <StatusBar />
        <MainContent />
        <BottomNavBar />
        <HomeIndicator />
      </div>
    </div>
  );
};

export default App;
