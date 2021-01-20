import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <Header />
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </header>
      </div>
    </GlobalProvider>
  );
}

export default App;
