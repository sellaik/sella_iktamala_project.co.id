import CategoryPopular from "../sections/product-section/CategoryPopular";
import FeaturesSection from "../components/FeaturesSection";
import OptionSection from "../sections/product-section/OptionSection";
import SearchProjectSection from "../sections/product-section/SearchProjectSection";
function HomePage() {
  return (
    <>
      <SearchProjectSection />
      <OptionSection />
      <FeaturesSection />
      <CategoryPopular />
    </>
  );
}

export default HomePage;
