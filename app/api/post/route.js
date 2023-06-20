import DbConnect from "@/app/utils/DbConnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import Post from "@/app/models/Post"


// db connection
DbConnect();

export async function GET(req){
    let data = await Post.find({});
    return NextResponse.json({data})   
}

export async function POST(req){
    let records = await req.json();
    let newPost = new Post(records)
    newPost = await newPost.save();
    
    return NextResponse.json({"msg":"data inserted SUccessfully","data":newPost})
}

