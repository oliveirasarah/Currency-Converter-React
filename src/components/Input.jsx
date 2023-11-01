import { useState } from "react";

export default function Input({ handleChange, setSelectedInput }) {
  const [input, setInput] = useState("");

  return (
    <div className="container input">
      <input
        type="text"
        onChange={(e) => {
          handleChange(e.target.value);
          setInput(e.target.value);
        }}
        value={input}
      />
      <select
        name="currencies-input"
        id="currencies-input"
        onChange={(e) => {
          setSelectedInput(e.target.value);
          setInput("");
        }}
        defaultValue={"dolar"}
      >
        <option value="dollar">Dólar</option>
        <option value="euro">Euro</option>
        <option value="pound">Libra</option>
        <option value="real">Real</option>
      </select>
    </div>
  );
}
