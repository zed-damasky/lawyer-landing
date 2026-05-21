import { Header } from "./components/layout/Header";
import { AboutLawyers } from "./sections/AboutLawyers/AboutLawyers";
import { Contacts } from "./sections/Contacts/Contacts";
import { Hero } from "./sections/Hero/Hero";
import { OfferEndArticles } from "./sections/OfferEndArticles/OfferEndArticles";
import { Standarts } from "./sections/Standarts/Standarts";
import { Workflow } from "./sections/Workflow/Workflow";

/*todo: 
  1. раздел о нас добавить ссылки на АП РБ
  2. контакты - попап с фото входа в офис
  3. жесткая привязка к якорям, уменьшить жесткость
  */

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
