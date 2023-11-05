export const formatDate = (date: Date): string => {
      let year = date.getFullYear();
      let month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      return `${day}/${month}/${year} ${hour}:${minute}`;
}