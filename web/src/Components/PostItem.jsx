import ReactMarkdown from "react-markdown";

export default function PostItem(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td><ReactMarkdown>{props.summary.substring(40,60) + "..."}</ReactMarkdown></td>
      <td>{new Date(props.date).toISOString().substring(0, 10)}</td>
    </tr>
  );
}
