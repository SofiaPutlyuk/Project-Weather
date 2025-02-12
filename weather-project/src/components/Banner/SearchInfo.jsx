import { Cards } from "../Cards/InfoCards";

export const SearchInfo = ({ weather }) => {
    return (
        <div className="search-info">
            {weather && <Cards weather={weather} />}
        </div>
    );
}

