export interface Teacher {
    name: string,
    surname: string,
    description: string,
    email: string,
}

const StudentActions =  {
    ADD_TEACHER: "[TEACHER] ADD_STUDENT",
    EDIT_TEACHER: "[TEACHER] EDIT_STUDENT",
    DELETE_TEACHER: "[TEACHER] DELETE_STUDENT"
}

export const AAddStudent = (payload: Teacher): {action: string, payload: any} => ({
    action: StudentActions.ADD_TEACHER,
    payload
})

export const AEditStudnet = (payload: Teacher): {action: string, payload: any} => ({
    action: StudentActions.EDIT_TEACHER,
    payload
})

export const ADeleteStudent = (payload: Teacher): {action: string, payload: any} => ({
    action: StudentActions.DELETE_TEACHER,
    payload
})