interface headerProps {
  user: string;
}

export function Header(props: headerProps) {
  return (
    <div>
      <h1>Note App {props.user}</h1>
    </div>
  );
}
