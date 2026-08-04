import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {todoistApiConfig} from "../../utils/todoist-api";

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: todoistApiConfig.baseUrl,
        prepareHeaders: (headers) => {
            for (let [key, value] of Object.entries(todoistApiConfig.headers)) {
                headers.set(key, value);
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getProjectTasks: builder.query({
            query: () => "/tasks?project_id=2309751576",
            providesTags: (result) => {
                return result ? [
                    ...result.map(({id}) => ({type: "Tasks", id})),
                    { type: "Tasks", id: "LIST" }
                ] : [
                    { type: "Tasks", id: "LIST" }
                ]
            }
        }),
        addTask: builder.mutation({
            query: (content) => ({
                url: "/tasks",
                method: "POST",
                body: JSON.stringify({
                    content,
                    project_id: 2309751576,
                }),
            }),
            invalidatesTags: [ { type: "Tasks", id: "LIST" }]
        }),
        removeTaskById: builder.mutation({
            query: (id) => {
                return {
                    url: `/tasks/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: [ { type: "Tasks", id: "LIST" }]
        })
    })
})

export const { useGetProjectTasksQuery, useAddTaskMutation, useRemoveTaskByIdMutation } = tasksApi;