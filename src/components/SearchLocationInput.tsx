import { AutoComplete } from "@geist-ui/react";
import { ReactElement, useCallback, useMemo, useState } from "react";
import useSWR from "swr";
import { searchLocations } from "../apis";
import { ForecastLocation } from "../types";
import { mapLocationToAutoComplete } from "../utils";

type SearchLocationInput = {
  onSelect: (location?: ForecastLocation) => void;
};

let selecting = false;

function SearchLocationInput(props: SearchLocationInput): ReactElement {
  const [query, setQuery] = useState("");
  const { data } = useSWR<ForecastLocation[]>(
    query ? searchLocations(query) : null,
  );

  const handleSearch = useCallback((currentValue: string) => {
    if (selecting) {
      selecting = false;
    } else {
      setQuery(currentValue);
    }
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      selecting = true;
      const location = data?.find((location) => location.title === value);
      props.onSelect(location);
    },
    [data],
  );

  const options = useMemo(() => mapLocationToAutoComplete(data || []), [data]);
  return (
    <AutoComplete
      width="300px"
      placeholder="Search..."
      options={options}
      onChange={handleSearch}
      onSelect={handleSelect}
      searching={!data && Boolean(query)}
      clearable
    />
  );
}

export default SearchLocationInput;
