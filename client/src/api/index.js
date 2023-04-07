import axios from 'axios'

const API=axios.create({baseURL: 'https://starter-micro-api-zeta.vercel.app/'})

API.interceptors.request.use((req) =>{
    // console.log(process.env.REACT_APP_JWT_SECRET_TOKEN)
    if (localStorage.getItem("Profile")) {
        req.headers.authorization = `Bearer ${
          JSON.parse(localStorage.getItem("Profile")).token
        }`;
      }
    // if(localStorage.getItem('Profile')){
    // }
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbmRhbndhcnNhY2hpbjVAZ21haWwuY29tIiwiaWQiOiI2NDE3MmI3OGEyODQ5ODA0N2E2ZDIzZmEiLCJpYXQiOjE2NzkyNDAwNTcsImV4cCI6MTY3OTI0MzY1N30.0OHeXoox838UELO6eiBoAfD2hgv4UMVfSPS8ciYOQpo"
    return req
})
export const logIn=(authData)=>API.post('/user/login',authData)
export const signUp=(authData)=>API.post('/user/signup',authData)
 

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get')
export const deleteQuestion = (id) =>API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) =>API.patch(`/questions/vote/${id}`, {value, userId})


export const postAnswer = (id,noOfAnswers, answerBody, userAnswered, userId)=>API.patch(`/answer/post/${id}`,{ noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = ( id, answerId, noOfAnswers )=>API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })


export const getAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)