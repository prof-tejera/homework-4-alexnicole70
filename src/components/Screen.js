const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 40,
        textAlign: "right",
        marginBottom: 10,
        padding:"12px",
        fontSize:"1.5rem",
        
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
