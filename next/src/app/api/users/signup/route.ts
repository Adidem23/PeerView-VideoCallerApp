import { connect } from "@/Db/Dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
import { error } from "console";

connect();

export async function POST(request: NextRequest) {

try{

const reqBody= await request.json();
const {username,email,password}=reqBody;

alert(reqBody);

const user=await User.findOne({email})

if (user) {
    alert("Users Alerady Exists");
}

// const salt= await bcryptjs.genSalt(10);
// const hashedPassword=await bcryptjs.hash(password,salt);


const Newsuser=new User({username,email,password})

const SavedUser=await Newsuser.save()
alert(SavedUser);




}catch(err:any){
    return NextResponse.json({error:error.name},{status:500})
}


}