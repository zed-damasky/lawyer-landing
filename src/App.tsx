import { Header } from "./components/layout/Header";
import { Hero } from "./sections/Hero/Hero";

/*todo: 
  1. раздел о нас добавить ссылки на АП РБ
  2. контакты - попап с фото входа в офис
  */

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />

        <section
          className="section-padding min-h-screen flex items-center justify-center bg-gray-100"
          id="about"
        >
          <h2 className="text-4x1 font-bold text-dark">О нас</h2>
        </section>

        <section
          className="section-padding min-h-screen flex items-center justify-center"
          id="standarts"
        >
          <h2 className="text-4xl font-bold text-dark">Стандарты</h2>
        </section>

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
