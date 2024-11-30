import React, { useEffect, useState } from "react";
import "./QuoteList.css";
import { QuoteService } from "../../services/quote.service";
import { Quote } from "../../utils/modal";
import QuoteCard from "../../components/quote-card/Quote-Card";
import { useNavigate } from "react-router-dom";

const quotesService = new QuoteService();

function QuoteListPage() {
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: 1,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-06-24T09:32:30.000Z",
      updatedAt: "2024-06-24T09:32:30.000Z",
    },
    {
      id: 2,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-06-24T14:02:40.000Z",
      updatedAt: "2024-06-24T14:02:40.000Z",
    },
    {
      id: 3,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-06-24T14:05:21.000Z",
      updatedAt: "2024-06-24T14:05:21.000Z",
    },
    {
      id: 4,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-06-24T14:05:51.000Z",
      updatedAt: "2024-06-24T14:05:51.000Z",
    },
    {
      id: 5,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-06-24T14:06:28.000Z",
      updatedAt: "2024-06-24T14:06:28.000Z",
    },
    {
      id: 6,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-07-02T06:33:17.000Z",
      updatedAt: "2024-07-02T06:33:17.000Z",
    },
    {
      id: 7,
      username: "sandy",
      text: "testing",
      mediaUrl:
        "https://media.crafto.app/home/900x900/4653c87a-83f8-4326-afa0-1a06086550ef?dimension=900x900",
      createdAt: "2024-07-02T06:55:59.000Z",
      updatedAt: "2024-07-02T06:55:59.000Z",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    getQuotes();
  }, []);

  async function getQuotes() {
    const data = await quotesService.getQuotes();
  }

  function gotoQuoteCreationPage() {
    navigate("/create");
  }

  return (
    <div className="container-fluid p-relative">
      <div className="header mt-2">
        <header>Quotes</header>
      </div>
      <hr></hr>
      <div className="container quotes-list d-flex flex-row mt-4 ps-3 pe-3">
        {quotes.map((quote: Quote) => (
          <QuoteCard
            key={quote.id}
            text={quote.text}
            createdAt={quote.createdAt}
            mediaUrl={quote.mediaUrl}
            username={quote.username}
          />
        ))}
      </div>
      <div className="action-button-container">
        <div className="action-button" onClick={gotoQuoteCreationPage}>
          +
        </div>
      </div>
    </div>
  );
}

export default QuoteListPage;
