import { Header } from "./components/layout/Header";
import { AboutLawyers } from "./sections/AboutLawyers/AboutLawyers";
import { Hero } from "./sections/Hero/Hero";
import { Standarts } from "./sections/Standards/Standards";

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

        <section
          id="workflow"
          className="section-padding min-h-screen flex items-center justify-center bg-gray-50"
        >
          <h2 className="text-4xl font-bold text-dark">Этапы</h2>
        </section>

        <section
          id="contacts"
          className="section-padding min-h-screen flex items-center justify-center bg-dark-light text-white"
        >
          <h2 className="text-4xl font-bold">Контакты</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
