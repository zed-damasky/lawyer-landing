import { Header } from "./components/layout/Header";
import { AboutLawyers } from "./sections/AboutLawyers/AboutLawyers";
import { Contacts } from "./sections/Contacts/Contacts";
import { Hero } from "./sections/Hero/Hero";
import { OfferEndArticles } from "./sections/OfferEndArticles/OfferEndArticles";
import { Standarts } from "./sections/Standarts/Standarts";
import { Workflow } from "./sections/Workflow/Workflow";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutLawyers />
        <Standarts />
        <Workflow />
        <OfferEndArticles />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
