class BookService {
  async getAllBook(page = 1, pageSize = 10) {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/books?page=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        return await response.json();
      } else {
        return Promise.reject(response.statusText);
      }
    } catch (error) {
      console.error(`ERROR GET DATA: ${error.message}`);
    }
  }
}
