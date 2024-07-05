import React, { useState, useEffect } from "react";
import HistoryItem from "../HistoryItem/HistoryItem";
import "./History.css";

const History = ({ initialHistoryList }) => {
  const [searchInput, setSearchInput] = useState("");
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    setHistoryList(initialHistoryList);
  }, [initialHistoryList]);

  const filterHistoryList = () => {
    return historyList.filter((eachHistory) =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onDeleteHistory = (id) => {
    const updatedHistoryList = historyList.filter(
      (eachHistory) => eachHistory.id !== id
    );
    setHistoryList(updatedHistoryList);
  };

  const filteredHistoryList = filterHistoryList();

  return (
    <div className="browser-history-bg-container">
      <div className="header-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="search-container">
              <input
                type="search"
                className="search-input"
                placeholder="Search history"
                value={searchInput}
                onChange={onChangeSearchInput}
              />
            </div>
          </div>
        </div>
      </div>
      {filteredHistoryList.length === 0 ? (
        <p className="no-history">There is no history to show</p>
      ) : (
        <ul className="history-container">
          {filteredHistoryList.map((eachHistory) => (
            <HistoryItem
              key={eachHistory.id}
              historyDetails={eachHistory}
              onDeleteHistory={onDeleteHistory}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
