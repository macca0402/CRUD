import React, {useEffect, useState} from "react";
import {FaEye, FaRegEdit, FaTrashAlt} from "react-icons/fa";
import {CiCirclePlus, CiSearch} from "react-icons/ci";
import * as studentService from "../service/StudentService";
import Create from "./modal/Create";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Delete from "./modal/Delete";
import Update from "./modal/Update";
import Detail from "./modal/Detail";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [academicPerformance, setAcademicPerformance] = useState([]);
    const [studentCreate, setStudentCreate] = useState({});
    const {register, reset, handleSubmit, formState: {errors}} = useForm();
    const [showDelete, setShowDelete] = useState(false);
    const [studentDelete, setStudentDelete] = useState(null);
    const [showUpdate, setShowUpdate] = useState(false);
    const [studentUpdate, setStudentUpdate] = useState(null);
    const [showCreate, setShowCreate] = useState(false);
    const [studentDetail,setStudentDetail]=useState(null);
    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await getAllStudent();
        await getAllAcademicPerformance();
    };

    const getAllStudent = async () => {
        try {
            const temp = await studentService.getAllStudent();
            console.log('Student Data:', temp);
            setStudents(temp);
        } catch (e) {
            console.error('Error fetching students:', e);
        }
    };

    const getAllAcademicPerformance = async () => {
        try {
            const temp = await studentService.getAllAcademicPerformance();
            console.log('Academic Performance Data:', temp);
            setAcademicPerformance(temp);
        } catch (e) {
            console.error('Error fetching academic performance:', e);
        }
    };

    const handleCreate = () => {
        setShowCreate(true);
    };

    const onSubmitCreate = async (studentCreate) => {
        try {
            setShowCreate(false);
            await studentService.saveStudent(studentCreate);
            await getAllStudent();
            toast.success("Adding new student successfully");
        } catch (e) {
            console.log(e);
        }
    };

    const handleDelete = (st) => {
        setShowDelete(true);
        setStudentDelete(st);
        console.log(st);
    };

    const removeStudent = async () => {
        if (studentDelete) {
            await studentService.deleteStudent(studentDelete.studentId);
            toast("Removing student successfully.");
            await getAllStudent();
            setStudentDelete(null);
        }
        setShowDelete(false);
    };

    const handleUpdate = (st) => {
        setShowUpdate(true);
        setStudentUpdate(st);

    };

    const onSubmitUpdate = async (st) => {
        try {
            console.log(st);
            await studentService.updateStudent(st);
            toast("Updating student successfully.");
            await getAllStudent();
        } catch (e) {
            console.log(e);
        }
        setShowUpdate(false);
    };


    const handleDetail = (st) => {
        console.log(st);
        setShowDetail(true);
        setStudentDetail(st);
    }
    return (
        <>
            <div className="p-10">
                <div className="flex flex-row py-8 font-semibold">
                    <button type="button"
                            onClick={handleCreate}
                            className="flex flex-row-reverse gap-2 font-semibold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Add new student
                        <CiCirclePlus size={24}/>
                    </button>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Name
                                    <a href="#">
                                        <svg className="w-3 h-3 ms-1.5" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M8.574 21h6.852c1.537 0 2.298-1.707 1.362-3L12 15l-4.788 3c-.936 1.293-.175 3 1.362 3Z"/>
                                            <path opacity=".5"
                                                  d="M15.426 3H8.574c-1.537 0-2.298 1.707-1.362 3L12 9l4.788-3c.936-1.293.175-3-1.362-3Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">Address</th>
                            <th scope="col" className="px-6 py-3">Mark</th>
                            <th scope="col" className="px-6 py-3">Academic Performance</th>
                            <th scope="col" className="px-6 py-3 text-center">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4">No students found.</td>
                            </tr>
                        ) : (
                            students.map((st, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{st.studentId}</td>
                                    <td className="px-6 py-4">{st.nameStudent}</td>
                                    <td className="px-6 py-4">{st.address}</td>
                                    <td className="px-6 py-4">{st.mark}</td>
                                    <td className="px-6 py-4">{st.nameAcademicPerformance}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center space-x-4">
                                            <button type="button" onClick={() => handleDetail(st)}>
                                                <FaEye size={18}/>
                                            </button>
                                            <button type="button" onClick={() => handleUpdate(st)}
                                                    className="text-blue-500 hover:text-blue-700">
                                                <FaRegEdit size={18}/>
                                            </button>
                                            <button type="button" onClick={() => handleDelete(st)}
                                                    className="text-red-500 hover:text-red-700">
                                                <FaTrashAlt size={18}/>
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Create
                showCreate={showCreate}
                setShowCreate={setShowCreate}
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                onSubmitCreate={onSubmitCreate}
                academicPerformance={academicPerformance}
            />
            <Delete showDelete={showDelete}
                    setShowDelete={setShowDelete}
                    studentDelete={studentDelete}
                    removeStudent={removeStudent}/>
            <Update
                showUpdate={showUpdate}
                setShowUpdate={setShowUpdate}
                onSubmitUpdate={onSubmitUpdate}
                studentUpdate={studentUpdate}
                academicPerformance={academicPerformance}
                setStudentUpdate={setStudentUpdate}
            />
            <Detail
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                studentDetail={studentDetail}
                academicPerformance={academicPerformance}
            />
            <ToastContainer/>
        </>
    );
}

export default StudentList;
