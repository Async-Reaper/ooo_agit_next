import axios from "axios";

import { IInternshipRequest } from "../types/internshipRequestTypes";

export const fetchSendInternship = async (data: IInternshipRequest) => {
  try {
    const response = await axios.post("/api/request-internship", {
      full_name: data.full_name,
      phone_number: data.phone_number,
      email: data.email,
    });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};
