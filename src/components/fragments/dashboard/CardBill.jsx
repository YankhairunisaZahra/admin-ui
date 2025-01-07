// /* eslint-disable no-unused-vars */
// import { useContext, useEffect, useState } from "react";
// import bills from "../../../data/bills";
// import Card from "../../Elements/Card";
// import axios from "axios";
// import { AuthContext } from "../../../context/authContext";
// import { NotifContext } from "../../../context/notifContext";
// import { Navigate, useNavigate } from "react-router-dom";

// const CardBill = () => {
//     const [bills, setBills] = useState([]);
//     const { setIsLoggedIn, setName } = useContext(AuthContext);
//     const { setMsg, setOpen } = useContext(NotifContext);
//     const navigate = useNavigate();

//     const getData = async () => {
//         try {
//             const refreshToken = localStorage.getItem("refreshToken");

//             const response = await axios.get(
//                 "https://jwt-auth-eight-neon.vercel.app/bills",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${refreshToken}`,
//                     },
//                 }
//             );

//             if (response?.data?.data && response.data.data.length > 0) {
//                 setBills(response.data.data);
//             } else {
//                 setMsg({
//                     severity: "error",
//                     desc: "No bill data found.",
//                 });
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 401) {
//                 setOpen(true);
//                 setMsg({
//                     severity: "error",
//                     desc: "Session Has Expired. Please Login.",
//                 });
//                 setIsLoggedIn(false);
//                 setName("");
//                 localStorage.removeItem("refreshToken");
//                 navigate("/login");
//             } else {
//                 console.error(error.response);
//             }
//         }
//     };

//     useEffect(() => {
//         getData();
//     }, []);



//     const billCard = bills.map((bill) => (
//         <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
//             <div className="flex">
//                 <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
//                     <span className="text-xs">{bill.month}</span>
//                     <span className="text-2xl font-bold">{bill.date}</span>
//                 </div>
//                 <div className="">
//                     <img className="h-6" src={`/images/${bill.logo}`} />
//                     <span className="font-bold">{bill.name}</span>
//                     <br />
//                     <span className="text-xs">Last Charge - {bill.lastCharge}</span>
//                 </div>
//             </div>
//             <div className="flex place-content-center flex-col">
//                 <span className="p-2 border rounded-lg font-bold text-center">
//                     ${bill.amount}
//                 </span>
//             </div>
//         </div>
//     ));

//     return (
//         <Card
//             title="Upcoming Bill"
//             desc={
//                 <div className="h-full flex flex-col justify-around">
//                     {billCard}
//                 </div>
//             }
//         />
//     )
// }

// export default CardBill;

import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";
import { NotifContext } from "../../../context/notifContext";
import Card from "../../Elements/Card";

const CardBill = () => {
    const [bills, setBills] = useState([]);
    const { setIsLoggedIn, setName } = useContext(AuthContext);
    const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
    const navigate = useNavigate();

    const getData = async () => {
        setIsLoading(true)
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            const response = await axios.get(
                "https://jwt-auth-eight-neon.vercel.app/bills",
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            );

            if (response?.data?.data && response.data.data.length > 0) {
                setBills(response.data.data);
                // console.log(response);
            } else {
                setMsg({
                    severity: "error",
                    desc: "No bill data found.",
                });
            }
            setIsLoading(false)
            setOpen(false)
        } catch (error) {
            setIsLoading(true)
            setOpen(true);
            if (error.response && error.response.status === 401) {
                setOpen(true);
                setMsg({
                    severity: "error",
                    desc: "Session Has Expired. Please Login.",
                });
                setIsLoggedIn(false);
                setName("");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("username");
                navigate("/login");
            } else {
                console.error(error.response);
            }
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const billCard = bills.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
            <div className="flex">
                <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
                    <span className="text-xs">{bill.month}</span>
                    <span className="text-2xl font-bold">{bill.date}</span>
                </div>
                <div>
                    <img className="h-6" src={`/images/${bill.logo}`} />
                    <span className="font-bold">{bill.name}</span>
                    <br />
                    <span className="text-xs">Last Charge - {bill.lastCharge}</span>
                </div>
            </div>
            <div className="flex place-content-center flex-col">
                <span className="p-2 border rounded-lg font-bold text-center">
                    ${bill.amount}
                </span>
            </div>
        </div>
    ));

    return (
        <Card
            title="Upcoming Bill"
            desc={
                <div className="h-full flex flex-col justify-around">
                    {billCard}
                </div>
            }
        />
    );
};

export default CardBill;
