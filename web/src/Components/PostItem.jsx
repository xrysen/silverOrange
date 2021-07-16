export default function PostItem(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.summary.substring(0,20) + "..."}</td>
      <td>{new Date(props.date).toISOString().substring(0, 10)}</td>
    </tr>
  );
}
