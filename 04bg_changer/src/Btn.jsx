function Btn({ btnColor, textColor = "white", setColor }) {
    return (
        <button
            className="outline-none px-4 rounded-full py-1 shadow-2xl"
            style={{ backgroundColor: btnColor, color: textColor }}
            onClick={() => setColor(btnColor)}
        >
            {btnColor.toUpperCase()}
        </button>
    );
}

export default Btn;
