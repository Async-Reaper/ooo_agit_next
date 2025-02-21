import { IInternshipRequest } from "../types/internshipRequestTypes";

export const fetchSendInternship = async (data: IInternshipRequest) => {
  try {
    fetch("/api/request-internship", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        full_name: data.full_name,
        phone_number: data.phone_number,
        email: data.email,
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
