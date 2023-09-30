import { SearchAnimalContent } from "@component/Search/Animal/SearchAnimalContent";
import { SearchAnimalHeader } from "@component/Search/Animal/SearchAnimalHeader";
import { SearchPageLayout } from "@component/Search/SearchPageLayout";

const SearchAnimalPage = () => {
  return (
    <SearchPageLayout>
      <SearchPageLayout.Section>
        <SearchPageLayout.Header styles={{ padding: "0px 0px 45px 0px" }}>
          <SearchAnimalHeader />
        </SearchPageLayout.Header>
        <SearchAnimalContent />
      </SearchPageLayout.Section>
      <SearchPageLayout.Footer styles={{ padding: "0px 0px 90px 0px" }}>
        <SearchPageLayout.Pagination />
      </SearchPageLayout.Footer>
    </SearchPageLayout>
  );
};

export default SearchAnimalPage;
