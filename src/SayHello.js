function SayHello(props) {
  const name = props.name;
  const company = props.company;

  return (
    <p>Hello, {name} from {company}!</p>
  );
}

// Cara pemberian nilai pada properti children berbeda. Alih-alih menggunakan gaya atribut seperti kode di atas, nilai CHILDREN ditetapkan di antara tag pembuka <SayHello> dan tag penutup </SayHello> component. 
// function SayHello({ children }) {
//   return <p>Hello, {children}!</p>;
// }  

export default SayHello;