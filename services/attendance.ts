import api from "@/lib/api";

type AttendanceResponse = {
    success: boolean;
    attendance: unknown;
};

const postAttendanceAction = async (endpoint: string) => {
    const res = await api.post<AttendanceResponse>(endpoint, {});
    return res.data;
};

export const checkIn = () => postAttendanceAction("/attendance/check-in");

export const checkOut = () => postAttendanceAction("/attendance/check-out");

export const breakIn = () => postAttendanceAction("/attendance/break-in");

export const breakOut = () => postAttendanceAction("/attendance/break-out");
