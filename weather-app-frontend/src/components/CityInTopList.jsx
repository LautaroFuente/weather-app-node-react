import "../styles/CityInTopList.css";

function CityInTopList({ data }) {
  return (
    <div className="citytop-item">
      <span className="citytop-name">{data.city_name}</span>
      <span className="citytop-count">{data.search_count}</span>
    </div>
  );
}

export default CityInTopList;
