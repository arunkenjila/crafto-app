import React from "react";
import "./QuoteCard.css";

export default function QuoteCard({ text, mediaUrl, username, createdAt }) {
  return (
    <div className="quote-card d-flex flex-column pt-3 pb-3 ps-3 pe-3 me-4 mb-4">
      <div className="overlay d-flex flex-column mb-3">
        <img src={mediaUrl} width={250} />
        <span className="text">{text}</span>
      </div>
      <div className="footer d-flex flex-row">
        <span>{username}</span>
        <span>{createdAt.split("T")[0]}</span>
      </div>
    </div>
  );
}
