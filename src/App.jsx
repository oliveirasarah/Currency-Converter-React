import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import { fromUSD, fromEUR, fromGBP, fromBRL } from "./js/calculateFunctions";

function App() {
  const [output, setOutput] = useState("");
  const [selectedInput, setSelectedInput] = useState("dollar");
  const [selectedOutput, setSelectedOutput] = useState("real");

  function handleChange(value) {
    if (selectedInput === selectedOutput) {
      alert("Você não pode escolher a mesma opção");
      location.reload();
    }

    if (selectedInput == "dollar") {
      switch (selectedOutput) {
        case "real":
          setOutput(fromUSD("real", value));
          break;
        case "euro":
          setOutput(fromUSD("euro", value));
          break;
        case "pound":
          setOutput(fromUSD("pound", value));
          break;
      }
    } else if (selectedInput == "euro") {
      switch (selectedOutput) {
        case "real":
          setOutput(fromEUR("real", value));
          break;
        case "dollar":
          setOutput(fromEUR("dollar", value));
          break;
        case "pound":
          setOutput(fromEUR("pound", value));
          break;
      }
    } else if (selectedInput == "pound") {
      switch (selectedOutput) {
        case "real":
          setOutput(fromGBP("real", value));
          break;
        case "dollar":
          setOutput(fromGBP("dollar", value));
          break;
        case "euro":
          setOutput(fromGBP("euro", value));
          break;
      }
    } else if (selectedInput == "real") {
      switch (selectedOutput) {
        case "pound":
          setOutput(fromBRL("pound", value));
          break;
        case "dollar":
          setOutput(fromBRL("dollar", value));
          break;
        case "euro":
          setOutput(fromBRL("euro", value));
          break;
      }
    }
  }

  return (
    <>
      <Header />

      <main>
        <form>
          <Input
            handleChange={handleChange}
            setSelectedInput={setSelectedInput}
          />

          <div className="container output">
            <input
              type="text"
              readOnly
              value={output}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
            <select
              name="currencies-output"
              id="currencies-output"
              onChange={(e) => {
                setSelectedOutput(e.target.value);
                setOutput("");
              }}
              defaultValue={"real"}
            >
              <option value="dollar">Dólar</option>
              <option value="euro">Euro</option>
              <option value="pound">Libra</option>
              <option value="real">Real</option>
            </select>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
