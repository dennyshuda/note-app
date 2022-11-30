export function Footer() {
  const today = new Date();
  const year: number = today.getFullYear();

  return (
    <div>
      <p>Copyright &copy; {year} </p>
    </div>
  );
}
