import { SearchBreederContent } from "@component/Search/Breeder/SearchBreederContent";
import { SearchBreederHeader } from "@component/Search/Breeder/SearchBreederHeader";

import { SearchPageLayout } from "@component/Search/SearchPageLayout";

const SearchBreederPage = () => {
  return (
    <SearchPageLayout>
      <SearchPageLayout.Section>
        <SearchPageLayout.Header styles={{ padding: "0px 0px 90px 0px" }}>
          <SearchBreederHeader />
        </SearchPageLayout.Header>

        <SearchBreederContent />
      </SearchPageLayout.Section>

      <SearchPageLayout.Footer styles={{ padding: "0px 0px 90px 0px" }}>
        <SearchPageLayout.Pagination />
      </SearchPageLayout.Footer>
    </SearchPageLayout>
  );
};
export default SearchBreederPage;
