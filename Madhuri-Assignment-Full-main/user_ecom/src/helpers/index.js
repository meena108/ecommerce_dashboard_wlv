import { toast } from "react-toastify";
export const Toast = (type,resp) => {
    let message;
    if (
      type === "success" &&
      resp.data !== null &&
      typeof resp.data !== "undefined" &&
      !(typeof resp.data === "object" && Object.keys(resp.data).length === 0)
    ) {
      message = resp.data.message ?? "Success";
    } else {
      message = resp?.data?.message ?? "Something went wrong";
    }
    if (resp?.data?.code === 1000) {
      message = resp.data.errors[0].reason;
    }
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  export const convertDateTime = (dateTime, returnType = "dateTime") => {
    if (!dateTime) return;
  
    const createdDate = new Date(dateTime);
  
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = createdDate.getFullYear();
    const month = months[createdDate.getMonth()];
    const date = createdDate.getDate();
    let hour = createdDate.getHours();
    const min = createdDate.getMinutes();
    const sec = createdDate.getSeconds();
    let ampm = "am";
  
    // Convert hour to 12-hour format and determine AM/PM
    if (hour >= 12) {
      ampm = "pm";
      if (hour > 12) {
        hour -= 12;
      }
    }
  
    let time = null;
    if (returnType === "dateTime") {
      time = `${date} ${month} ${year} ${hour}:${min}:${sec}${ampm}`;
    } else if (returnType === "time") {
      return `${hour}:${min}:${sec}${ampm}`;
    } else {
      time = `${date}-${month}-${year}`;
    }
  
    return time;
  };