// Post Bookings data in database
export const postBooking = async (booking) => {
      const url = `https://y-rust-psi.vercel.app/booking`;
      console.log(url)
  
      const response = await fetch(url, {
          method: "POST",
          headers: {
              'content-type': ['application/json']
          },
          body: JSON.stringify(booking)
      })
  
      const data = await response.json();
      return data;
  }



  export const deleteBooking = async (id) => {
    const url = `https://y-rust-psi.vercel.app/booking/delete/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const data = await response.json();
    return data;
}