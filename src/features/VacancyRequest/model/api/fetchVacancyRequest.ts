import { IVacancyRequest } from "../types/vacancyRequestTypes";


export const fetchVacancyRequest = async (data: IVacancyRequest) => {
  try {
    fetch("/api/request-vacancy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        about_myself: data.about_myself
      })
    })
      .then(r => r.json())
      .then(d => {
        console.log(d);
      })
      .catch(e => console.log(e.message));
  } catch (e) {
    console.log(e);
  }
};
