import database from "../connect.js";

const QUERY = {
    fetchAllBookings:"SELECT b.booking_id, u.username AS user_name, b.date,b.start_time,b.end_time, b.description AS event_description,u.email AS user_email,u.user_type AS user_type,r.room_number, r.capacity, r.availability, e.event_id, e.attendees, e.description AS event_description FROM Booking b JOIN Users u ON b.user_id = u.user_id JOIN Room r ON b.room_id = r.room_id JOIN Event e ON b.event_id = e.event_id;",
    getBuildingByName: "SELECT * FROM Building JOIN Campus ON Building.campus_id = Campus.campus_id WHERE building_name = ?",
    insertBooking :"INSERT INTO Booking (user_id, room_id, date, start_time, end_time, event_id, description) VALUES (?, ?, ?, ?, ?, ?, ?)",
    updateBuldingByName: (updateName) =>`UPDATE Booking SET ${updateName} = ? WHERE room_id = ?`,
    deleteBookingByName: `DELETE FROM Booking WHERE booking_id =?`
}

export const fetchAllBookings = () => new Promise((resolve,reject)=>{
    database.query(QUERY.fetchAllBookings, (error, result) => {
        if (error) {
          reject({
            sucess: false,
            message: "Fetching from the Building error ",
            data: error,
          });
        }
        resolve({
          sucess: true,
          message: "Fetching from the Building success ",
          data: result,
        });
      });
})





export const insertIntoBookings = (data) => new Promise((resolve,reject)=>{
  database.query(QUERY.insertBooking,[...data], (error, result) => {
      if (error) {
        reject({
          sucess: false,
          message: "inseting onto  the bookings error ",
          data: error,
        });
      }
      resolve({
        sucess: true,
        message: "inserting into the booking success ",
        data: result,
      });
    });
})

export const updateBooking = (booking_number, data) =>
  new Promise((resolve, reject) => {
    let response;
    Object.keys(data).map((updatingFeild) => {
      database.query(
        QUERY.updateBuldingByName(updatingFeild),
        [data[updatingFeild], booking_number],
        (error) => {
          if (error) {
            reject({
              sucess: false,
              message: `Updaing the Booking by id error on ${{
                updaingFeild: data[updatingFeild],
              }}`,
              data: error,
            });
          }
        }
      );
    });
    resolve({sucess: true,
        message: "Updating the feild success ",
        data:response})
  });

  

  export const deleteBookingByName = (id) => new Promise((resolve, reject) => {
    database.query(QUERY.deleteBookingByName, [id], (error, result) => {
        if (error) {
            reject({
                success: false,
                message: "Deleting from the Booking error",
                data: error,
            });
        } else {
            resolve({
                success: true,
                message: "Deleting from the Booking success",
                data: result,
            });
        }
    });
});




