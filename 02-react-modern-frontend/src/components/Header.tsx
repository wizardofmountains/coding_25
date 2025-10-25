import { CloudSun } from 'lucide-react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <CloudSun className="header-icon" size={32} strokeWidth={2} />
        <div>
          <h1 className="app-title">Weather Dashboard</h1>
          <p className="app-subtitle">Get real-time weather updates for any city</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

