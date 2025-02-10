import { IConsultationBodyRequest } from "../types/consultationTypes";

export const fetchSendConsultation = async (data: IConsultationBodyRequest) => {
  try {
    fetch("/api/request-consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        full_name: data.full_name,
        phone_number: data.phone_number,
        theme: data.theme,
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
