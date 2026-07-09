type GreetingProps = {
  name: string;
  age: number;
};

function Greeting({ name, age }: GreetingProps) {
  return (
    <h2>
      Hello {name}! You are {age} years old.
    </h2>
  );
}

export default Greeting;