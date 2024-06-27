import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
const prisma=new PrismaClient()
export const signUp=async(req,res,next)=>{
    try{
        const hashPassword=await bcrypt.hash(req.body.Password,10)
  const newUser=await prisma.user.create({
   data:{
 Names:req.body.Names,
    Email:req.body.Email,
    Password:hashPassword
}})
res.status(200).json({
    message:"user created successfully",
    newUser:newUser
})
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({message:"something went wrong please try again"})
    }
}
//get all user
export const getAll=async(req,res,next)=>{
    try{
const users=await prisma.user.findMany()
res.status(200).json({
    message:"all users",
    AllUsers:users
})
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({message:"something went wrong please try again"})
    }
}
//update user
export const update=async(req,res,next)=>{
    try{
        
const updateUser=await prisma.user.update({
    data:req.body,
    where:{
        id:Number(req.query.id)
    }
})
res.status(200).json({
    message:"user updated",
    user:updateUser
})
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({message:"something went wrong please try again"})
    }
}
//deleting user
export const deleteUser=async(req,res,next)=>{
try{
    const remove=await prisma.user.delete({
        where:{
            id:Number(req.query.id)
        }
    })
    res.status(200).json({message:"user deleted successfully"})
}
catch(error){
    console.log(error.message)
    return res.status(500).json({message:"something went wrong please try again"})
}
}