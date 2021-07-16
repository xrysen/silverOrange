import './FullPost.css';
import ReactMarkdown from 'react-markdown';

export default function FullPost(props) {
  return (
    <div className="modal-container">
      <div className="fullpost-content">
        <header style = {{textAlign: "center"}}>
          <h1>{props.title}</h1>
          <h3>By {props.author}</h3>
          <h4>
            Published on {new Date(props.date).toISOString().substring(0, 10)}
          </h4>
        </header>
        <ReactMarkdown>{props.body}</ReactMarkdown>
        <br />
        <footer style={{ textAlign: 'center' }}>
          <button className = "btn" onClick={props.close}>Close</button>
        </footer>
      </div>
    </div>
  );
}
