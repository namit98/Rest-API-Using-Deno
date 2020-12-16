
import { Application,Router } from "https://deno.land/x/oak/mod.ts";

//Model
interface Course {
    name:String,
    price:number,
    certification:boolean
}


//Data
let courses:Array<Course>=[

    {
        name:'C++ Course',
        price:200,
        certification:true
    },
    {
        name:'Python Course',
        price:300,
        certification:true
    },
    {
        name:'Java Course',
        price:200,
        certification:true
    },
    {
        name:'JavaScript Course',
        price:200,
        certification:true
    }
];



//Controllers

export const getCourses=({response}:{response:any})=>{
    response.body=courses;


};

export const addCourses= async (
    {request,response}:{request:any,response:any}
    )=>{
    const body=await request.body();
    const course:Course=body.value;

    courses.push(course);
    response.body={coursesAdded:'SUCCESS'};
    response.status=200;


};

//Server File
const router=new Router();
const app=new Application();

const PORT =4300;

router
    .get('/learn',getCourses)
    .post('/create',addCourses);

app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: 4300 });




