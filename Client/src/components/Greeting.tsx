type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <h2>Hello {name}! Welcome to React Development.</h2>;
}

export default Greeting;