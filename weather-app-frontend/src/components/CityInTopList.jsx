function CityInTopList({data}) {
    return ( 
            <h4>{data.city_name} | {data.search_count}</h4>
     );
}

export default CityInTopList;