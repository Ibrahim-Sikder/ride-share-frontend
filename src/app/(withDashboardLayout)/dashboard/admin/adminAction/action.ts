"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// export async function creteACar(pre: FormData, formData: FormData) {
//   try {
//     const newFormData = {
//       ...Object?.fromEntries(formData),
//       rating: Number(Object?.fromEntries(formData).rating),
//       passengerCapacity: Number(
//         Object?.fromEntries(formData).passengerCapacity
//       ),
//     };

//     const formattedData = JSON.stringify(newFormData);

//     const accessToken = cookies().get("accessToken")?.value;
//     const headers = new Headers();
//     headers.append("Authorization", accessToken!);
//     headers.append("Content-Type", "application/json");

//     const res = await fetch(`${process.env.serverUrl}/cars`, {
//       method: "POST",
//       headers: headers,
//       body: formattedData,
//     });
//     revalidateTag("cars");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
export async function updateCar(
  carId: string,
  pre: FormData,
  formData: FormData
) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      rating: Number(Object?.fromEntries(formData).rating),
      passengerCapacity: Number(
        Object?.fromEntries(formData).passengerCapacity
      ),
    };

    const formattedData = JSON.stringify(newFormData);

    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.localUrl}/cars/${carId}`, {
      method: "PATCH",

      headers: headers,
      body: formattedData,
    });
    revalidateTag("cars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function deleteCar(carId: string) {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.serverUrl}/cars/${carId}`, {
      method: "DELETE",
      headers: headers,
    });
    revalidateTag("cars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function creteACar(pre: FormData, formData: FormData) {
  try {
    const newFormData = {
      ...Object?.fromEntries(formData),
      rating: Number(Object?.fromEntries(formData).rating),
      passengerCapacity: Number(
        Object?.fromEntries(formData).passengerCapacity
      ),
    };

    const formattedData = JSON.stringify(newFormData);

    const accessToken = cookies().get("accessToken")?.value;
    const headers = new Headers();
    headers.append("Authorization", accessToken!);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${process.env.localUrl}/cars`, {
      method: "POST",
      headers: headers,
      body: formattedData,
    });
    revalidateTag("cars");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}