import "./PostItem.css";

export default function PostItem(props) {
  return (
    <div className="single-post">
      <p>{props.title}</p>
      <p>{props.author}</p>
      <p>{props.summary.substring(0,20) + "..."}</p>
      <p>{new Date(props.date).toISOString().substring(0, 10)}</p>
    </div>
  );
}
