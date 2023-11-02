import React, { useState } from "react";
import { collection, addDoc, Firestore } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./createForm.css";
import { Timestamp } from "firebase/firestore";
import { AddVenta } from "../../components/formAddVenta/addVenta";
import { AddMedi } from "../../components/formAddmedi/addMedi";
import { AddReceta } from "../../components/formAddReceta/addReceta";

export const CreateForm = ({form}) => {
  
  return (
    <>
    {form === "addVenta" && <AddVenta/>}

    {form === "addMedi" && <AddMedi/>}
      
    {form === "addReceta" && <AddReceta/>}
    </>

  );
};
