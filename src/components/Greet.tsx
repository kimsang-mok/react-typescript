interface GreetProps {
  name: string;
  messageCount?: number;
  isLogin: boolean;
}

function Greet({ name, messageCount = 0, isLogin }: GreetProps) {
  return (
    <div>
      {isLogin ? (
        <h2>
          Welcome {name}! You have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome guest!</h2>
      )}
    </div>
  );
}

export default Greet;
