const QUERY= {
    getRoom:"SELECT *  FROM room JOIN building ON room.building_id = building.building_id JOIN campus ON building.campus_id = campus.campus_id",
}


export default QUERY
