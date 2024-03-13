import styles from "./App.module.scss";
import aviasalesLogo from "../../assets/Logo.png";
import SideFilter from "../SideFilter/SideFilter";
import SuggestionsTabs from "../SuggestionsTabs/SuggestionsTabs";
import TicketsListContainer from "../../containers/TicketsListContainer";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="#" className={styles.logo_link}>
          <img src={aviasalesLogo} alt="aviasales logo" />
        </a>
      </header>
      <section className={styles.content}>
        <aside>
          <SideFilter />
        </aside>
        <main className={styles.main_content}>
          <SuggestionsTabs />
          <TicketsListContainer />
        </main>
      </section>
    </div>
  );
};

export default App;
