// import student from '../components/Students/Student/Student';
import * as actionTypes from './actions';

const initalState = {
    students: [
        {
            id: 0,
            firstName: "Dummy1",
            lastName: "Data",
            dob: "24.05.1997",
            idIL: "123456789",
            city: "Eilat"
        },
        {
            id: 1,
            firstName: "Dummy2",
            lastName: "Data",
            dob: "24.05.1997",
            idIL: "123456789",
            city: "Eilat"
        },
        {
            id: 2,
            firstName: "Dummy3",
            lastName: "Data",
            dob: "24.05.1997",
            idIL: "123456789",
            city: "Eilat"
        },
        {
             id: 3,
            firstName: "Dummy4",
            lastName: "Data",
           dob: "24.05.1997",
            idIL: "123456789",
            city: "Eilat"
        },
        {
            id: 4,
           firstName: "Dummy5",
           lastName: "Data",
          dob: "24.05.1997",
           idIL: "123456789",
           city: "Eilat"
       },
       {
        id: 5,
       firstName: "Dummy6",
       lastName: "Data",
      dob: "24.05.1997",
       idIL: "123456789",
       city: "Eilat"
   }
    ],
    counter:0    
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_STUDENT:            
            return {
                ...state,
                students: state.students.concat(action.newStudent)
            }
        case actionTypes.REMOVE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.studentId)
            }

    }    
    return state;
};

export default reducer;