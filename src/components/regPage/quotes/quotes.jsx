import "./quotes.css";

function Quotes({ quotesData }) {
  return (
    <section className="quotes">
      <div>
        <p className="quotes-text">{quotesData.title}</p>

        <a href={quotesData.link.url} className="quotes-link">
          {quotesData.link.text}
        </a>
      </div>

      <ul className="quotes-body">
        {quotesData.quotes.map((quote) => (
          <li className="quote-element" lang={quote.lang} key={quote.author}>
            <q className="quote">{quote.text}</q>

            <p className="quote-author">{quote.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Quotes;
