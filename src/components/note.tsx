export interface propsNote {
  id?: number;
  title: string;
  content: string;
}

export function Note(props: propsNote) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
