import CategoryPopular from "../sections/product-section/CategoryPopular";
import FeaturesSection from "../components/FeaturesSection";
import OptionSection from "../sections/product-section/OptionSection";
import SearchProjectSection from "../sections/product-section/SearchProjectSection";
import WhyChooseUs from "../sections/home-section/WhyChooseUs";
function HomePage() {
  return (
    <>
      <SearchProjectSection />
      <OptionSection />
      <FeaturesSection />
      <CategoryPopular />
      <WhyChooseUs />
    </>
  );
}

export default HomePage;
