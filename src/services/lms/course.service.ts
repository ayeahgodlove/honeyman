import { ICourse, ICourseResponse, ICourseResponses } from "@model/lms/course";
import { requestType } from "@services";

export const CourseService = {
  list: (): Promise<ICourseResponses> => requestType.get("/api/courses"),
  details: (code: string): Promise<ICourseResponse> =>
    requestType.get(`/api/courses/${code}`),
  create: (course: ICourse): Promise<ICourseResponse> =>
    requestType.post(`/api/courses`, course),
  update: (course: ICourse): Promise<ICourseResponse> =>
    requestType.put(`/api/courses/${course.id}`, course),
  delete: (course: ICourse): Promise<ICourseResponse> =>
    requestType.del(`/api/courses/${course.id}`, course),
};
