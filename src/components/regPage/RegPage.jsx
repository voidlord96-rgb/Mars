import Form from "./form/form";
import Profession from "./profession/profession";
import Quotes from "./quotes/quotes";

function RegPage({ professionData, quotesData, formData }) {
  return (
    <>
      {/* сюда подключаем компоненты */}
      <Profession professionData={professionData} />
      <Quotes quotesData={quotesData} />
      <Form formData={formData} />
    </>
  );
}

export default RegPage;
