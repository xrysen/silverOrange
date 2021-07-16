export default function PostItem(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.summary.replace(/#/g, '').replace(/\n/g, '').substring(0, 60) + "..."}</td>
      <td>{new Date(props.date).toISOString().substring(0, 10)}</td>
    </tr>
  );
}
