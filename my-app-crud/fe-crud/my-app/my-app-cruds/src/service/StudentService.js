import axios from "axios";


export const getAllStudent = async () => {
    try {
        const temp = await axios.get(`http://localhost:8080/api/student/list`);
        return temp.data;
    } catch (e) {
        console.log(e);
    }
}
export const getAllAcademicPerformance = async () => {
    try {
        const temp = await axios.get("http://localhost:8080/api/academicPerformance/list");
        return temp.data;
    } catch (e) {
        console.log(e);
    }
}
export const saveStudent = async (student) => {
    try {
        const temp = await axios.post("http://localhost:8080/api/student/create", student);
        return temp.data;
    } catch (e) {
        console.log(e);
    }
}
export const deleteStudent = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/student/delete/${id}`);
    } catch (e) {
        console.log(e);
    }
}
export const updateStudent = async (st) => {
    try {
        await axios.put(`http://localhost:8080/api/student/update`, st);
    } catch (e) {
        console.log(e);
    }
}