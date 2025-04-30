function Message({ count, text, hoge }) {
  const doubleCount = count * 2;
  return (
    <div className="message-container">
      <p>{text}</p>
      <p>{hoge}</p>
      <p>countの倍数: {doubleCount}</p>
    </div>
  );
}

export default Message;
